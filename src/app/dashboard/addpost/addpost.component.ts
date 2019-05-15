import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { from } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
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
    private addPost: PostService,
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
console.log(post);
    this.addPost.registerPost(post).subscribe((data: any) => {
      if(data.success){
        console.log("post added successfully ");
        this.router.navigate(['/dashboard']);
      }else {
        console.log("post failed ");
        this.router.navigate(['/dashboard']);
      }

    });

  }

}
