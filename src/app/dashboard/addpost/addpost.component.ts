import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import Post from 'src/app/models/post';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  editorForm: FormGroup;
  editorContent: string;
  post_title: string;


  constructor(
    private flashMessage: FlashMessagesService,
    private _postService: PostService,
    private router: Router
  ) { }



  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }



  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;
    const post = {
      title: this.post_title,
      body: this.editorContent
    }

    this._postService.addPost(post).subscribe((data: any) => {
        this.flashMessage.show("Post Added Successfully !", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
      
    });
    console.log(post);


  }

}
