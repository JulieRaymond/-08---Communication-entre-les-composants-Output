import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from "./create-onomatopia/create-onomatopia.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, CreateOnomatopiaComponent]
})
export class AppComponent {
  title = 'myFirstOutput';

  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(newOnomatopia: string): void {
    this.onomatopoeiaList.push(newOnomatopia);
  }
}
