import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasDePageComponent } from './bas-de-page.component';

describe('BasDePageComponent', () => {
  let component: BasDePageComponent;
  let fixture: ComponentFixture<BasDePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasDePageComponent]
    });
    fixture = TestBed.createComponent(BasDePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
