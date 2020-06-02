import {Injectable} from '@angular/core';
import {Note} from "../interfaces/note.interface";

const KEY = 'notes';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public save(notes: Note[]) {

    localStorage.setItem(KEY, JSON.stringify(notes));
  }

  public getNotes(): Note[] {
    return JSON.parse(localStorage.getItem(KEY));
  }
}
