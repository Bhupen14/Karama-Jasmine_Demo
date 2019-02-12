import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectComponent } from './contect.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContectComponent', () => {
  let component: ContectComponent;
  let fixture: ComponentFixture<ContectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContectComponent ],
      imports : [BrowserModule,FormsModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
