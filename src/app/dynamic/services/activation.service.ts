import { Injectable, Injector, NgModuleFactoryLoader, Type, Inject } from '@angular/core';
import { NgModuleFactory } from '@angular/core/src/linker/ng_module_factory';
import { APP_MANIFEST, AppManifest } from './app-manifest.token';

declare let System: any;

@Injectable()
export class ActivationService {

  constructor(
    @Inject(APP_MANIFEST) private activationManifest: AppManifest[],
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) {
  }

  activate(type: string, payload: any) {

    const manifest = this.activationManifest.find(m => m.activationEvent === type);
    if (manifest) {
      this.loader.load(manifest.loadChildren)
        .then((ngModuleFactory: NgModuleFactory<any>) => {
          const moduleRef = ngModuleFactory.create(this.injector);
          const dynamicComponents = moduleRef.instance.dynamicComponents as Type<any>[];

          for (const comp of dynamicComponents) {
            const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(comp);
            const selector = factory.selector;
          }
        });
    }
  }
}
