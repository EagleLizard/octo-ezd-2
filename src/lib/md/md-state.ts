
export const tk_state_enum = {
  line_start: 'line_start',
  line: 'line',
} as const;
export type TK_STATE = typeof tk_state_enum[keyof typeof tk_state_enum];

