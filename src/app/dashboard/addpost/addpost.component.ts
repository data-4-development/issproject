import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  editorForm: FormGroup;
editorContent: string;
  constructor() {


  }



  ngOnInit() {

    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }


  onSubmit() {
    this.editorContent=this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }

}
