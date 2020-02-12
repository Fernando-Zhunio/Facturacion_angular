import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoVideoComponent } from './dialogo-video.component';

describe('DialogoVideoComponent', () => {
  let component: DialogoVideoComponent;
  let fixture: ComponentFixture<DialogoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
