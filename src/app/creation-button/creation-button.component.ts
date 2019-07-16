import { Component, OnInit } from '@angular/core';
import {InstanceService} from '../instance.service';
import { GithubFile } from '../models/GithubFile';
import { Instances, Instance } from '../models/Instances';

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
    this.instanceService.getInstanceFile().subscribe((data : GithubFile) => {
      console.log(data);
      var decodedContent = atob(data.content);
      console.log(decodedContent);
      let contentObj : Instances = JSON.parse(decodedContent);
      console.log(contentObj);
      contentObj.Instances.push(new Instance('test@email.com', 'A12345', 'made from frontend'));
      this.instanceService.updateInstanceFile(contentObj, data.sha).subscribe((updateData) => {
        console.log(updateData);
      })
    });

    this.instanceService.createInstance('test@email.com', 'A12345', 'My test instance')
    .subscribe(obj => console.log('Post returned:' + obj.toString()));
  }

}
