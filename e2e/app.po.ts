import { browser, by, element } from 'protractor';

export class JogoDaVelhaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
