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

}
