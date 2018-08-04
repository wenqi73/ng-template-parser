import { Lexer } from "./lexer";

interface AstProgram {
  type: string;
  value: any;
}

export class AST {
  static Program = 'Program';
  static Literal = 'Literal';
  static ArrayExpression = 'ArrayExpression';
  static ObjectExpression = 'ObjectExpression';
  static Property = 'Property';
  static Identifier = 'Identifier';
  static ThisExpression = 'ThisExpression';
  static LocalsExpression = 'LocalsExpression';
  static MemberExpression = 'MemberExpression';
  static CallExpression = 'CallExpression';
  static AssignmentExpression = 'AssignmentExpression';
  static UnaryExpression = 'UnaryExpression';
  static BinaryExpression = 'BinaryExpression';
  static LogicalExpression = 'LogicalExpression';
  static ConditionalExpression = 'ConditionalExpression';

  lexer;
  tokens;
  constructor(lexer: Lexer) {
    this.lexer = lexer;
  }

  ast(text: any) {
    this.tokens = this.lexer.lex(text);
    return this.program();
  }

  constant() {
    return { type: AST.Literal, value: this.tokens[0].value };
  }

  program() {
    return { type: AST.Program, body: this.constant() };
  }
}

export class ASTCompiler {
  astBuilder;
  state;
  constructor(astBuilder: AST) {
    this.astBuilder = astBuilder;
  }

  compile(text: any) {
    const ast = this.astBuilder.ast(text);
    this.state = { body: [] };
    console.log(ast);
    this.recurse(ast);
    return new Function(this.state.body.join(''));
  }

  recurse(ast: any) {
    switch (ast.type) {
      case AST.Program:
        this.state.body.push('return ', this.recurse(ast.body), ';');
        break;
      case AST.Literal:
        return ast.value;
      default:
        break;
    }
  }
}
