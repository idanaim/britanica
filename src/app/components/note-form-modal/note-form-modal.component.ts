import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Note} from "../../interfaces/note.interface";

@Component({
  selector: 'app-note-form-modal',
  templateUrl: './note-form-modal.component.html',
  styleUrls: ['./note-form-modal.component.scss']
})
export class NoteFormModalComponent implements OnInit {
  @Input() displayModal: boolean = false;
  @Output() callback: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  public noteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  public save() {
    this.noteForm.patchValue({date: new Date().getTime()})
    this.callback.emit(this.noteForm.value);
    this.closeModal();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.noteForm = this.formBuilder.group({
      author: ['', [Validators.required]],
      content: ['', [Validators.required]],
      date: ['']
    });
  }

  public closeModal() {
    this.toggleModal();
    this.cancel.emit(this.displayModal);
  }


  public toggleModal() {
    this.displayModal = !this.displayModal;
    this.initForm();
  }
}
