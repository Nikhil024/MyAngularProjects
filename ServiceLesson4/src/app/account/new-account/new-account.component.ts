import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @ViewChild('inputName') inputName: string;
  @ViewChild('inputStatus') inputStatus: string;
  @Output() newAccount = new EventEmitter<{name: string, newstatuses: string}>();

  constructor() { }

  ngOnInit() {
  }

  onClickAddAccount(accountName: string, accountStatus: string) {
    this.newAccount.emit({name: accountName, newstatuses: accountStatus});
  }
}
