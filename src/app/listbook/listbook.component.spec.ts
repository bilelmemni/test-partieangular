import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbookComponent } from './listbook.component';

describe('ListbookComponent', () => {
  let component: ListbookComponent;
  let fixture: ComponentFixture<ListbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
