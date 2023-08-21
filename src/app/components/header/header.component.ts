import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent {
  public authAction = 'Войти';

  public auth() {
    console.log('вы вошли');
  }
}
