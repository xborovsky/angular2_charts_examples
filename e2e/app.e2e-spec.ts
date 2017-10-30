import { Angular2ChartsPage } from './app.po';

describe('angular2-charts App', function() {
  let page: Angular2ChartsPage;

  beforeEach(() => {
    page = new Angular2ChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
