import { Component, OnInit, ViewChild } from '@angular/core';
import { CreationButtonComponent } from '../creation-button/creation-button.component';
import { Button } from 'protractor';

@Component({
  selector: 'app-resource-panel',
  templateUrl: './resource-panel.component.html',
  styleUrls: ['./resource-panel.component.scss']
})
export class ResourcePanelComponent implements OnInit {

  // Add a reference to the creation button so that we can call the
  // CreateInstance() function when the user presses Enter in the form
  @ViewChild(CreationButtonComponent, { static: false }) Button;

  aid : string;
  email: string;
  instanceName: string;

  timerId: number;
  creating: boolean;

  constructor() { }

  ngOnInit() {
  }

  showValidatingMessage()
  {
    if(this.timerId){
      clearInterval(this.timerId);
    }
    this.creating = false;
    document.getElementById("panel-creating").style.display = "block";
    this.timerId = this.animateMessageInPanel("Validating your request");
  }

  showCreatingMessage() {
    if(this.timerId){
      clearInterval(this.timerId);
    }
    this.creating = true;
    (document.getElementById("instance-form") as any).reset();
    this.timerId = this.animateMessageInPanel("Creating your instance");
  }

  returnToForm() {
    document.getElementById("resource-panel").style.display = "block";
    document.getElementById("panel-creating").style.display = "none";
    this.aid = '';
    this.email = '';
    this.instanceName = '';

  }
  animateMessageInPanel(message: string) {
      let messageElement = document.getElementById("panel-message");
      messageElement.innerText = message;

      let i = 0;
      return setInterval(function() {
          i = ++i % 4;
          messageElement.innerText = message + Array(i+1).join(".");
      }, 800);
  }
}
