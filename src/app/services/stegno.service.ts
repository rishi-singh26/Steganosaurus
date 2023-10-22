import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StegnoService {

  constructor() { }

  clearLowBits(dec: number) {
  var divide = Math.floor(dec / 16);
  var multiply = divide * 16;
  return multiply;
}

chopToHide(show) {
  for (var px of show.values()) {
    // clear the low bits of red.
    px.setRed(clearLowBits(px.getRed()));
    // clear the low bits of green
    px.setGreen(clearLowBits(px.getGreen()));
    // clear the low bits of blue
    px.setBlue(clearLowBits(px.getBlue()));
  }
  // return image after the above computation
  return show;
}

shift(hide) {
  for (var px of hide.values()) {
    // shift the red bits over
    px.setRed(px.getRed() / 16);
    // shift the green bits over
    px.setGreen(px.getGreen() / 16);
    // shift the blue bits over
    px.setBlue(px.getBlue() / 16);
  }
  // return image after the above computation
  return hide;
}

getLowBits(dec) {
  var mod = dec % 16;
  var multiply = mod * 16;
  return multiply;
}

extractHiddenImgFromImg(show) {
  for (var px of show.values()) {
    // clear the low bits of red.
    px.setRed(getLowBits(px.getRed()));
    // clear the low bits of green
    px.setGreen(getLowBits(px.getGreen()));
    // clear the low bits of blue
    px.setBlue(getLowBits(px.getBlue()));
  }
  return show;
}

}
