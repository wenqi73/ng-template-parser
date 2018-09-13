export class Lexer {
  text;
  index;
  ch;
  tokens;

  constructor() {}

  lex(text: any) {
    // Tokenization will be done here
    this.text = text;
    this.index = 0;
    this.ch = undefined;
    this.tokens = [];

    while (this.index < this.text.length) {
      this.ch = this.text.charAt(this.index);
      if (this.isNumber(this.ch)) {
        this.readNumber();
      }
    }

    return this.tokens;
  }

  isNumber(ch: string) {
    return ch >= '0' && ch <= '9';
  }

  readNumber() {
    let number = '';
    while (this.index < this.text.length) {
      const ch = this.text.charAt(this.index).toLowerCase();
      if (this.isNumber(ch)) {
        number += ch;
      }
      this.index++;
    }
    this.tokens.push({
      text: number,
      value: Number(number)
    });
  }
}
