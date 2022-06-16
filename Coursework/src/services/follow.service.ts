import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import {  map, Observable, switchMap, zip } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class FollowService{
  constructor(private firestore: AngularFirestore){}


  isFollowing(id: string): Observable<boolean>{
    return this.firestore.collection('followers').doc(`${localStorage.getItem('userId')}`).collection('following').doc(id).get().pipe(
      map(item => item.exists)
    )
  }
  followersCount(id: string): Observable<number>{
    return this.firestore.collection('followers').doc(id).collection('followers').get().pipe(
      map(items => items.docs.length)
    )
  }

  followingCount(id: string): Observable<number>{
    return this.firestore.collection('followers').doc(id).collection('following').get().pipe(
      map(items => items.docs.length)
    )
  }


  searchUsers(items: any){
    return items.docs.map((item: any) =>
      this.firestore.collection('users').doc(item.id).get().pipe(
        map(i =>
          ({id: i.id, ...i.data() as any})
        )
      )
    )
  }

  getFollowers(id: string): Observable<any>{
    return this.firestore.collection('followers').doc(id).collection('followers', ref => ref.orderBy('data', 'desc')).get().pipe(
      switchMap(items => zip(...this.searchUsers(items)))
    )
  }

  getFollowing(id: string): Observable<any>{
    return this.firestore.collection('followers').doc(id).collection('following', ref => ref.orderBy('data', 'desc')).get().pipe(
      switchMap(items => zip(...this.searchUsers(items))),
    )
  }

  follow(id: string){
    this.firestore.collection('followers').doc(id).collection('followers').doc(`${localStorage.getItem('userId')}`).set({data: new Date()});
    this.firestore.collection('followers').doc(`${localStorage.getItem('userId')}`).collection('following').doc(id).set({data: new Date()});
  }

  unfollow(id: string){
    this.firestore.collection('followers').doc(id).collection('followers').doc(`${localStorage.getItem('userId')}`).delete();
    this.firestore.collection('followers').doc(`${localStorage.getItem('userId')}`).collection('following').doc(id).delete();
  }

}
