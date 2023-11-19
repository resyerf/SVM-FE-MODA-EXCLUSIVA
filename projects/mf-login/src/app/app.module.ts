import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
