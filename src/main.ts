
import 'source-map-support/register';

const cmd_map = {
  markdown: 'md',
  etc: 'etc',
} as const;
type OctoCommand = keyof typeof cmd_map;
type OctoArgs = {
  cmd: OctoCommand;
  restArgs: string[];
} & {};

(async () => {
  try {
    await main();
  } catch(e) {
    console.error(e);
    throw e;
  }
})();

async function main() {
  let oArgs: OctoArgs | undefined;
  setProcName();
  oArgs = parseArgs();
  switch(oArgs?.cmd) {
    case 'markdown':
      await (await import('./cmd/md/md-main')).mdMain();
      break;
    default:
      printCmds();
  }
}

function printCmds() {
  let outLines: string[];
  let cmdKeys: OctoCommand[];
  outLines = [];
  outLines.push('commands:');
  cmdKeys = [ ...Object.keys(cmd_map) as OctoCommand[] ];
  for(let i = 0; i < cmdKeys.length; i++) {
    let cmdKey = cmdKeys[i];
    outLines.push(`  ${cmd_map[cmdKey]} - ${cmdKey}`);
  }
  for(let i = 0; i < outLines.length; ++i) {
    process.stdout.write(`${outLines[i]}\n`);
  }
}

/*
  keep it simple for now, parse the command str.
_*/
function parseArgs(): OctoArgs | undefined {
  let args: string[];
  let firstArg: string;
  let cmdKey: OctoCommand | undefined;
  let oArgs: OctoArgs;
  args = process.argv.slice(2);
  if(args.length < 1) {
    return;
  }
  firstArg = args[0];
  cmdKey = getCmdKey(firstArg);
  if(cmdKey === undefined) {
    return undefined;
  }
  oArgs = {
    cmd: cmdKey,
    restArgs: args.slice(1),
  };
  return oArgs;
}

function getCmdKey(cmdStr: string): OctoCommand | undefined {
  let cmdKeys = [ ...Object.keys(cmd_map) as OctoCommand[] ];
  for(let i = 0; i < cmdKeys.length; i++) {
    let cmdKey = cmdKeys[i];
    if(cmd_map[cmdKey] === cmdStr) {
      return cmdKey;
    }
  }
  return undefined;
}

function setProcName() {
  process.title = 'octo-ezd-2';
}
