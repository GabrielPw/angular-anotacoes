import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoNewComponent } from './jogo-new.component';

describe('JogoNewComponent', () => {
  let component: JogoNewComponent;
  let fixture: ComponentFixture<JogoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
