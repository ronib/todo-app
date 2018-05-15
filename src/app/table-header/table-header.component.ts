import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleAddTask() {
    console.log("add");
  }

  handleSelectAll() {
    console.log("select all");
  }

  handleFilter() {
    console.log("filter");
  }

}
