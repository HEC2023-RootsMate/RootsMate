import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { PostFeedComponent } from './post-feed/post-feed.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewPostComponent,
    PostFeedComponent
  ],
  exports: [
    NewPostComponent,
    PostFeedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
