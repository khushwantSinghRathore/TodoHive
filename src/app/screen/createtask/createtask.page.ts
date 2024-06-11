import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.page.html',
  styleUrls: ['./createtask.page.scss'],
})
export class CreatetaskPage implements OnInit {
  categ = 'project';
  priority = 'low';
  constructor(private route: Router) {}

  ngOnInit() {}

  clicked(btn: any) {
    this.categ = btn;
  }

  clickedPT(btn: any) {
    this.priority = btn;
  }

  back() {
    this.route.navigateByUrl('/home');
  }
}
