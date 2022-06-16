import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map, Observable, switchMap } from "rxjs";
import { AppService } from "./app.service";

@Injectable({
  providedIn: 'root'
})

export class PostsService{
  constructor(private firestore: AngularFirestore, private service: AppService){}

  createPost(text: string): void {
    this.firestore.collection('posts').add({userId: localStorage.getItem('userId'), text: text, data: new Date()})
  }


  deletePost(postId: string): void{
    this.firestore.collection('posts').doc(postId).delete();
  }

  getAllPosts(): Observable<any>{
    return  this.firestore.collection('followers').doc(`${localStorage.getItem('userId')}`).collection('following').get().pipe(
      map((item) => item.docChanges().map(c => c.doc.id)),
      switchMap(items => {
        return this.firestore.collection('posts', ref => ref.where('userId', 'in', [...items, `${localStorage.getItem('userId')}`]).orderBy('data', 'desc')).get();
      }),
      map(changes =>
        changes.docChanges().map(c =>
          ({ id: c.doc.id, ...c.doc.data() as any })
        )
      )
    )
  }


  getComments(id: string): Observable<any[]>{
    return this.firestore.collection('comments', ref => ref.where('postId', '==', id).orderBy('data', 'asc')).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() as any })
        )
      )
    );
  }

  createComment(postId: string, text: string): void{
    this.firestore.collection('comments').add({postId: postId, text: text, data: new Date(), userId: localStorage.getItem('userId')});
  }

  deleteComment(id: string): void{
    this.firestore.collection('comments').doc(id).delete();
  }


  getUserPosts(): Observable<any> {
    return this.service.login$.pipe(
      switchMap(test =>
        this.firestore.collection('users', ref => ref.where('login', '==', `${test}`)).stateChanges().pipe(
          map(changes =>
            changes.map(c =>
              ({ id: c.payload.doc.id, ...c.payload.doc.data() as any })
            )
          ),
          switchMap(x =>  this.firestore.collection('posts', ref => ref.where('userId', '==', `${x[0].id}`).orderBy('data', 'desc'))
            .snapshotChanges().pipe(
              map(changes =>
                changes.map(c =>
                  ({ id: c.payload.doc.id, ...c.payload.doc.data() as any })
                )
              )
            )
          )
        )
      )
    )
  }
}
