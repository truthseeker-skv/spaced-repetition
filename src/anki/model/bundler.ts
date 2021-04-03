import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import * as Analyzer from 'webpack-bundle-analyzer';

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer({
  getDisplayName(filename: string, bindingName?: string): string | undefined {
    const parsed = path.parse(filename);
    let name = parsed.name;

    if (name === 'index') {
      [name] = parsed.dir.split(path.sep).slice(-1);
    }

    // starts with lower case or name of file same as a name of component
    if (/^[a-z]/.test(name) || name.toLowerCase() === bindingName?.toLowerCase()) {
      return bindingName;
    }

    return name + '_' + bindingName;
  }
});
// const BundleAnalyzerPlugin = Analyzer.BundleAnalyzerPlugin;

interface IModelGeneratorCtor {
  modelName: string;
  outputDir: string;
  entries: Record<string, string>;
  isWatch?: boolean;
  onAfterEmit?: () => void;
}

export function bundleModelScripts({
  modelName,
  outputDir,
  entries,
  isWatch = false,
  onAfterEmit = () => void 0,
}: IModelGeneratorCtor): Promise<void> {

  fs.rmdirSync(outputDir, { recursive: true });

  return new Promise((resolve, reject) => {
    webpack({
      target: 'web',
      entry: entries,
      output: {
        path: outputDir,
        filename: '[name].js',
      },
      optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: `_${modelName}.vendors`,
              chunks: 'all',
            },
          },
        },
        minimize: !isWatch,
      },
      mode: isWatch ? 'development' : 'production',
      devtool: false,
      watch: isWatch,
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  getCustomTransformers: () => ({
                    before: [styledComponentsTransformer],
                  }),
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              'css-loader',
            ],
          },
        ]
      },
      plugins: [
        new CompilerHooksPlugin({
          shouldEmit: () => {
            fs.rmdirSync(outputDir, { recursive: true });
            return true;
          },
          afterEmit: () => {
            (async () => {
              await onAfterEmit();
              console.log('-> Model has bundled');
              if (!isWatch) {
                resolve(void 0);
              }
            })();
          },
          watchClose: () => resolve(void 0),
          failed: (err) => reject(err),
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        // new BundleAnalyzerPlugin(),
      ],
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
          'react': require.resolve('react'),
          'react-dom': require.resolve('react-dom'),
          'styled-components': require.resolve('styled-components'),
        }
      }
    }, (err, stats) => {
      if (err || stats?.hasErrors()) {
        reject(`Webpack error! ${err || stats?.compilation.errors.map(e => e.message).join(';\r\n')}`);
      }
    });
  })
}

class CompilerHooksPlugin {
  constructor(private hooksBinders: Partial<Record<keyof webpack.Compiler['hooks'], <T, R>(...args: Array<T>) => any>>) {
  }

  apply(compiler: webpack.Compiler) {
    getKeys(this.hooksBinders)
      .forEach((hookName) => {
        compiler.hooks[hookName].tap(this.constructor.name, this.hooksBinders[hookName]!);
      });
  }
}

const getKeys = <T extends {}>(o: T): Array<keyof T> => <Array<keyof T>>Object.keys(o);
