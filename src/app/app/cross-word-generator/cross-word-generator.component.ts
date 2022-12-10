import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrossWordF } from '../CrossWordF';
import getDocumentElement from "@popperjs/core/lib/dom-utils/getDocumentElement";

@Component({
  selector: 'app-cross-word-generator',
  templateUrl: './cross-word-generator.component.html',
  styleUrls: ['./cross-word-generator.component.css'],
})
export class CrossWordGeneratorComponent {
  form = new FormGroup({
    word: new FormControl<string>('', Validators.required),
  });
  formS = new FormGroup({
    question: new FormControl<string>('', Validators.required),
  });

  _crossWordF: CrossWordF = new CrossWordF();

  ngOnInit(): void {
    this._crossWordF.addWord(' angular ');
    this._crossWordF.deleteWord('aNgular ');
    this._crossWordF.addWord(' JAva');
  }

  addWordToList() {
    if (this.form.controls.word.value)
      this._crossWordF.addWord(this.form.controls.word.value);
    this.form.controls.word.setValue('');
  }

  removeWordFromList(word: String) {
    // @ts-ignore
    this._crossWordF.deleteWord(word);
  }

  showQuestion(word: string) {
    for (const wordElement of this._crossWordF.wordList) {
      if (word==wordElement.word){
        console.log(word==wordElement.word)
        this.formS.controls.question.setValue(wordElement.question);
      }
    }
  }
}
