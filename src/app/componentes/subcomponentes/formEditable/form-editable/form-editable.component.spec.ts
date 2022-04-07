import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditableComponent } from './form-editable.component';

describe('FormEditableComponent', () => {
  let component: FormEditableComponent;
  let fixture: ComponentFixture<FormEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
