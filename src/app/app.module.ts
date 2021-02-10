import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';
import {AuthInterceptor} from './shared/interceptors/auth.interceptor';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { AlbumComponent } from './shared/components/album/album.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import {FormsModule} from '@angular/forms';
import { AlertComponent } from './shared/components/alert/alert.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    AlbumsPageComponent,
    LoadingComponent,
    AlbumComponent,
    SearchPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
