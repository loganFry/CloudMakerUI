import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-panel',
  templateUrl: './resource-panel.component.html',
  styleUrls: ['./resource-panel.component.scss']
})
export class ResourcePanelComponent implements OnInit {

  aid : string;
  email: string;
  instanceName: string;

  constructor() { }

  ngOnInit() {
  }

  transitionPanel() {
    console.log("button clicked baby");
    document.getElementById("resource-panel").style.display = "none";
    document.getElementById("panel-creating").style.display = "block";
  }

  returnToForm() {
    document.getElementById("resource-panel").style.display = "block";
    document.getElementById("panel-creating").style.display = "none";
    this.aid = '';
    this.email = '';
    this.instanceName = '';
  }
}
