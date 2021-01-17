import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-number-template",
  templateUrl: "./input-number-template.component.html",
  styleUrls: ["./input-number-template.component.css"]
})
export class InputNumberTemplateComponent implements OnInit {
  constructor() {}
  year: number;

  ngOnInit() {}
  onKeyPress(event: any) {
    const regexpNumber = /[0-9\+\-\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }
}
