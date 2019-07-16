import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GithubFile } from './models/GithubFile';
import { Instances } from './models/Instances';


@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  private apiUrl : string = 'https://api.github.com/';
  private accessToken : string = 'a3d61d20e9dcba66afc844f95c70fb374cb82a9a';
  private repoName : string = 'loganFry/CloudMakerUI';
  private instanceFileName : string = 'instances.json';

  constructor(private http: HttpClient) { }

  private createHeaders() : HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'token ' + this.accessToken
    });
  }

  getInstanceFile() : Observable<GithubFile> {
    var customHeaders = this.createHeaders();
    var options = { headers : customHeaders };
    return this.http.get<GithubFile>(this.apiUrl + 'repos/' + this.repoName + '/contents/' + this.instanceFileName, options);
  }

  updateInstanceFile(instances: Instances, sha: string) : Observable<Object> {
    var customHeaders = this.createHeaders();
    var options = { headers : customHeaders };
    var body = {
      "message": "Adding new instance from frontend",
      "committer": {
        "name": "Cloudmaker Frontend",
        "email": "cloudmakerService@gmail.com"
      },
      "content": btoa(JSON.stringify(instances)),
      "sha": sha
    };
    return this.http.put(this.apiUrl + 'repos/' + this.repoName + '/contents/' + this.instanceFileName, body, options);
  }

  createInstance(email : string, aid: string, instanceName: string) : Observable<Object> {
    // Form variables into JSON object
    var data = {
      Email: email,
      EmployeeID: aid,
      InstanceName: instanceName
    }

    // Send data in a post request to cloud backend
    return this.http.post('http://the_cloud_url', data)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Client side error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
