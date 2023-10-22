import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Steganosaurus';
  isHIIShown = false; // Hide image in image
  isHTIShown = false; // Hide text in image
  isEIIShown = false; // Extract image from image
  isETIShown = false; // Extract text from image
  isAboutShown = false; // About dialog

  // HII variables
  imageToBeShown: File | undefined;
  imageToBeHidden: File | undefined;
  resultImage: File | undefined;

  toggleHII(): void {
    this.isHIIShown = !this.isHIIShown;
    this.isHTIShown = false;
    this.isEIIShown = false;
    this.isETIShown = false;
    this.isAboutShown = false;
  }

  toggleHTI(): void {
    this.isHTIShown = !this.isHTIShown;
    this.isHIIShown = false;
    this.isEIIShown = false;
    this.isETIShown = false;
    this.isAboutShown = false;
  }

  toggleEII(): void {
    this.isEIIShown = !this.isEIIShown;
    this.isHTIShown = false;
    this.isHIIShown = false;
    this.isETIShown = false;
    this.isAboutShown = false;
  }

  toggleETI(): void {
    this.isETIShown = !this.isETIShown;
    this.isEIIShown = false;
    this.isHTIShown = false;
    this.isHIIShown = false;
    this.isAboutShown = false;
  }

  toggleAbout(): void {
    this.isAboutShown = !this.isAboutShown;
  }

  filePick(file: File) {
    console.log(file);
  }
}
