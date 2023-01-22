import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DisplayComponent } from './modules/display/display.component';
import { CreateComponent } from './modules/create/create.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CreateComponent,
    PageNotFoundComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    HomeModule,
    AdminModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
