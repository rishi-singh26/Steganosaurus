import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-file-btn',
  templateUrl: './file-btn.component.html',
  styleUrls: ['./file-btn.component.css'],
})
export class FileBtnComponent {
  @Input() title: string = '';
  @Input() isSelected = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter();
  onBtnClick(): void {
    this.onClick.emit();
  }
}
