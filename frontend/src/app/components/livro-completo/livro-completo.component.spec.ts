import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCompletoComponent } from './livro-completo.component';

describe('LivroCompletoComponent', () => {
  let component: LivroCompletoComponent;
  let fixture: ComponentFixture<LivroCompletoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroCompletoComponent]
    });
    fixture = TestBed.createComponent(LivroCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
