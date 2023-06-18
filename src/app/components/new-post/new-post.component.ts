import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  new_post: Post = new Post(0, '', '', '', new Date(), 0, 0, 0);
  currentUser!: User;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    const currentUserLocalStorage = localStorage.getItem('currentUser');
    if(currentUserLocalStorage) {
      this.currentUser = JSON.parse(currentUserLocalStorage)
    }
  }

  onSubmit() {
    this.postsService.add(this.new_post);
    this.new_post = new Post(0, '', '', '', new Date(), 0, 0, 0);
  }
}
