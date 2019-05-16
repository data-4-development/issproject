import { Component, OnInit } from '@angular/core';
import { PostService } from '../dashboard/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  inputs : ['posts']
})
export class PostPageComponent implements OnInit {
  posts: any;


  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts()
    .subscribe(resPostData => this.posts = resPostData);
    console.log(Date());
  }

}
