import { WordModelF } from './WordModelF';
import { WordList2 } from './WordLists/wordList2';
import { WordList3 } from './WordLists/wordList3';

export class CrossWordF {
  private _answer: string;
  get answer(): string {
    return this._answer;
  }

  private _wordList: WordModelF[];

  get wordList(): WordModelF[] {
    return this._wordList;
  }

  constructor() {
    this._wordList = [];
    this._answer = '';
  }

  addWord(word: string) {
    for (const wordOfList of this._wordList) {
      if (wordOfList.word == word.trim().toUpperCase()) return;
    }
    this._wordList.push(new WordModelF(word.trim().toUpperCase(), -1, -1));
    this.findNewAnswer();
  }

  deleteWord(word: string) {
    this._wordList.forEach((element, index) => {
      if (element.word == word.trim().toUpperCase())
        this._wordList.splice(index, 1);
    });
    this.findNewAnswer();
  }

  findNewAnswer() {
    switch (this._wordList.length) {
      case 0:
        this._answer = '';
        break;
      case 1:
        this._answer = '';
        this._wordList.forEach((element) => {
          element.indexOfLetter = -1;
          element.spaceNumber - 1;
        });
        break;
      case 2:
        this._answer = '';
        this._wordList.forEach((element) => {
          element.indexOfLetter = -1;
          element.spaceNumber - 1;
        });
        break;
      case 3:
        this.findAnswerAlgo3(WordList3.L3);
    }
  }

  private findAnswerAlgo3(list: string[]) {
    for (const c1 of this._wordList[0].word) {
      for (const c2 of this._wordList[1].word) {
        for (const c3 of this._wordList[2].word) {
          // console.log((c1 + c2 + c3).toLowerCase());
          if (
            this.find(
              (c1 + c2 + c3).toLowerCase(),
              list,
              0,
              WordList2.L2.length - 1
            )
          ) {
            this.recalculateCrossword();
            break;
          }
        }
      }
    }
  }

  find(word: string, list: string[], start: number, end: number): boolean {
    let mid: number = Math.floor((end + start) / 2);
    if (end - start < 1) {
      this._answer = 'ANSWER_NOT_FOUND';
      return false;
    }

    let compare: number = word.localeCompare(list[mid]);
    if (compare == 0) {
      this._answer = list[mid];
      return true;
    } else if (compare == -1) {
      return this.find(word, list, start, mid);
    }
    return this.find(word, list, mid + 1, end);
  }

  private recalculateCrossword() {}
}
