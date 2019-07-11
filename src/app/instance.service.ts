import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  constructor(private http: HttpClient) { }

  createInstance(email : string, aid: string, instanceName: string) {
    // Form variables into JSON object
    var data = {
      Email: email,
      EmployeeID: aid,
      InstanceName: instanceName
    }

    // Send data in a post request to cloud backend
    this.http.post('http://the_cloud_url', data);
  }
}
