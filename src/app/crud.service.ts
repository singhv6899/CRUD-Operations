import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  private url= 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPosts(post:any){
    return this.http.post(this.url, JSON.stringify(post));
  }

  update(post:any){
    return this.http.put(this.url +'/' + post.id, JSON.stringify(post));
  }

  delete(id: any){
    return this.http.delete(this.url+'/'+id);
  }
}
