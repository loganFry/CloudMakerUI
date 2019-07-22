import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
      const linkContainer = document.getElementById('header');
      const btns = linkContainer.getElementsByClassName('link');

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < btns.length; i++) {
          btns[i].addEventListener('click', function() {
              const current = document.getElementsByClassName('active');
              current[0].className = current[0].className.replace(' active', '');
              this.className += ' active';
              window.scrollBy(0, 700);
          });
      }
  }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function
    myFunction() {
    console.log("clicked");
    var x = document.getElementById("header");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

}
