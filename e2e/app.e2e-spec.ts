import { GiveMePage } from './app.po';

describe('give-me App', () => {
  let page: GiveMePage;

  beforeEach(() => {
    page = new GiveMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
