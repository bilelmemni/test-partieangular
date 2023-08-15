import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsbookComponent } from './deatilsbook.component';

describe('DeatilsbookComponent', () => {
  let component: DeatilsbookComponent;
  let fixture: ComponentFixture<DeatilsbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatilsbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatilsbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
