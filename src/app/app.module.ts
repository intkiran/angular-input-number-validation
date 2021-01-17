import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { InputNumberReactiveComponent } from "./input-number-reactive/input-number-reactive.component";
import { InputNumberTemplateComponent } from './input-number-template/input-number-template.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, InputNumberReactiveComponent, InputNumberTemplateComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
