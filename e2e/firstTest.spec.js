const { PAUSE } = require("redux-persist");

describe('Example', () => {
  beforeEach(async () => {
   await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Log In'))).toBeVisible();
    await element(by.text('Continue as Guest')).tap();
    //await waitFor(element(by.label('Top_Rated_idHorizontal'))).toBeVisible().whileElement(by.id('browseSectionListId')).scroll(50, 'down');
    await waitFor(element(by.label('asdfasd'))).toBeVisible().whileElement(by.id('Trending_Daily_idHorizontal')).scroll(50, 'right');
    
    
  });

  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
