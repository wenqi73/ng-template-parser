import { AST, ASTCompiler } from "./ast";

export class Parser {
  lexer;
  ast;
  astCompiler;

  constructor(lexer) {
    this.lexer = lexer;
    this.ast = new AST(this.lexer);
    this.astCompiler = new ASTCompiler(this.ast);
  }

  parse(text) {
    return this.astCompiler.compile(text);
  }
}