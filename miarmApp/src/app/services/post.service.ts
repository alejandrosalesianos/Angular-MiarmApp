import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../models/interface/post.interface';

let token = localStorage.getItem('token');

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}` 
  })
};
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getAllPosts():Observable<PostResponse> {
    return this.http.get<PostResponse>(`${environment.apiBaseUrl}/post/public`)
  }
  deletePost(id:Number) {
    console.log(token)
    return this.http.delete(`${environment.apiBaseUrl}/post/${id}`,DEFAULT_HEADERS)
  }
}
