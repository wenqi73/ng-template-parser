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
  constructor(lexer) {
    this.lexer = lexer
  }

  ast(text) {
    this.tokens = this.lexer.lex(text);
    // return this.program();
  }

  program() {
    const body = [];
    while (true) {
      if (this.tokens.length) {
        // body.push(this.filter());
      }
      if (1 === 1) {
        return { type: AST.Program, body: body };
      }
    }
  }
}

export class ASTCompiler {
  astBuilder;
  constructor(astBuilder) {
    this.astBuilder = astBuilder;
    console.log(this.astBuilder);
  }
}