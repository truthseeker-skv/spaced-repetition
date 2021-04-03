import crypto, { BinaryToTextEncoding } from 'crypto';

export function generateChecksum(content: string, algorithm?: string, encoding?: BinaryToTextEncoding) {
  return crypto
    .createHash(algorithm || 'md5')
    .update(content, 'utf-8')
    .digest(encoding || 'hex');
}

export function genId(seed: string): string {
  return generateChecksum(seed).slice(-12);
}

