import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormModalComponent } from './note-form-modal.component';

describe('NoteFormModalComponent', () => {
  let component: NoteFormModalComponent;
  let fixture: ComponentFixture<NoteFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
