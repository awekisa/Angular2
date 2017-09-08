import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { UserRegisterComponent } from './users/users.component';
// import { TestComponent } from './routes/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/register', component: UserRegisterComponent },
  // { path: 'test/:id', component: TestComponent }
];

@NgModule({
  declarations: [
    HomeComponent
    // AboutComponent,
    // TestComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}