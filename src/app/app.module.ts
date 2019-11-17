import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from "./components/list/list.component";
import { AddComponent } from "./components/add/add.component";
import { HeaderComponent } from "./components/header/header.component";
import { StudentListRowComponent } from "./components/student-list-row/student-list-row.component";
import { StudentEditorComponent } from "./components/student-editor/student-editor.component";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    AddComponent,
    HeaderComponent,
    StudentListRowComponent,
    StudentEditorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
