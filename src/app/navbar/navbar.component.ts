import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  type = 0;
  changeRote() {
    if (this.type == 0) {
      this.type = 1;
      this.router.navigateByUrl('/room/edit');
    } else {
      this.type = 0;
      this.router.navigateByUrl('/building/edit');
    }
  }
}
