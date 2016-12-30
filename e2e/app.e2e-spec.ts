import { AngularMultiBuildSamplePage } from './app.po';

describe('angular-multi-build-sample App', function() {
  let page: AngularMultiBuildSamplePage;

  beforeEach(() => {
    page = new AngularMultiBuildSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
