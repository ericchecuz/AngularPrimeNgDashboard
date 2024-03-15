import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeamMembersComponent } from './card-team-members.component';

describe('CardTeamMembersComponent', () => {
  let component: CardTeamMembersComponent;
  let fixture: ComponentFixture<CardTeamMembersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTeamMembersComponent]
    });
    fixture = TestBed.createComponent(CardTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
