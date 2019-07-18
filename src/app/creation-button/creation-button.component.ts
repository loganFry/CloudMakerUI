import { Component, OnInit, Input, Output } from '@angular/core';
import {InstanceService} from '../instance.service';
import { GithubFile } from '../models/GithubFile';
import { Instances, Instance } from '../models/Instances';

@Component({
  selector: 'app-creation-button',
  templateUrl: './creation-button.component.html',
  styleUrls: ['./creation-button.component.scss']
})
export class CreationButtonComponent implements OnInit {

  // inputs from parent component used to create instance
  @Input() email : string;
  @Input() id : string;
  @Input() instanceName : string;
  @Input() enabled : boolean;

  constructor(private instanceService : InstanceService) { }

  ngOnInit() {
  }

  CreateInstance(){
    console.log('Creating new instance...');
    
    // Create new instance using user inputs
    var newInstance : Instance[] = [ new Instance(this.email, this.id, this.instanceName) ];

    // Save to github
    this.instanceService.createNewInstanceFile(newInstance).subscribe(data => {
      console.log('Tried creating new instance file: ');
      console.log(data);
    });
  }

}
