
import { OctoCommand } from './octo-command';

export type OctoArgs = {
  cmd: OctoCommand;
  restArgs: string[];
} & {};
