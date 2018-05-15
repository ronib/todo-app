import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleSelect(){
    console.log("select");
  }

  handleDelete(){
    console.log("delete");
  }

}
