export class WordModelF {

  private _questionState: string = 'NotFound';
  private _word: string;

  private _spacesNumber: number;

  private _indexOfLetter: number;

  private _question: string;

  get questionState(): string {
    return this._questionState;
  }

  set questionState(value: string) {
    this._questionState = value;
  }

  constructor(word: string, spaceNumber: number, indexOfLetter: number) {
    this._word = word;
    this._spacesNumber = spaceNumber;
    this._indexOfLetter = indexOfLetter;
    this._question = this.findQuestion();
  }

  private findQuestion() {
    //TODO
    this._questionState = 'Found';
    return '[' + this.word + ']' + ' question';
  }

  get word(): string {
    return this._word;
  }

  set word(value: string) {
    this._word = value;
  }

  get spaceNumber(): number {
    return this._spacesNumber;
  }

  set spaceNumber(value: number) {
    this._spacesNumber = value;
  }

  get indexOfLetter(): number {
    return this._indexOfLetter;
  }

  set indexOfLetter(value: number) {
    this._indexOfLetter = value;
  }

  get question(): string {
    return this._question;
  }

  set question(value: string) {
    this._question = value;
  }
}
