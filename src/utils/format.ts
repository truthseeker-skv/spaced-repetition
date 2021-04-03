export const escapeQuotes = (text?: string): string => text?.replace(/"/gm, '\'') ?? '';

export const replaceSlash = (text?: string) => text?.replace(/\//gm, '') ?? '';
