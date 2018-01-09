import { Component } from '@angular/core';
import { ActivationService } from './dynamic/services/activation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private activationService: ActivationService) {

  }

  send() {
    this.activationService.activate('popup', {});
  }

}
