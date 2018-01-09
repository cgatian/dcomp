import { InjectionToken } from '@angular/core';

export const APP_MANIFEST = new InjectionToken<any>('APP_MANIFEST');

export interface AppManifest {
  path: string;
  activationEvent: string;
  loadChildren: string;
}
