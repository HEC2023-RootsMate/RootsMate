import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  new_post: Post = new Post(0, '', '', '', new Date(), 0, 0, 0);

  constructor(private postsService: PostsService) { }

  onSubmit() {
    this.postsService.add(this.new_post);
    this.new_post = new Post(0, '', '', '', new Date(), 0, 0, 0);
  }
}
