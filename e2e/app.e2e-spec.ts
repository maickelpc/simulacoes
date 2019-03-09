import { Simulacoes2Page } from './app.po';

describe('simulacoes2 App', function() {
  let page: Simulacoes2Page;

  beforeEach(() => {
    page = new Simulacoes2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
