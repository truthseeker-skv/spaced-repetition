export function trimTags(content: string): string {
  return content?.replace(/<strong>/gm, '**{{')
    .replace(/<\/strong>/gm, '}}**')
    .replace(/<\/?[^>]+>/gm, '');
}
