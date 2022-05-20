import { Component, OnInit } from '@angular/core';
declare var time: Date;
@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
})
export class WelcomeScreenComponent implements OnInit {
  constructor() {}
  greetUser: string = '';

  ngOnInit(): void {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12) this.greetUser = 'GooD morninG ';
    else if (hrs >= 12 && hrs <= 17) this.greetUser = 'GooD AfternooN ';
    else if (hrs >= 17 && hrs <= 24) this.greetUser = 'GooD EveninG ';
  }
}
