import {
  Directive,
  HostBinding,
  EventEmitter,
  HostListener,
  Output,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appDropZone]',
})
export class DropZoneDirective {
  @Input() allowed_extensions: Array<string> = ['png', 'jpg', 'jpeg'];
  @Output() private filesChangeEmiter: EventEmitter<File> = new EventEmitter();

  defaultBackground = '#fff';
  hoverBackground = '#efefef';
  dropBackground = '#eee';

  defaultBorderColor = '#000';
  hoverBorderColor = '#000';
  dropBorderColor = '#000';

  defaultBorderStyle = '3px dashed';
  hoverBorderStyle = '3px solid';
  dropBorderStyle = '3px dashed';

  @HostBinding('style.background') private background = this.defaultBackground;
  @HostBinding('style.border') private borderStyle = this.defaultBorderStyle;
  @HostBinding('style.border-color') private borderColor =
    this.defaultBorderColor;

  constructor() {}

  @HostListener('dragover', ['$event']) public onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = this.hoverBackground;
    this.borderColor = this.hoverBorderColor;
    this.borderStyle = this.hoverBorderStyle;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = this.defaultBackground;
    this.borderColor = this.defaultBorderColor;
    this.borderStyle = this.defaultBorderStyle;
  }

  @HostListener('drop', ['$event']) public onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    // debugger;
    let files = evt.dataTransfer.files;
    for (const file of files) {
      if (this.allowed_extensions.includes(file.name.split('.')[1])) {
        this.background = this.dropBackground;
        this.borderColor = this.dropBorderColor;
        this.borderStyle = this.dropBorderStyle;
        this.filesChangeEmiter.emit(file);
        return;
      }
    }
  }
}
