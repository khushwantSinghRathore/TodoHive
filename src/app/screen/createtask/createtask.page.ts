import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.page.html',
  styleUrls: ['./createtask.page.scss'],
})
export class CreatetaskPage implements OnInit {
  categ = 'project';
  priority = 'low';
  constructor() {}

  ngOnInit() {}

  clicked(btn: any) {
    this.categ = btn;
  }

  clickedPT(btn: any) {
    this.priority = btn;
  }
}
