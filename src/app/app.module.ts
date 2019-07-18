import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcePanelComponent } from './resource-panel/resource-panel.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { CreationButtonComponent } from './creation-button/creation-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ResourcePanelComponent,
    HeaderComponent,
    InfoComponent,
    TeamMembersComponent,
    CreationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
