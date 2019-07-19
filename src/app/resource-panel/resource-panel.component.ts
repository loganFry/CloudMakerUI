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

  validationAnimationId: number;

  constructor() { }

  ngOnInit() {
  }

  showValidatingMessage()
  {
      document.getElementById("panel-message").style.display = "block";
      this.validationAnimationId = this.animateMessageInPanel("Validating your request");
  }

  showCreatingMessage() {
    clearInterval(this.validationAnimationId);
    (document.getElementById("instance-form") as any).reset();
    this.animateMessageInPanel("Creating your instance");
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
