import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  inputs : ['post']
})
export class PostDetailComponent implements OnInit {
  editorForm: FormGroup;
x :String;
post: any;
  constructor() { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
        this.editorForm.get('editor').setValue(this.x);
  }

}
