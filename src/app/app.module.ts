import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './ComponentesFz/intro/intro.component';
import { PlataformasComponent } from './ComponentesFz/plataformas/plataformas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatVideoModule } from 'mat-video';
import { NgwWowModule } from 'ngx-wow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import
{
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { DialogoVideoComponent } from './ComponentesFZ/dialogo-video/dialogo-video.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PlataformasComponent,
    DialogoVideoComponent
  ],
  entryComponents: [DialogoVideoComponent],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,    
    MatIconModule,
    MatCardModule,
    MatVideoModule,
    MatSnackBarModule,
    MatDialogModule, NgwWowModule
    // FontAwesomeModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
