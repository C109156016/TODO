import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OneTodo';
  placeholder='What needs to be done?';


  toggleAllbtn = false;
  check1 = false;
  check2 = false;

  toggleAll(){
    this.toggleAllbtn = !this.toggleAllbtn;
    this.check1 = this.toggleAllbtn;
    this.check2 = this.toggleAllbtn;
  }
  click1(){
    this.check1 = !this.check1;
  }
  click2(){
    this.check2 = !this.check2;
  }

}
