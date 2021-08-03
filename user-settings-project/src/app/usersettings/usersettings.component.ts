import { Component, OnInit } from '@angular/core';
import { UserSettings } from './data/usersettings';

@Component({
  selector: 'app-usersettings',
  templateUrl: 'usersettings.component.html',
  styleUrls: ['usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {
  userSettings : UserSettings = {
    name: '',
    email: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
