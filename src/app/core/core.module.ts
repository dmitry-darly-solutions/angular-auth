import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { AnonymousGuard } from './guards/anonymous.guard';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthService,
    AnonymousGuard,
    AuthGuard,
  ],
})
export class CoreModule {
}
