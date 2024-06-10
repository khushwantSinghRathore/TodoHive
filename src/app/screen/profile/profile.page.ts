import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  email = 'dev.khushwantsinghrathore@gmail.com';
  constructor(private route: Router) {}

  ngOnInit() {}

  toSignIn() {
    this.route.navigateByUrl('/signin');
  }
}
