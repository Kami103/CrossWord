import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrossWordF } from '../CrossWordF';

@Component({
  selector: 'app-cross-word-generator',
  templateUrl: './cross-word-generator.component.html',
  styleUrls: ['./cross-word-generator.component.css'],
})
export class CrossWordGeneratorComponent {
  displayedQuestion: number = -1;
  form = new FormGroup({
    word: new FormControl<string>('', Validators.required),
  });
  formS = new FormGroup({
    question: new FormControl<string>('', Validators.required),
  });
  formT = new FormGroup({
    type: new FormControl<string>('', Validators.required),
  });

  _crossWordF: CrossWordF = new CrossWordF();

  ngOnInit(): void {
    this._crossWordF.addWord(' angular ');
    this._crossWordF.deleteWord('aNgular ');
    this._crossWordF.addWord(' JAva');
    this._crossWordF.wordList[0].questionState = 'NotFound';
    this.formT.controls.type.setValue('CrossWordF');
  }

  addWordToList() {
    if (this.form.controls.word.value)
      this._crossWordF.addWord(this.form.controls.word.value);
    this.form.controls.word.setValue('');
  }

  removeWordFromList(word: string) {
    for (let i = 0; i < this._crossWordF.wordList.length; i++) {
      if (
        this._crossWordF.wordList[i].word == word &&
        i == this.displayedQuestion
      ) {
        this.displayedQuestion = -1;
      }
    }
    this._crossWordF.deleteWord(word);
  }

  showQuestion(word: string) {
    for (let i = 0; i < this._crossWordF.wordList.length; i++) {
      if (word == this._crossWordF.wordList[i].word) {
        this.formS.controls.question.setValue(
          this._crossWordF.wordList[i].question
        );
        this.displayedQuestion = i;
        this._crossWordF.wordList[this.displayedQuestion].questionState =
          'Revieved';
      }
    }
  }

  updateQuestion() {
    if (this.formS.controls.question.value != null) {
      this._crossWordF.wordList[this.displayedQuestion].question =
        this.formS.controls.question.value;
    }
  }
}
