import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.scss'
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = ''; // Propriété pour stocker la nouvelle onomatopée

  @Output() sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter<string>(); // EventEmitter pour émettre l'onomatopée vers le parent

  createOnomatopia(): void {
    if (this.newOnomatopia.trim() !== '') {
      this.sendOnomatopiaToParent.emit(this.newOnomatopia); // Émettre la nouvelle onomatopée vers le parent
      this.newOnomatopia = ''; // Réinitialiser la valeur de la nouvelle onomatopée
    }
  }
}
