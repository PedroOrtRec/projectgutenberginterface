import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBannerComponent } from './title-banner.component';

describe('TitleBannerComponent', () => {
  let component: TitleBannerComponent;
  let fixture: ComponentFixture<TitleBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
