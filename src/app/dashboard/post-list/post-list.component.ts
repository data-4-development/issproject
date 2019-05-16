import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import Post from 'src/app/models/post';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  inputs : ['posts'],
  outputs : ['SelectPost']
})
export class PostListComponent implements OnInit {


  public SelectPost = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
onSelect(p : Post){
  this.SelectPost.emit(p);

}
}
