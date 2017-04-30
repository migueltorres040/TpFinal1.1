import { AlquilerPage } from './app.po';

describe('alquiler App', function() {
  let page: AlquilerPage;

  beforeEach(() => {
    page = new AlquilerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
