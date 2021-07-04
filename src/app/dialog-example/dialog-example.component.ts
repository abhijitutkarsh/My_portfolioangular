import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor() { }
  dialog: any;
  isAnimate!: true;

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
close(){
  document.getElementsByClassName('animate__animated')[0].classList.remove('animate__slideInRight');
  document.getElementsByClassName('animate__animated')[0].classList.add('animate__slideOutLeft');
  setTimeout(() => {this.dialog.closeAll(); }, 800);
}
}
