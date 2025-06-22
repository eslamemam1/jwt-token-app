import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notificantion } from './notificantion';

describe('Notificantion', () => {
  let component: Notificantion;
  let fixture: ComponentFixture<Notificantion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notificantion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notificantion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
