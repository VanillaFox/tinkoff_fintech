import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {  map, Observable, switchMap } from "rxjs";
import { AppService } from "./app.service";
@Injectable({
  providedIn: 'root'
})

export class TeamService{
  constructor(private firestore: AngularFirestore, private service: AppService){}
  getTeamData(): Observable<any>{
    return this.service.teamLogin$.pipe(
      switchMap(item => this.firestore.collection('teams').doc(`${item}`).get().pipe(
        map(item => item.data())
      )
      )
    )
  }

  createTeam(form: any): void{
    this.firestore.collection('teams').add(form);
  }

  getAllTeams(): Observable<any[]>{
    return this.firestore.collection('teams').snapshotChanges().pipe(
      map(
        changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() as any })
        )
      )
    )
  }
}
