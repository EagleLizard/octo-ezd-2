
import fs from 'fs';

import { test_data_dir_path } from '../../lib/constants';
import { OctoArgs } from '../../lib/models/octo-args';
import path from 'path';
import { MdLexer } from '../../lib/md/md-lexer';

let custom_test_files = [
  'test_inline-1',
  'test_head-1',
  'test_head-2',
];

export async function mdMain(oArgs: OctoArgs) {
  console.log('mdMain ~');
  console.log(oArgs);
  customTests();
}

function customTests() {
  for(let i = 0; i < custom_test_files.length; i++) {
    let customTestFile = custom_test_files[i];
    customTest(customTestFile);
  }
}
function customTest(customTestFile: string) {
  let lexer: MdLexer;
  let lines: string[];
  let customTestFileMdPath: string;
  console.log(customTestFile);
  customTestFileMdPath = [
    test_data_dir_path,
    'md',
    'custom',
    `${customTestFile}.md`,
  ].join(path.sep);
  lines = getFileLines(customTestFileMdPath);
  lexer = MdLexer.init();
  for(let i = 0; i < lines.length; i++) {
    let line = lines[i];
    lexer.parse(line);
  }
}

function getFileLines(filePath: string): string[] {
  let buf: Buffer;
  let data: string;
  let lines: string[];
  buf = fs.readFileSync(filePath);
  data = buf.toString();
  lines = data.split('\n');
  return lines;
}
