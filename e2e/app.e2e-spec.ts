import { DatabindingAppPage } from './app.po';

describe('databinding-app App', function() {
  let page: DatabindingAppPage;

  beforeEach(() => {
    page = new DatabindingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
