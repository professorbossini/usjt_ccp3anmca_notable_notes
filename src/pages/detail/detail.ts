import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {NoteService} from '../../app/note.service'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note;
  newNoteFlag = false;
  deleteNoteFlag = false;
  constructor(public navCtrl: NavController, 
                  public navParams: NavParams, 
                      public noteService : NoteService, 
                            public alertCtrl: AlertController) {
    this.note = this.navParams.get("noteParam");
    if (!this.note){
      this.note = {
        title: "",
        date: "",
        content: ""
      }
      this.newNoteFlag = true;
    }
    console.log('details', this.note);
  }

  onTrash (){
    let confirm = this.alertCtrl.create({
      title: `Delete?`,
      message: `Are you sure you want to delete this note: "${this.note.title}" ?`,
      buttons:[
        {
          text: "Cancel"
        },
        {
          text: "Confirm",
          handler: () => {
            this.deleteNoteFlag = true;
            this.noteService.removeNote(this.note);
            this.navCtrl.pop();
          }
        }

      ]
    });
    confirm.present();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  ionViewWillLeave (){
    if (this.newNoteFlag){
      if (this.note.title != "" && this.note.content != "" && this.note.date != "")
        this.noteService.addNote(this.note);
    }
    else if (!this.deleteNoteFlag) {
      this.noteService.editNote(this.note);
    }
  }

}
