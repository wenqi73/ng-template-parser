import { AST, ASTCompiler } from './ast';
import { Lexer } from './lexer';

export class Parser {
  lexer;
  ast;
  astCompiler;

  constructor(lexer: Lexer) {
    this.lexer = lexer;
    this.ast = new AST(this.lexer);
    this.astCompiler = new ASTCompiler(this.ast);
  }

  parse(text: any) {
    return this.astCompiler.compile(text);
  }
}
