import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../models/interface/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getAllPosts():Observable<PostResponse> {
    return this.http.get<PostResponse>(`${environment.apiBaseUrl}/post/public`)
  }
}
