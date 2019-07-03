import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcePanelComponent } from './resource-panel/resource-panel.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { TeamMembersComponent } from './team-members/team-members.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcePanelComponent,
    HeaderComponent,
    InfoComponent,
    TeamMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
