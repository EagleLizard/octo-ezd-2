
export const md_token_types = {
  empty_line: 'empty_line',
  atx_heading: 'atx_heading',
  setext_heading: 'setext_heading',
  text: 'text',
  emphasis_1: 'emphasis_1',
  emphasis_2: 'emphasis_2',
  escape: 'escape',
  newline: 'newline',
  term: 'term',
} as const;
export type MD_TOKEN_TYPE = typeof md_token_types[keyof typeof md_token_types]

export type MdToken = {
  type: MD_TOKEN_TYPE;
  str: string;
} & {};
