import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userName : string = '';
  isDetailsAppears: boolean = false;
  logs: string[] = [];
  logCount: number = 0;

  // serverStyles={
  //   "background-color":"red",
  //   "color":"white",
  //   "font-style":"italic"
  // }

  resetUsername(): void{

    this.userName='';

  }

  onAppears(){
    this.isDetailsAppears= true;
    this.logCount++;
    this.logs.push(`Log ${this.logCount}: ${new Date().toLocaleTimeString()}`);
  }



}
