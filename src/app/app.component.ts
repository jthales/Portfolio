import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

/**
 * The root component of the application.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  /**
   * Initializes a new instance of the AppComponent class.
   * @param titleService The title service to set the title of the application.
   */
  constructor(
    private titleService: Title,
  ) {
    const localizedTitle = $localize`:@@appTitle:Portfólio`;
    this.titleService.setTitle(localizedTitle);
  }

}
