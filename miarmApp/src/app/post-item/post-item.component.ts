import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/interface/post.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() postInput!: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  getPostImage(post: Post){
    let imageUrl = post.contenidoMultimedia.replace("10.0.2.2","localhost")
    return imageUrl; 
  }
  getAvatarImage(post:Post) {
    let avatar = post.avatarUser.replace("10.0.2.2","localhost")
    return avatar;
  }
  delete(id:Number){
    this.postService.deletePost(id).subscribe(() => {
      location.reload();
    });
  }

}
