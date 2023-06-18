import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from 'src/app/models/location.model';
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
  id: number | null = null;
  location: Location | null = null;
  comments: Post[] = [];
  commentImage: string = '';
  commentText: string = '';
  commentTitle: string = '';


  constructor(
    private postsService: PostsService) {
  }

  ngOnInit(): void {
    const currentUserLocalStorage = localStorage.getItem('currentUser');
    if(currentUserLocalStorage) {
      this.currentUser = JSON.parse(currentUserLocalStorage)
    }

    const postsData = localStorage.getItem('posts');
    if (postsData) {
      const allPosts: Post[] = JSON.parse(postsData);
      this.comments = allPosts
        .filter((com: Post) => com.id_location === this.id)
        .sort((a: Post, b: Post) => {
          const dateA = new Date(a.creationdate).getTime();
          const dateB = new Date(b.creationdate).getTime();
          return dateB - dateA;
        });
    }
  }

  onAddComment() {

    console.log('user', this.currentUser.id_user)

    if (!this.currentUser) {
      alert('Vous devez être connecté pour poster un commentaire');
      return;
    }
 else {
  let postIdCounter = localStorage.getItem('postIdCounter');
  if (!postIdCounter) {
    postIdCounter = '1';
  } else {
    postIdCounter = (Number(postIdCounter) + 1).toString();
  }
  localStorage.setItem('postIdCounter', postIdCounter);
const user = localStorage.getItem('currentUser');
let userProfile = null;
if(user) {
  userProfile = JSON.parse(user);
}
console.log('user', userProfile)
  this.new_post = new Post(
    Number(postIdCounter),
    this.commentImage,
    this.commentText,
    this.commentTitle,
    new Date(),
    userProfile?.id_user ?? null,
    null,
    null
  );

  console.log('new psot', this.new_post)
  this.comments.unshift(this.new_post);
  this.postsService.add(this.new_post)

  this.commentTitle = '';
  this.commentText = '';
  this.commentImage = '';

}
 }
    
}
