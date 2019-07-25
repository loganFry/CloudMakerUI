import { Component, OnInit } from '@angular/core';
import {InstanceService} from '../instance.service';
import { Destroy } from "../models/Destroy";

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.scss']
})
export class DestroyComponent implements OnInit {

    instanceId: string;

  constructor(private instanceService: InstanceService) { }

  ngOnInit() {
  }

  destroyInstance() {
      var destroy : Destroy[] = [ new Destroy(this.instanceId) ];

      this.instanceService.destroyInstance(destroy).subscribe(data => {
          // If we get into this handler, the instance was submitted to github successfully

          // Notify the resource panel that the form was successfully submitted
          //this.requestSuccessful.emit();
          //this.error = undefined;
          console.log('Destroyed instance file: ');
          console.log(data);
      }, (githubError) => {
          // If we get into this handler, there was an error pushing to github
          //this.requestFailed.emit();
          //this.error = "There was an error destroying the instance"
          console.error("Error creating instance: ")
          console.error(githubError);
      });
  }

}
