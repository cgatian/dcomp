import { NgModule, InjectionToken, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES, Route } from '@angular/router';
import { ActivationService } from './services/activation.service';
import { APP_MANIFEST, AppManifest } from './services/app-manifest.token';


export const activationManifest: AppManifest[] = [
  {
    activationEvent: 'popup',
    path: 'dynamic-popup',
    loadChildren: './components/dialog.module#DialogModule'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [
    ActivationService,
    { provide: APP_MANIFEST, useValue: activationManifest },
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    {
      provide: ROUTES,
      useValue: activationManifest,
      multi: true,
    }
  ],
})
export class DynamicModule { }
