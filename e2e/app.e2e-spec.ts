import { XapiDemoPage } from './app.po';

describe('xapi-demo App', () => {
  let page: XapiDemoPage;

  beforeEach(() => {
    page = new XapiDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
