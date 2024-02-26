import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigPostComponent } from './components/big-post/big-post.component';
import { SmallPostComponent } from './components/small-post/small-post.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { HomeComponent } from './pages/home/home.component';
import { PostTagsComponent } from './components/post-tags/post-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigPostComponent,
    SmallPostComponent,
    MainSectionComponent,
    HomeComponent,
    PostTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
