import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '../../../models/location.model';
import { Post } from '../../../models/post.model';
import { User } from '../../../models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-locations-detail',
  templateUrl: './locations-detail.component.html',
  styleUrls: ['./locations-detail.component.scss']
})
export class LocationsDetailComponent implements OnInit {
  id: number | null = null;
  location: Location | null = null;
  comments: Post[] = [];
  commentImage: string = '';
  commentText: string = '';
  commentTitle: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      const locationsData = localStorage.getItem('locations');
      if (locationsData) {
        const allLocations: Location[] = JSON.parse(locationsData);
        this.location = allLocations.find(loc => loc.id_location === this.id) || null;
      }
    } else {
      this.router.navigate(['/locations']);
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
    const currentUserData = localStorage.getItem('currentUser');
    if (!currentUserData) {
      alert('Vous devez être connecté pour poster un commentaire');
      return;
    }

    const currentUser: User = JSON.parse(currentUserData);

    let postIdCounter = localStorage.getItem('postIdCounter');
    if (!postIdCounter) {
      postIdCounter = '1';
    } else {
      postIdCounter = (Number(postIdCounter) + 1).toString();
    }
    localStorage.setItem('postIdCounter', postIdCounter);


    const newPost: Post = new Post(
      Number(postIdCounter),
      this.commentImage,
      this.commentText,
      this.commentTitle,
      new Date(),
      currentUser.id_user,
      this.location?.id_location || null,
      null
    );

    this.comments.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(this.comments));

    this.commentTitle = '';
    this.commentText = '';
    this.commentImage = '';

  }

  getUserNameById(id: number): string {
    return this.usersService.getById(id)?.username ?? "unknown";
  }

}
