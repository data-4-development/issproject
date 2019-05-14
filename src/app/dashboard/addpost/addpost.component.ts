import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {PostService}from '../post.service';
  import { from } from 'rxjs';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  editorForm: FormGroup;
  editorContent: string;
  post_title: string;
  

  constructor() {


  }



  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

addp(){
  


}
  onSubmit() {
    this.editorContent = this.editorForm.get('editor').value;

    const post = {

title : this.post_title,
body:this.editorContent

    }

    PostService.addPost(post);
  console.log(post.title +" "+post.body);
    //this.title=this.editorForm.get('Title').value;
    console.log(this.editorForm.get('editor').value);
    
  }

}
