import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hideComponet: Array<boolean> = [true, true, true, true, true, true, true];
  constructor() {}
  ngOnInit() {
    
  }
}
