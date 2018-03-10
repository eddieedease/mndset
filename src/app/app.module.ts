import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import service
import { MindSerService } from './mind-ser.service';

// import components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObjectsComponent } from './objects/objects.component';

// routes
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
  { path: 'objects', component: ObjectsComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewComponent,
    EditComponent,
    PageNotFoundComponent,
    ObjectsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [MindSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
