import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Tag } from '../tag';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService {


  url = 'https://bamapi.azurewebsites.net/BAMAPI/Tags';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) //send the object as JSON
  };

  constructor(private http: HttpClient) { }

  //get all tags
  getTags(): Promise<Tag[]>{
    return this.http.get<Tag[]>(this.url).toPromise();
  }

  //get a specific tag
  getTagById(tagId:number): Promise<Tag>{
    return this.http.get<Tag>(`${this.url}/${tagId}`).toPromise();
  }


  //create a tag
  postTag(tag:Tag): Promise<Tag>{
    return this.http.post<Tag>(this.url, tag, this.httpOptions).toPromise();
  }


   
}
