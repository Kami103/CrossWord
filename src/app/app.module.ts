import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CrossWordGeneratorComponent } from './app/cross-word-generator/cross-word-generator.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, CrossWordGeneratorComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
