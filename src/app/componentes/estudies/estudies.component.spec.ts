import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiesComponent } from './estudies.component';

describe('EstudiesComponent', () => {
  let component: EstudiesComponent;
  let fixture: ComponentFixture<EstudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
