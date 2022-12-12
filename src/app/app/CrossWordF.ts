import { WordModelF } from './WordModelF';
import { WordList3 } from './WordLists/wordList3';
import { WordList4 } from './WordLists/wordList4';
import { WordList6 } from './WordLists/wordList6';
import { WordList5 } from './WordLists/wordList5';
import { WordList7 } from './WordLists/wordList7';
import { WordList8 } from './WordLists/wordList8';
import { WordList9 } from './WordLists/wordList9';
import { WordList10 } from './WordLists/wordList10';

export class CrossWordF {
  _answerS: string[][];
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
    this._answerS = [];
    for (var i: number = 0; i < 20; i++) {
      this._answerS[i] = [];
      for (var j: number = 0; j < 20; j++) {
        this._answerS[i][j] = '';
      }
    }
  }

  addWord(word: string) {
    for (const wordOfList of this._wordList) {
      if (wordOfList.word == word.trim().toUpperCase()) return;
    }
    this._wordList.push(new WordModelF(word.trim().toUpperCase(), -1, -1));
    this.findNewAnswer(); //pierwsza kzyzowka
    if (this._wordList.length == 1) this.addFirstWord();
    else this.addNextWord();
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
        break;
      case 4:
        this.findAnswerAlgo4(WordList4.L4);
        break;
      case 5:
        this.findAnswerAlgo5(WordList5.L5);
        break;
      case 6:
        this.findAnswerAlgo6(WordList6.L6);
        break;
      case 7:
        this.findAnswerAlgo7(WordList7.L7);
        break;
      case 8:
        this.findAnswerAlgo8(WordList8.L8);
        break;
      case 9:
        this.findAnswerAlgo9(WordList9.L9);
        break;
      case 10:
        this.findAnswerAlgo10(WordList10.L10);
        break;
    }
  }

  private findAnswerAlgo10(list: string[]) {
    for (const c1 of Array.from(new Set(this._wordList[0].word))) {
      for (const c2 of Array.from(new Set(this._wordList[1].word))) {
        for (const c3 of Array.from(new Set(this._wordList[2].word))) {
          for (const c4 of Array.from(new Set(this._wordList[3].word))) {
            for (const c5 of Array.from(new Set(this._wordList[4].word))) {
              for (const c6 of Array.from(new Set(this._wordList[5].word))) {
                for (const c7 of Array.from(new Set(this._wordList[6].word))) {
                  for (const c8 of Array.from(
                    new Set(this._wordList[7].word)
                  )) {
                    for (const c9 of Array.from(
                      new Set(this._wordList[8].word)
                    )) {
                      for (const c10 of Array.from(
                        new Set(this._wordList[9].word)
                      )) {
                        // console.log((c1 + c2 + c3).toLowerCase());
                        if (
                          this.find(
                            (
                              c1 +
                              c2 +
                              c3 +
                              c4 +
                              c5 +
                              c6 +
                              c7 +
                              c8 +
                              c9 +
                              c10
                            ).toLowerCase(),
                            list,
                            0,
                            list.length - 1
                          )
                        ) {
                          this.recalculateCrossword();
                          return;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  private findAnswerAlgo9(list: string[]) {
    for (const c1 of Array.from(new Set(this._wordList[0].word))) {
      for (const c2 of Array.from(new Set(this._wordList[1].word))) {
        for (const c3 of Array.from(new Set(this._wordList[2].word))) {
          for (const c4 of Array.from(new Set(this._wordList[3].word))) {
            for (const c5 of Array.from(new Set(this._wordList[4].word))) {
              for (const c6 of Array.from(new Set(this._wordList[5].word))) {
                for (const c7 of Array.from(new Set(this._wordList[6].word))) {
                  for (const c8 of Array.from(
                    new Set(this._wordList[7].word)
                  )) {
                    for (const c9 of Array.from(
                      new Set(this._wordList[8].word)
                    )) {
                      // console.log((c1 + c2 + c3).toLowerCase());
                      if (
                        this.find(
                          (
                            c1 +
                            c2 +
                            c3 +
                            c4 +
                            c5 +
                            c6 +
                            c7 +
                            c8 +
                            c9
                          ).toLowerCase(),
                          list,
                          0,
                          list.length - 1
                        )
                      ) {
                        this.recalculateCrossword();
                        return;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  private findAnswerAlgo8(list: string[]) {
    for (const c1 of Array.from(new Set(this._wordList[0].word))) {
      for (const c2 of Array.from(new Set(this._wordList[1].word))) {
        for (const c3 of Array.from(new Set(this._wordList[2].word))) {
          for (const c4 of Array.from(new Set(this._wordList[3].word))) {
            for (const c5 of Array.from(new Set(this._wordList[4].word))) {
              for (const c6 of Array.from(new Set(this._wordList[5].word))) {
                for (const c7 of Array.from(new Set(this._wordList[6].word))) {
                  for (const c8 of Array.from(
                    new Set(this._wordList[7].word)
                  )) {
                    // console.log((c1 + c2 + c3).toLowerCase());
                    if (
                      this.find(
                        (c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8).toLowerCase(),
                        list,
                        0,
                        list.length - 1
                      )
                    ) {
                      this.recalculateCrossword();
                      return;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  private findAnswerAlgo7(list: string[]) {
    for (const c1 of Array.from(new Set(this._wordList[0].word))) {
      for (const c2 of Array.from(new Set(this._wordList[1].word))) {
        for (const c3 of Array.from(new Set(this._wordList[2].word))) {
          for (const c4 of Array.from(new Set(this._wordList[3].word))) {
            for (const c5 of Array.from(new Set(this._wordList[4].word))) {
              for (const c6 of Array.from(new Set(this._wordList[5].word))) {
                for (const c7 of Array.from(new Set(this._wordList[6].word))) {
                  // console.log((c1 + c2 + c3).toLowerCase());
                  if (
                    this.find(
                      (c1 + c2 + c3 + c4 + c5 + c6 + c7).toLowerCase(),
                      list,
                      0,
                      list.length - 1
                    )
                  ) {
                    this.recalculateCrossword();
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  private findAnswerAlgo6(list: string[]) {
    for (const c1 of Array.from(new Set(this._wordList[0].word))) {
      for (const c2 of Array.from(new Set(this._wordList[1].word))) {
        for (const c3 of Array.from(new Set(this._wordList[2].word))) {
          for (const c4 of Array.from(new Set(this._wordList[3].word))) {
            for (const c5 of Array.from(new Set(this._wordList[4].word))) {
              for (const c6 of Array.from(new Set(this._wordList[5].word))) {
                // console.log((c1 + c2 + c3).toLowerCase());
                if (
                  this.find(
                    (c1 + c2 + c3 + c4 + c5 + c6).toLowerCase(),
                    list,
                    0,
                    list.length - 1
                  )
                ) {
                  this.recalculateCrossword();
                  return;
                }
              }
            }
          }
        }
      }
    }
  }

  private findAnswerAlgo5(list: string[]) {
    for (const c1 of Array.from(new Set(this._wordList[0].word))) {
      for (const c2 of Array.from(new Set(this._wordList[1].word))) {
        for (const c3 of Array.from(new Set(this._wordList[2].word))) {
          for (const c4 of Array.from(new Set(this._wordList[3].word))) {
            for (const c5 of Array.from(new Set(this._wordList[4].word))) {
              // console.log((c1 + c2 + c3).toLowerCase());
              if (
                this.find(
                  (c1 + c2 + c3 + c4 + c5).toLowerCase(),
                  list,
                  0,
                  list.length - 1
                )
              ) {
                this.recalculateCrossword();
                return;
              }
            }
          }
        }
      }
    }
  }

  private findAnswerAlgo4(list: string[]) {
    for (const c1 of Array.from(new Set(this._wordList[0].word))) {
      for (const c2 of Array.from(new Set(this._wordList[1].word))) {
        for (const c3 of Array.from(new Set(this._wordList[2].word))) {
          for (const c4 of Array.from(new Set(this._wordList[3].word))) {
            if (
              this.find(
                (c1 + c2 + c3 + c4).toLowerCase(),
                list,
                0,
                list.length - 1
              )
            ) {
              this.recalculateCrossword();
              return;
            }
          }
        }
      }
    }
  }

  private findAnswerAlgo3(list: string[]) {
    for (const c1 of Array.from(new Set(this._wordList[0].word))) {
      for (const c2 of Array.from(new Set(this._wordList[1].word))) {
        for (const c3 of Array.from(new Set(this._wordList[2].word))) {
          // console.log((c1 + c2 + c3).toLowerCase());
          if (
            this.find((c1 + c2 + c3).toLowerCase(), list, 0, list.length - 1)
          ) {
            this.recalculateCrossword();
            return;
          }
        }
      }
    }
  }

  find(word: string, list: string[], start: number, end: number): boolean {
    let mid: number = Math.floor((end + start) / 2);
    if (end - start <= 1) {
      this._answer = 'ANSWER_NOT_FOUND';
      return false;
    }

    let compare: number = word.localeCompare(list[mid]);
    if (compare == 0) {
      this._answer = list[mid].toUpperCase();
      return true;
    } else if (compare == -1) {
      return this.find(word, list, start, mid);
    }
    return this.find(word, list, mid, end);
  }

  private recalculateCrossword() {
    let num: number = 0;
    for (let i = 0; i < this._answer.length; i++) {
      this._wordList[i].indexOfLetter = this._wordList[i].word.indexOf(
        this._answer[i].toUpperCase()
      );
      if (num < this._wordList[i].indexOfLetter) {
        num = this._wordList[i].indexOfLetter;
      }
      console.log(this._answer[i]);
    }
    for (const wordO of this._wordList) {
      wordO.spaceNumber = 1 + num - wordO.indexOfLetter;
    }
  }

  private addFirstWord() {
    for (let i = 0; i < this._wordList[0].word.length; i++) {
      // @ts-ignore
      this._answerS[1][i + 1] = this._wordList[0].word.at(i);
    }
  }

  private addNextWord() {}
}
