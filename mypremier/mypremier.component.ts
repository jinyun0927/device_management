import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypremier',
  templateUrl: './mypremier.component.html',
  styleUrls: ['./mypremier.component.scss']
})
export class MypremierComponent implements OnInit {
  isAuth = false;
  constructor() {
    setTimeout(
    () => {
      this.isAuth = true;
    }, 4000
  );
}

  ngOnInit() {
  }

}
