import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-drop-box',
  templateUrl: './drop-box.component.html',
  styleUrls: ['./drop-box.component.css'],
})
export class DropBoxComponent {
  @Input() allowed_extensions: Array<string> = ['png', 'jpg', 'jpeg'];
  @Output() onFilePicked: EventEmitter<File> = new EventEmitter<File>();
  dropHandler(file: File) {
    this.onFilePicked.emit(file);
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files: FileList | null = target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (this.allowed_extensions.includes(file.name.split('.')[1])) {
          this.onFilePicked.emit(file);
          return;
        }
      }
    }
  }
}
