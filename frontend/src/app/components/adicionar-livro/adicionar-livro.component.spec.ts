import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarLivroComponent } from './adicionar-livro.component';

describe('AdicionarLivroComponent', () => {
  let component: AdicionarLivroComponent;
  let fixture: ComponentFixture<AdicionarLivroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarLivroComponent]
    });
    fixture = TestBed.createComponent(AdicionarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
