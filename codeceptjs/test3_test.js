Feature("My 3rd test");

Scenario('test projects link', ({ I }) => {
  I.amOnPage('https://smithwebtek.com');
  I.click("projects");
  I.see("voter-preference");

  I.click("voter-preference");
  I.click("voter-preference")[1];
  I.see("undecided")
});
