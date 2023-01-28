import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDetailComponent } from './jogo-detail.component';

describe('JogoDetailComponent', () => {
  let component: JogoDetailComponent;
  let fixture: ComponentFixture<JogoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
