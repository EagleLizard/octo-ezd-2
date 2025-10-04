
const cmd_map = {
  markdown: 'md',
  etc: 'etc',
} as const;
export type OctoCommand = keyof typeof cmd_map;

export const octoCommand = {
  cmd_map,
} as const;
