import { ENoteFields } from '../consts';
import { INoteModel, INoteTemplate } from '../services/model';

export function getCardDynamicModel(name: string, frontFileName: string, backFileName: string): INoteModel {
  const modelName = `${name}::model`;

  return {
    modelName,
    inOrderFields: [ENoteFields.Front, ENoteFields.Back],
    css: '',
    cardTemplates: getDynamicTemplates(name, frontFileName, backFileName),
  };
}

function getDynamicTemplates(name: string, frontFileName: string, backFileName: string): Array<INoteTemplate> {
  return [{
    Name: `${name}::model::template`,
    Front: `
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=block" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="_${name}.vendors.css">
      <link rel="stylesheet" type="text/css" href="${frontFileName}.css">
      
      <div id="card" style="display:none">
        {{${ENoteFields.Front}}}
      </div>
      
      <script src="_${name}.vendors.js"></script>
      <script src="${frontFileName}.js"></script>
    `,

    Back: `
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=block" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="_${name}.vendors.css">
      <link rel="stylesheet" type="text/css" href="${backFileName}.css">
      
      <div id="card" style="display:none">
        {{${ENoteFields.Back}}}
      </div>
      
      <script src="_${name}.vendors.js"></script>
      <script src="${backFileName}.js"></script>
    `,
  }];
}
