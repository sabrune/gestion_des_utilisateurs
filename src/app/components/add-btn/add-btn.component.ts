import {Component, Input, Output} from '@angular/core';
// @ts-ignore
import EventEmitter from "events";
import {NgStyle} from "@angular/common";
import {faAdd} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-add-btn',
  standalone: true,
  imports: [
    NgStyle,
    FaIconComponent
  ],
  templateUrl: './add-btn.component.html',
  styleUrl: './add-btn.component.css'
})
export class AddBtnComponent {
  // @ts-ignore
  @Input() text!: string;
  @Input() color!: string;
  faAdd = faAdd;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log("test")
  }


}
