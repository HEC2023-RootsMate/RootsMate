import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  user: User = new User(0, '', '', '', '', '', '');
  postCounter: number = 0;
  new_post: Post = new Post(0, '', '', '', new Date(), 0, 0, 0);
  all_posts: Post[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.router.navigate(['/signin']);
    }

    let postCounter = localStorage.getItem('postCounter');
    if (!postCounter) {
      postCounter = '0';
      localStorage.setItem('postCounter', postCounter);
    }
    this.postCounter = Number(postCounter);

    let posts_str: string | null = localStorage.getItem('posts');
    if(!posts_str) {
      posts_str = '[]';
      localStorage.setItem('posts', posts_str);
    }
    this.all_posts = JSON.parse(posts_str);
  }

  onSubmit() {
    this.new_post.id_post = this.postCounter;
    this.new_post.id_user = this.user.id_user;
    this.new_post.creationdate = new Date();

    this.all_posts.push(this.new_post);
    this.postCounter += 1;
    localStorage.setItem('posts', JSON.stringify(this.all_posts));
    localStorage.setItem('postCounter', JSON.stringify(this.postCounter));
    this.new_post = new Post(0, '', '', '', new Date(), 0, 0, 0);
  }
}
