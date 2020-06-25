import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  seconde: number;
  countSubscription: Subscription;
  constructor() {}

 ngOnInit() {
   const counter = Observable.interval(1000);
   this.countSubscription = counter.subscribe(
    (value: number) => {
      this.seconde = value;
    }
   );
   // il peut créer le bug en raison d'infini
   // éviter d'utilisation
   /*counter.subscribe(
     (value: number) => {
       this.seconde = value;
     },
     (error: any) => {
       console.log('Une erreur a été rencontrée !');
     },
     () => {
       console.log('observable complété');
     },
   );*/
 }
 ngOnDestroy() {
    this.countSubscription.unsubscribe();
}

}
