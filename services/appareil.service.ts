import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {
    appareilSubject = new Subject<any[]>();
  private appareils = [
        // {
        //   id: 1,
        //   name: 'televison',
        //   status: 'éteint'
        // },
        // {
        //   id: 2,
        //   name: 'ordinateur',
        //   status: 'allumé'
        // },
        // {
        //   id: 3,
        //   name: 'machine à laver',
        //   status: 'éteint'
        // },
      ];
      constructor(private httpClient: HttpClient) {}
      emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
      }
      getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (appareilObjet) => {
            return appareilObjet.id === id;
          }
        );
        return appareil;
      }
      switchOnAll() {
          for (const appareil of this.appareils) {
            appareil.status = 'allumé';
          }
          this.emitAppareilSubject();
      }

      switchOffAll() {
          for (const appareil of this.appareils) {
              appareil.status = 'éteint';
          }
          this.emitAppareilSubject();
      }

      switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
      }

      switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
      }

      addAppareil(name: string, status: string) {
        const appareilObjet = {
          id: 0,
          name: '',
          status: '',
        };
        appareilObjet.name = name;
        appareilObjet.status = status;
        if(this.appareils.length!==0){
          appareilObjet.id = this.appareils[this.appareils.length - 1].id + 1;
        }
        this.appareils.push(appareilObjet);
        this.emitAppareilSubject();
      }

      saveAppareilToServer() {
        this.httpClient.put('https://http-client-demo-b9365.firebaseio.com/appareils.json', this.appareils).subscribe(
          () => {
            console.log('enregistrement terminé');
            this.emitAppareilSubject();
          }, (error) => {
            console.log('Erreur de sauvegarder!'+error);
          }
        );
      }

      getAppareilFromServer(){
        this.httpClient.get<any[]>('https://http-client-demo-b9365.firebaseio.com/appareils.json').subscribe(
          (reponse)=>{
            console.log(reponse);
            this.appareils =reponse;
            this.emitAppareilSubject();
          },(error)=>{
            console.log('Erreur de chargement!'+error);
          }
        )
      }
}
