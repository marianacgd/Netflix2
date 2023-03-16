import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEpisodiosComponent } from './card-episodios.component';

describe('CardEpisodiosComponent', () => {
  let component: CardEpisodiosComponent;
  let fixture: ComponentFixture<CardEpisodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEpisodiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEpisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
