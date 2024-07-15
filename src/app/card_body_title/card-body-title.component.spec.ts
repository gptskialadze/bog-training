import { ComponentFixture, TestBed } from '@angular/core/testing';
import {CardBodyTitleComponent} from "./card_body_title_component";

describe('CardBodyTitleComponent', () => {
  let component: CardBodyTitleComponent;
  let fixture: ComponentFixture<CardBodyTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBodyTitleComponent]
    });
    fixture = TestBed.createComponent(CardBodyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
