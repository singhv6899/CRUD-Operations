import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  constructor(private service:CRUDService){
  }

  ngOnInit(){
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement){
    let post: any = { title: input.value }
    input.value = '';
    this.service.createPosts(post)
    .subscribe(response => {
      let res: any = response;
      post['id'] = res.id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post: HTMLInputElement){
    this.service.update(post)
    .subscribe(response => {
      let res: any = response;
      console.log(res);
    });
  }

  deletePost(post: HTMLInputElement){
    this.service.delete(post.id)
    .subscribe(response=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    });
  }
}
