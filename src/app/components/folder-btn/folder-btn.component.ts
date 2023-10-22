import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-folder-btn',
  templateUrl: './folder-btn.component.html',
  styleUrls: ['./folder-btn.component.css'],
})
export class FolderBtnComponent {
  @Input() title: string = '';
  @Input() isSelected = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  onBtnClick(): void {
    this.onClick.emit();
  }
}
