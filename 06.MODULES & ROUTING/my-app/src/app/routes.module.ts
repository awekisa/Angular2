import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './routes/home.component';
import { AboutComponent } from './routes/about.component';
import { TestComponent } from './routes/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test/:id', component: TestComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TestComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}