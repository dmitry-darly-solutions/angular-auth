import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    RouterModule,
    AuthRoutingModule,
  ],
  exports: [],
  declarations: [
    LoginComponent,
  ],
  providers: [],
})
export class AuthModule {}
