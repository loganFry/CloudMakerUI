import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private fragment: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(frag => { this.fragment = frag });
  }

  ngAfterViewInit(): void {
    if(this.fragment){
      document.querySelector('#' + this.fragment).scrollIntoView();
    }
  }

}
