import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories = [
    { icon: 'copy', name: 'Projects', num: 5, color: '#B4C4FF' },
    { icon: 'car', name: 'Work', num: 3, color: '#CFF3E9' },
    { icon: 'barbell', name: 'Daily Tasks', num: 2, color: '#9747FF' },
    { icon: 'bag', name: 'Groceries', num: 7, color: '#EDBE7D' },
  ];

  constructor() {}

  ngOnInit() {}
}
