import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AbilityScoreComponent } from './ability-score/ability-score-component';
import { BonusPipePipe } from './bonus-pipe.pipe';
import { ScorePipePipe } from './score-pipe.pipe';
import { AboutComponent } from './about/about-component';
import { ArmorComponent } from './armor/armor.component';
import { WeaponComponent } from './weapon/weapon.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    AbilityScoreComponent,
    BonusPipePipe,
    ScorePipePipe,
    AboutComponent,
    ArmorComponent,
    WeaponComponent,
    EquipmentComponent,
    CharacterDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
