import { Lexer } from "./expression_parser/lexer";
import { Parser } from "./expression_parser/parser";

function parse(expr) {
  switch (typeof expr) {
    case 'string':
      const lexer = new Lexer();
      const parser = new Parser(lexer);
      return parser.parse(expr);
      break;
  
    default:
      break;
  }
}

parse(233);