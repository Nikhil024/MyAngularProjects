import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .online{
      color:white;
    }
  `]
})
export class ServersComponent implements OnInit {
  userName = '';
  userCreatedMessage = '';
  userCreated = false;
  users = ['Nikhil', 'admin'];
  constructor() {
  }

  ngOnInit() {
  }

  displayUserCreate(event: any) {
    this.userCreatedMessage = 'User ' + this.userName + ' Created Successfully!!';
    this.userCreated = true;
    this.users.push(this.userName);
  }

  getColor() {
    return (this.userName != null && this.userName !== '') ? 'green' : 'red';
  }
}
