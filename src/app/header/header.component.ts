import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentSelected: string;

  constructor() {
  }

  ngOnInit() {
  }

  selectLink(event: any){
    this.currentSelected = event.target.innerText;
  }

}
