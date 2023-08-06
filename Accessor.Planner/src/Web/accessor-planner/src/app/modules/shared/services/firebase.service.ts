import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

    private firebaseConfig: any = {

      apiKey: "AIzaSyDXMVntMAqGu0C-0jhs-9TBtwSQroOKgsA",
      authDomain: "accessor-planner.firebaseapp.com",
      projectId: "accessor-planner",
      storageBucket: "accessor-planner.appspot.com",
      messagingSenderId: "404248121061",
      appId: "1:404248121061:web:7448577f2a8cfbf7ac8e0c",
      measurementId: "G-K4VEM634TS"

    };

  constructor() { }

  private connectFirebase(): void {
    firebase.default.initializeApp(this.firebaseConfig);
    firebase.default.analytics();
  }

  public saveFile(file: any): any {

  }
}
