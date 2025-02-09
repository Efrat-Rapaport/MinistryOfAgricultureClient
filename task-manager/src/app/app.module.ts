import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { PrimengModule } from './primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http'; // ייבוא המודול

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    PrimengModule, HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
