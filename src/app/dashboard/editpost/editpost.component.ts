import { Component, OnInit } from '@angular/core';
import Post   from 'src/app/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css'],
  providers: [PostService]
})
export class EditpostComponent implements OnInit {


  posts : any;

  selectedPost : Post;

  constructor(private _postService: PostService) {
    
   }

   



  ngOnInit() {
    this._postService.getPosts()
    .subscribe(resPostData => this.posts = resPostData);
  }
registerPost(){
  
}

  onSelectPost (post:any){
    this.selectedPost = post;
    console.log(this.selectedPost);
  }


}
