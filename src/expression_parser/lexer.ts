export class Lexer {
  text;
  index;
  ch;
  tokens;

  lex(text) {
    // Tokenization will be done here
    this.text = text;
    this.index = 0;
    this.ch = undefined;
    this.tokens = [];

    while (this.index < this.text.length) {
      this.ch = this.text.charAt(this.index);
      if (this.isNumber(this.ch)) {
        this.tokens.push({
          text: this.ch,
          value: Number(this.ch)
        })
      }
    }
  }

  isNumber(ch) {
    return '0' <= ch && ch <= '9';
  };
}