import { JogoDaVelhaPage } from './app.po';

describe('jogo-da-velha App', () => {
  let page: JogoDaVelhaPage;

  beforeEach(() => {
    page = new JogoDaVelhaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
