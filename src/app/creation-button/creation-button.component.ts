import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  // To notify resource panel component about current instance creation state
  @Output() formSubmitted = new EventEmitter();
  @Output() requestSuccessful = new EventEmitter();

  error: string;

  constructor(private instanceService : InstanceService) { }

  ngOnInit() {
  }

  public CreateInstance() {
    // Check validation of form before doing anything
    if(!this.enabled){
      this.error = "Must complete form before creating instance";
      console.log("Form invalid, not creating instance")
    }
    else {
      this.error = undefined;
      console.log("Form valid, trying to create instance")
      // Notify the resource panel that the form is being submitted
      this.formSubmitted.emit();

      var newInstance : Instance[] = [ new Instance(this.email, this.id, this.instanceName) ];

      // Try to create instance file on github
      this.instanceService.createNewInstanceFile(newInstance).subscribe(data => {
        // If we get into this handler, the instance was submitted to github successfully

        // Notify the resource panel that the form was successfully submitted
        this.requestSuccessful.emit();
        this.error = undefined;
        console.log('Created new instance file: ');
        console.log(data);
      }, (githubError) => {
        // If we get into this handler, there was an error pushing to github

        this.error = "There was an error creating the instance"
        console.error("Error creating instance: ")
        console.error(githubError);
      });
    }
  }

}
