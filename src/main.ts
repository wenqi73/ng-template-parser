import { Lexer } from './expression_parser/lexer';
import { Parser } from './expression_parser/parser';

export function parse(expr: any) {
  switch (typeof expr) {
    case 'string':
      const lexer = new Lexer();
      const parser = new Parser(lexer);
      return parser.parse(expr);
    default:
      console.log('cannot parse');
      break;
  }
}

const foo = parse('12345.222');
console.log(foo());
