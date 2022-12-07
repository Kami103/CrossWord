import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-word-list-editor',
  templateUrl: './word-list-editor.component.html',
  styleUrls: ['./word-list-editor.component.css'],
})
export class WordListEditorComponent implements OnInit {
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
