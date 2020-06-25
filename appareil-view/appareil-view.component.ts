import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  title = 'my app';
  isAuth = false;
  appareils: any[];

  lastDate = new Promise(
    (resolve, reject) => {
      const lastDate = new Date();
      setTimeout(
        () => {
          resolve(lastDate);
        }, 2000
      );
    }
  );
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit(): void {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();

  }
  onSave(){
    this.appareilService.saveAppareilToServer();
  }
  onFetch(){
    this.appareilService.getAppareilFromServer();
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteint() {
    this.appareilService.switchOffAll();
  }
}
