import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestedialogComponent } from './testedialog.component';

describe('TestedialogComponent', () => {
  let component: TestedialogComponent;
  let fixture: ComponentFixture<TestedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestedialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
