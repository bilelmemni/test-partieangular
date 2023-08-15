import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcatethgorieComponent } from './listcatethgorie.component';

describe('ListcatethgorieComponent', () => {
  let component: ListcatethgorieComponent;
  let fixture: ComponentFixture<ListcatethgorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcatethgorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcatethgorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
