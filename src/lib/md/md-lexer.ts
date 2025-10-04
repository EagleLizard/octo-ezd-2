
import { TK_STATE, tk_state_enum } from './md-state';
import { MdToken } from './md-token';
import { MdTokenizer } from './md-tokenizer';

/*
When we start to parse any line, we may or may not
  be in a block already.
  If in a block:
     should check if continuing the block is appropriate.
     If not, close the current block (& pop from stack)
  If NOT in a block:
    get the next token, if the token is not a block then default to a paragraph(?)
_*/

export class MdLexer {
  line: number;
  tokenizer: MdTokenizer;
  private constructor() {
    this.line = 0;
    this.tokenizer = MdTokenizer.init();
  }

  /*
  parse line-by-line for now.
    Probably better to accept input as a stream of chars, but newlines are
    good enough for now.
  _*/
  parse(line: string) {
    let pos: number;
    let tkState: TK_STATE;
    let tok: MdToken | undefined;
    let str: string;
    tkState = tk_state_enum.line_start;
    pos = 0;
    str = line;
    do {
      str = str.substring(pos);
      tok = this.tokenizer.next(str, tkState);
      if(tok !== undefined) {
        console.log(tok.type);
        pos += tok.str.length;
      }
    } while(tok !== undefined);
  }

  static init(): MdLexer {
    let mdLexer: MdLexer;
    mdLexer = new MdLexer();
    return mdLexer;
  }
}
