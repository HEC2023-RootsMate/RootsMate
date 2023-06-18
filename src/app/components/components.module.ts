import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewPostComponent } from './new-post/new-post.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from '../logout/logout.component';



@NgModule({
  declarations: [
    NewPostComponent,
    PostFeedComponent,
    LogoutComponent
  ],
  exports: [
    NewPostComponent,
    PostFeedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ComponentsModule { }
