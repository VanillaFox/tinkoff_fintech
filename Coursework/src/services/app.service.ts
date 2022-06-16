import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { BehaviorSubject, map, Observable, switchMap, zip } from "rxjs";
import { UserData } from "src/shared/IDate";
import { NavigationService } from "./navigation.service";

@Injectable({
  providedIn: 'root'
})

export class AppService{
  private _auth = getAuth();
  private _id: string;
  private openFlagSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loginFlagSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loginSub: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private createTeamSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private teamLoginSub: BehaviorSubject<string> = new BehaviorSubject<string>('');

  createTeamFlag$: Observable<boolean> = this.createTeamSub.asObservable();
  openFlag$: Observable<boolean> = this.openFlagSubject.asObservable();
  loginFlag$: Observable<boolean> = this.loginFlagSubject.asObservable();
  login$: Observable<string> = this.loginSub.asObservable();
  teamLogin$: Observable<string> = this.teamLoginSub.asObservable();

  setOpenFlag(newValue: boolean) {
    this.openFlagSubject.next(newValue);
  }

  setLoginFlag(flag: boolean){
    this.loginFlagSubject.next(flag);
  }

  setLogin(test: string){
    this.loginSub.next(test);
  }

  setCreateTeam(flag: boolean){
    this.createTeamSub.next(flag);
  }

  setTeamLogin(login: string){
    this.teamLoginSub.next(login)
  }


  constructor(private routerService: NavigationService,
              private firestore: AngularFirestore
              ) {
    onAuthStateChanged(this._auth, (user) => {
      if(user){
        this.setLoginFlag(true);
        localStorage.setItem('userId', user.uid);
        this._id = user.uid;

        this.idToLogin(user.uid).subscribe((item) => {
          localStorage.setItem('userLogin', `${item.login}`)
        })
      }
      else{
        this.setLoginFlag(false);
        localStorage.removeItem('userId');
        localStorage.removeItem('userLogin');
      }
    })
  }


  async logIn(email: string, password: string): Promise<boolean> {
    let ans = false;
    await signInWithEmailAndPassword(this._auth, email, password)
    .then(() => {
      this.routerService.toNews();
    })
    .catch((error) => {
      console.log("SignIn Error", error);
      ans = true;
    });
    return ans;
  }

  logOut(): void {
    signOut(this._auth)
    .then(() => {
      this.routerService.toStart();
    })
    .catch((error) => console.log("Error sing out", error))
  }

  registration(email: string, password: string, login: string): void {
    createUserWithEmailAndPassword(this._auth, email, password)
    .then((user) => {
      this.firestore.collection('users').doc(`${user.user.uid}`).set({login: login});
      this.routerService.toNews();
    })
    .catch((error) => console.log("Registration error", error));
  }


  getData(): Observable<any> {
    return  this.login$.pipe(
      switchMap(test => this.firestore.collection('users', ref => ref.where('login', '==', `${test}`)).stateChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, ...c.payload.doc.data() as any })
          )
        ),
        map(x => x[0])
      ))
    )
  }

  editProfile(form: any): void{
    this.firestore.collection('users').doc(this._id).update(form)
  }


  idToLogin(id: string): Observable<UserData> {
    return this.firestore.collection('users').doc(`${id}`).snapshotChanges().pipe(
      map(changes =>
        ({ id: changes.payload.id, ...changes.payload.data() as any })
      )
    )
  }


  getUsers(): Observable<any[]>{
    return this.firestore.collection('users').get().pipe(
      map(item => item.docChanges().map(
        c => ({id: c.doc.id, ...c.doc.data() as any})
      ))
    )
  }
}

