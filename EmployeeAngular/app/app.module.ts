import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpComponent } from './components/list-emp/list-emp.component';
import { ListDeptComponent } from './components/list-dept/list-dept.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const route : Routes =[
  {path : '',component:WelcomeComponent},
  {path:'products',component:ListEmpComponent},
  {path:'categories',component:ListDeptComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmpComponent,
    ListDeptComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
