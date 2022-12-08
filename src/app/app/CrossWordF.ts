import { WordModelF } from './WordModelF';

export class CrossWordF {
  // private _answer: string;
  private _wordList: WordModelF[];

  get wordList(): WordModelF[] {
    return this._wordList;
  }

  constructor() {
    this._wordList = [];
  }

  addWord(word: string) {
    for (const wordOfList of this._wordList) {
      if (wordOfList.word == word.trim().toUpperCase()) return;
    }
    this._wordList.push(new WordModelF(word.trim().toUpperCase(), 0, 0));
    this.findNewAnswer();
  }

  deleteWord(word: string) {
    this._wordList.forEach((element, index) => {
      if (element.word == word.trim().toUpperCase())
        this._wordList.splice(index, 1);
    });
  }

  findNewAnswer() {
    //TODO
  }
}
