import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterNavBarComponent } from './router-nav-bar.component';

describe('RouterNavBarComponent', () => {
  let component: RouterNavBarComponent;
  let fixture: ComponentFixture<RouterNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
