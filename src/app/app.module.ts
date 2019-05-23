import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'

export const firebaseConfig = {
  apiKey: "AIzaSyBFmEMtNv5_StShAstVqVMF7ojtwMCeiMs",
  authDomain: "usjt-ccp3anmca-notable-notes.firebaseapp.com",
  databaseURL: "https://usjt-ccp3anmca-notable-notes.firebaseio.com",
  projectId: "usjt-ccp3anmca-notable-notes",
  storageBucket: "usjt-ccp3anmca-notable-notes.appspot.com",
  messagingSenderId: "961998376138",
  appId: "1:961998376138:web:417be583fb2b2d12"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
