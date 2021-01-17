import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-input-number-reactive",
  templateUrl: "./input-number-reactive.component.html",
  styleUrls: ["./input-number-reactive.component.css"]
})
export class InputNumberReactiveComponent {
  heading = "angular Input Number only validation ";
  yearForm: FormGroup;

  myusername: string = "";
  numberRegEx = /\-?\d*\.?\d{1,2}/;

  constructor() {
    this.yearForm = new FormGroup({
      year: new FormControl("", {
        validators: [Validators.required, Validators.pattern(this.numberRegEx)],
        updateOn: "blur"
      })
    });
  }
  submit() {
    console.log(this.yearForm.value);
  }
}
