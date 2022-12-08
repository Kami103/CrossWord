import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrossWordF } from '../CrossWordF';

@Component({
  selector: 'app-cross-word-generator',
  templateUrl: './cross-word-generator.component.html',
  styleUrls: ['./cross-word-generator.component.css'],
})
export class CrossWordGeneratorComponent {
  form = new FormGroup({
    word: new FormControl<string>('', Validators.required),
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
}
