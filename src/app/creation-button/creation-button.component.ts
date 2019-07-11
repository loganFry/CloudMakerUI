import { Component, OnInit } from '@angular/core';
import {InstanceService} from '../instance.service';

@Component({
  selector: 'app-creation-button',
  templateUrl: './creation-button.component.html',
  styleUrls: ['./creation-button.component.scss']
})
export class CreationButtonComponent implements OnInit {

  constructor(private instanceService : InstanceService) { }

  ngOnInit() {
  }

  CreateInstance(){
    console.log('clicked');
    this.instanceService.createInstance('test@email.com', 'A12345', 'My test instance');
  }

}
