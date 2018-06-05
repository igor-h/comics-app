import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileComponent } from './card-profile.component';

describe('CardProfileComponent', () => {
  let component: CardProfileComponent;
  let fixture: ComponentFixture<CardProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
