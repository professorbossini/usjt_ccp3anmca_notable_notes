import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class NoteService{
    constructor (private db: AngularFireDatabase){

    }
    notes = [
        {
            id: '1',
            date: '2016-02-01',
            title: 'Firebase',
            content: 'Que tal programar Serverless?'
        },
        {
            id: '2',
            date: '2016-01-01',
            title: 'Ionic',
            content: 'Aprenda o básico de Ionic'
        },
        {
            id: '3',
            date: '2016-03-01',
            title: 'Angular',
            content: 'Importante para desenvolver com Ionic'
        }
    ];

    removeNote (note){
        this.db.object("/notes/" + note.$key).remove().
        then(() => {
            console.log ("Apagou com sucesso");
        }).
        catch((error) => {
            console.log ("Falhou", error);
        });

        // let index = this.notes.indexOf(note);
        // if (index > -1){
        //     this.notes.splice(index, 1);
        // }
    }

    addNote (note){
        //this.notes.push(note);
        this.db.list("/notes/").push({
            title: note.title,
            content: note.content,
            date: note.date
        });
    }

    fetchNotes (){
        return this.db.list("/notes/");
    }

    editNote (note){
        this.db.object("/notes/" + note.$key).update({
            title: note.title,
            date: note.date,
            content: note.content
        });
    }
}