import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodos } from './create-todos';

describe('CreateTodos', () => {
  let component: CreateTodos;
  let fixture: ComponentFixture<CreateTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
