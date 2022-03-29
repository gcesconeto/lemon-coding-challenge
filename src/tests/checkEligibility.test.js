const CheckEligibility = require('../checkEligibility');
const rules = require('../checkEligibility/rules');
const { input, output } = require('./testData');

const checkEligibility = new CheckEligibility(rules);

describe('Test class clientValidator', () => {
  it('Should return true + CO2 savings', () => {
    expect(checkEligibility.check(input.eligible))
      .toEqual(output.eligible);
  });

  it('Should return false + reason when class is ineligible', () => {
    expect(checkEligibility.check(input.inelegibleClass))
      .toEqual(output.inelegibleClass);
  });

  it('Should return false + reason when billing model is ineligible', () => {
    expect(checkEligibility.check(input.inelegibleBillingModel))
      .toEqual(output.inelegibleBillingModel);
  });

  it('Should return false + reason when monofasic consumption is too low', () => {
    expect(checkEligibility.check(input.inelegibleMonoConsumption))
      .toEqual(output.inelegibleMonoConsumption);
  });

  it('Should return false + reason when bifasic consumption is too low', () => {
    expect(checkEligibility.check(input.inelegibleBiConsumption))
      .toEqual(output.inelegibleBiConsumption);
  });

  it('Should return false + reason when trifasic consumption is too low', () => {
    expect(checkEligibility.check(input.inelegibleTriConsumption))
      .toEqual(output.inelegibleTriConsumption);
  });
});
