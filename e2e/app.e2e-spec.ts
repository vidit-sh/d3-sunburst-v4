import { D3SunburstV4Page } from './app.po';

describe('d3-sunburst-v4 App', () => {
  let page: D3SunburstV4Page;

  beforeEach(() => {
    page = new D3SunburstV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
