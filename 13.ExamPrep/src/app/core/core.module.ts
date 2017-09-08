import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HttpService } from './http.service'
import { AuthService } from './auth.service'
import { PrivateRoute } from './private.route'

import { NavbarComponent } from './navbar.component'

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [HttpService, AuthService, PrivateRoute],
  exports: [NavbarComponent]
})

export class CoreModule {}