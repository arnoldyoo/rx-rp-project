import { RxRpProjectPage } from './app.po';

describe('rx-rp-project App', () => {
  let page: RxRpProjectPage;

  beforeEach(() => {
    page = new RxRpProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
