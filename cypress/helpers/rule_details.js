
export const clickCreateRuleButton = () => cy.get("#createRuleButton").click();

export const clickAddRowButton = () => cy.get("#addrow").click();

export const enterRuleName = name => cy.get("#rule_name").type(name);

export const enterCriterionName = name =>
  cy
    .get("[name^=name]")
    .last()
    .type(name);

export const enterMultiplier = value =>
  cy
    .get("[name^=multiplier]")
    .last()
    .select(value);

export const enterNote = note =>
  cy
    .get("[name^=note]")
    .last()
    .type(note);

export const submitRule = () => cy.get("[data-test=submit-button]").click()
  .then(() => cy.location("pathname").should("eq", "/rules"))

export const deleteRules = ruleNameToDelete =>
  cy.get('li').each(rule => cy.wrap(rule).invoke('text')
    .then(ruleName => {
      if (ruleName.includes(ruleNameToDelete)) {
        cy.contains(ruleName).parent().find('[class~=delete-rule-button]').click()
      }
    }))



export const deleteLastCriterion = () =>
  cy
    .get("[value=Delete]")
    .last().click();