import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  imports: [CommonModule]
})
export class LoginUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
