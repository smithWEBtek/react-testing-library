Feature('My Second Test');

Scenario('test something else', ({ I }) => {
  I.amOnPage('https://smithpiano.com/gigs.html');
  // pause();
  I.click('//a[contains(., "Tower Hill Tavern, Laconia, NH")]');
  I.see("Tower Hill Tavern");
});
