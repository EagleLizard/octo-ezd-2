
import { TK_STATE, tk_state_enum } from './md-state';
import { MD_TOKEN_TYPE, md_token_types, MdToken } from './md-token';

type TokenRx = {
  rx: RegExp;
  type: MD_TOKEN_TYPE;
} & {};

const lineStartRxs: TokenRx[] = [
  {
    rx: /^ {0,3}#{1,7}(?: |$)/,
    type: md_token_types.atx_heading,
  },
  {
    rx: /^ {0,3}(?:-|=){3,} *$/,
    type: md_token_types.setext_heading,
  },
];
const lineRxs: TokenRx[] = [
  {
    rx: /^\*/,
    type: md_token_types.emphasis_1,
  },
  {
    rx: /^_/,
    type: md_token_types.emphasis_2,
  },
  {
    /*
      Any ASCII punctuation can be escaped.
      see: https://spec.commonmark.org/0.31.2/#backslash-escapes
      !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
    _*/
    rx: /^\\[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/,
    type: md_token_types.escape,
  }
];

export class MdTokenizer {
  private constructor() {}

  next(str: string, tkState: TK_STATE): MdToken | undefined {
    let tok: MdToken;
    let tkRxs: TokenRx[];
    tkRxs = [];
    if(tkState === tk_state_enum.line_start) {
      tkRxs = tkRxs.concat(lineStartRxs);
    }
    tkRxs = tkRxs.concat(lineRxs);
    for(let i = 0; i < tkRxs.length; i++) {
      let execRes: RegExpExecArray | null;
      let tkRx = tkRxs[i];
      execRes = tkRx.rx.exec(str);
      if(execRes !== null) {
        tok = {
          str: execRes[0],
          type: tkRx.type,
        };
        return tok;
      }
    }
    return;
  }

  static init(): MdTokenizer {
    let mdTokenizer: MdTokenizer;
    mdTokenizer = new MdTokenizer();
    return mdTokenizer;
  }
}
