import {OnInit} from '@angular/core';

export class UsersService implements OnInit {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
  ngOnInit() {
  }

  getUsers() {
    return this.users;
  }
  getParticularUser(id: number) {
    return this.users[id];
  }
}
