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
    console.log('Creating new instance...');
    // Get the json instances file from github to update
    this.instanceService.getInstanceFile().subscribe((data : GithubFile) => {
      console.log('Got instance file data from github')
      console.log(data);
      // File contents are encoded with Base64, decode into raw string with atob()
      var decodedContent = atob(data.content);
      // Parse raw json string into an object
      let contentObj : Instances = JSON.parse(decodedContent);
      console.log('Current instance file contents: ')
      console.log(contentObj);
      // Add the new instance to the array in the json object
      contentObj.Instances.push(new Instance('test@email.com', 'A12345', 'made from frontend'));
      // Finally, commit the updated file contents to github
      this.instanceService.updateInstanceFile(contentObj, data.sha).subscribe((updateData) => {
        console.log('Updated instances file on github with new instance')
        console.log(updateData);
      })
    });
  }

}
