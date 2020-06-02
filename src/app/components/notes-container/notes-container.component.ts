import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {Note} from "../../interfaces/note.interface";

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
  public notes: Note[];
  public showForm: boolean = false;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.getNotes();
  }

  private getNotes() {
    this.notes = this.localStorageService.getNotes() || [];
  }

  public createNote() {
    this.showForm = !this.showForm;
  }

  public close(showForm: boolean) {
    this.showForm = showForm;
  }

  public saveNote(note: Note) {
    this.notes.push(note);
    this.localStorageService.save(this.notes);
    this.getNotes();
  }

}
