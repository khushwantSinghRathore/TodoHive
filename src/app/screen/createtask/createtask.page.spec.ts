import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatetaskPage } from './createtask.page';

describe('CreatetaskPage', () => {
  let component: CreatetaskPage;
  let fixture: ComponentFixture<CreatetaskPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
