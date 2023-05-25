import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserDetailComponent } from './browser-detail.component';

describe('BrowserDetailComponent', () => {
  let component: BrowserDetailComponent;
  let fixture: ComponentFixture<BrowserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
