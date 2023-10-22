import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FolderBtnComponent } from './components/folder-btn/folder-btn.component';
import { FileBtnComponent } from './components/file-btn/file-btn.component';
import { FormsModule } from '@angular/forms';
import { DropBoxComponent } from './components/drop-box/drop-box.component';
import { DropZoneDirective } from './directives/drop-zone.directive';

@NgModule({
  declarations: [AppComponent, FolderBtnComponent, FileBtnComponent, DropBoxComponent, DropZoneDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
