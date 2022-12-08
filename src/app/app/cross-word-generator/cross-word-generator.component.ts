import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cross-word-generator',
  templateUrl: './cross-word-generator.component.html',
  styleUrls: ['./cross-word-generator.component.css'],
})
export class CrossWordGeneratorComponent {
  form = new FormGroup({
    word: new FormControl<string>('', Validators.required),
  });

  wordList = new Set<string>();

  ngOnInit(): void {}

  addWordToList() {
    if (this.form.controls.word.value)
      this.wordList.add(this.form.controls.word.value?.trim());
    this.form.controls.word.setValue('');
  }

  removeWordFromList(word: string) {
    this.wordList.delete(word);
  }
}
