import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  user: User = new User(0, '', '', '', '', '', '');
  postCounter: number = 0;

  constructor() {
    let postCounter = localStorage.getItem('postCounter');
    if (!postCounter) {
      postCounter = '0';
      localStorage.setItem('postCounter', postCounter);
    }
    this.postCounter = Number(postCounter);
  }

  getAll(): Post[] {
    const filteredPosts: Post[] = [];
    let posts = localStorage.getItem('posts') ?? '[]';
    if(posts) {
      const postList = JSON.parse(posts);
      postList.forEach((post: Post) =>  {
        if(!post.id_location) {
          filteredPosts.push(post);
        }
      })
    }

    return filteredPosts;
  }

  add(post: Post) {
    post.id_post = this.postCounter;
    post.id_user = post.id_user;
    post.creationdate = new Date();

    this.postCounter += 1;
    localStorage.setItem('postCounter', JSON.stringify(this.postCounter));

    let posts = this.getAll();
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }
}
