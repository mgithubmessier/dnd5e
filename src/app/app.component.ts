import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hideComponet: Array<boolean> = [true, true, true, true, true, true, true];
  @ViewChild('wholeForm') wholeForm: NgForm;
  constructor() {}
  ngOnInit() {}
}
