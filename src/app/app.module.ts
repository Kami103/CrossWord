import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrossWordFirstTypeComponent } from './app/cross-word-first-type/cross-word-first-type.component';
import { CrossWordSecoundTypeComponent } from './app/cross-word-secound-type/cross-word-secound-type.component';
import { WordListEditorComponent } from './app/word-list-editor/word-list-editor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CrossWordFirstTypeComponent,
    CrossWordSecoundTypeComponent,
    WordListEditorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
