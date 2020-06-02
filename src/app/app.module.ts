import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NoteFormModalComponent } from './components/note-form-modal/note-form-modal.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NotesContainerComponent,
    NoteItemComponent,
    NoteFormModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
