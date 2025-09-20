import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTodo } from './show-todo';

describe('ShowTodo', () => {
  let component: ShowTodo;
  let fixture: ComponentFixture<ShowTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
