import { RangleioLazyLoadingPage } from './app.po';

describe('rangleio-lazy-loading App', () => {
  let page: RangleioLazyLoadingPage;

  beforeEach(() => {
    page = new RangleioLazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
