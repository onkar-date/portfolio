import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreensRoutingModule } from './screens-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [HomeComponent, AboutMeComponent, MyProjectsComponent, SkillsComponent],
  imports: [
    CommonModule,
    ScreensRoutingModule
  ]
})
export class ScreensModule { }
