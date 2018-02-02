import { Component, Input } from '@angular/core';

export enum AboutDetail {
  Name, Class, Race, Alignment, Level
}
export class AboutField {
  aboutDetail: AboutDetail;
  aboutEntry: string;
  constructor(aboutDetail: AboutDetail) {
    this.aboutDetail = aboutDetail;
  }
  getAboutDetail(): string {
    return AboutDetail[this.aboutDetail];
  }
}

@Component({
  selector: 'about-component',
  templateUrl: './about-component.html',
  styleUrls: ['./about-component.scss']
})
export class AboutComponent {
  aboutFields: Array<AboutField> = [
    new AboutField(AboutDetail.Name),
    new AboutField(AboutDetail.Class),
    new AboutField(AboutDetail.Race),
    new AboutField(AboutDetail.Alignment),
    new AboutField(AboutDetail.Level)
  ];
  constructor() { }
}
