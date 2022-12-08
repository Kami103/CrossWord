export class WordModelF {
  private _word: string;
  private _spacesNumber: number;
  private _indexOfLetter: number;

  constructor(word: string, spaceNumber: number, indexOfLetter: number) {
    this._word = word;
    this._spacesNumber = spaceNumber;
    this._indexOfLetter = indexOfLetter;
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
}
