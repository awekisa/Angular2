import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { UserService } from './user.service'

import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component'

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
  providers: [UserService],
  imports: [FormsModule, CommonModule]
})
export class UsersModule {}