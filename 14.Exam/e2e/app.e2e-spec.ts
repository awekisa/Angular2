import { GeneralTemplatePage } from './app.po';

describe('general-template App', () => {
  let page: GeneralTemplatePage;

  beforeEach(() => {
    page = new GeneralTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
