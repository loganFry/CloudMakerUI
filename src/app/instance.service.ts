import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GithubFile } from './models/GithubFile';
import { Instances, Instance } from './models/Instances';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InstanceService {

  private apiUrl : string = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  private createHeaders() : HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'token ' + environment.githubAccessToken
    });
  }

  createNewInstanceFile(instances: Instance[]) : Observable<Object> {
    // files are named based on when they are submitted
    var fileName : string = Date.now().toString() + '.json';

    // convert file to json string then encode in base64 to save to github
    var encodedFileContent = btoa(JSON.stringify(instances));
    var body = {
      "message": "Adding new instance from frontend",
      "committer": {
        "name": "Cloudmaker Frontend",
        "email": "cloudmakerService@gmail.com"
      },
      "content": encodedFileContent
    };
    var options = { headers: this.createHeaders()};

    return this.http.put(this.apiUrl + 'repos/' + environment.instanceRepo + '/contents/' + environment.instanceFolderName + '/' + fileName, 
      body, 
      options);
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
