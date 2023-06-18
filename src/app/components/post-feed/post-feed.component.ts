import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

// TODO: figure out a way to automatically update the page contents when a post is submitted

@Component({
  selector: 'post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.scss']
})
export class PostFeedComponent implements OnInit {
  all_posts: Post[] = [];

  constructor(private postsService: PostsService, private usersService: UsersService) { }

  ngOnInit() {
    this.all_posts = this.postsService.getAll();
  }

  getUsernameById(id: Number): string {
    return this.usersService.getById(id)?.username ?? "unknown";
  }

  getAvatarUrlById(id: Number): string {
    return this.usersService.getById(id)?.picture ?? "unknown";
  }
}
