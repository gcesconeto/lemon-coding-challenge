const CheckEligibility = require('../services/checkEligibility/CheckEligibility');
const rules = require('../services/checkEligibility/rules');
const { input, output } = require('./checkEligibilityData');

const checkEligibility = new CheckEligibility(rules);

describe('Test class clientValidator', () => {
  it('Should return true + CO2 savings', () => {
    expect(checkEligibility.check(input.eligible))
      .toEqual(output.eligible);
  });

  it('Should return false + reason when class is ineligible', () => {
    expect(checkEligibility.check(input.ineligibleClass))
      .toEqual(output.ineligibleClass);
  });

  it('Should return false + reason when billing model is ineligible', () => {
    expect(checkEligibility.check(input.ineligibleBillingModel))
      .toEqual(output.ineligibleBillingModel);
  });

  it('Should return false + reason when monofasic consumption is too low', () => {
    expect(checkEligibility.check(input.ineligibleMonoConsumption))
      .toEqual(output.ineligibleMonoConsumption);
  });

  it('Should return false + reason when bifasic consumption is too low', () => {
    expect(checkEligibility.check(input.ineligibleBiConsumption))
      .toEqual(output.ineligibleBiConsumption);
  });

  it('Should return false + reason when trifasic consumption is too low', () => {
    expect(checkEligibility.check(input.ineligibleTriConsumption))
      .toEqual(output.ineligibleTriConsumption);
  });
});
