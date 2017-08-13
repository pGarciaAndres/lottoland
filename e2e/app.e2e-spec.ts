import { LottolandPage } from './app.po';

describe('lottoland App', () => {
  let page: LottolandPage;

  beforeEach(() => {
    page = new LottolandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
