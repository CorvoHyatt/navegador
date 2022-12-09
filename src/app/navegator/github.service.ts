import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class GitHubService {
 

 
  constructor(private http: HttpClient) {
  }
 
  getRepos(url: string): Observable<any> {
    return this.http.get(url)
  }
 
}