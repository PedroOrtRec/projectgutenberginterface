import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BrowserComponent } from './components/browser/browser.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterNavBarComponent } from './components/router-nav-bar/router-nav-bar.component';
import { TitleBannerComponent } from './components/title-banner/title-banner.component';
import { BrowserListComponent } from './components/browser-list/browser-list.component';
import { BrowserDetailComponent } from './components/browser-detail/browser-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserFormComponent } from './components/browser-form/browser-form.component';
import { BookComponent } from './components/book/book.component';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BrowserComponent,
    ProfileComponent,
    ContactComponent,
    RouterNavBarComponent,
    TitleBannerComponent,
    BrowserListComponent,
    BrowserDetailComponent,
    BrowserFormComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
