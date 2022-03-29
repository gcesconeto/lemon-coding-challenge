const rules = require('../services/checkEligibility/rules');

function populateConsumption(minConsumption, offset) {
  return new Array(12).fill(minConsumption + offset);
}

const input = {
  eligible: {
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligibleClass: {
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.ineligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligibleBillingModel: {
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.ineligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligibleMonoConsumption: {
    tipoDeConexao: 'monofasico',
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption.monofasico, -1),
  },
  ineligibleBiConsumption: {
    tipoDeConexao: 'bifasico',
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption.bifasico, -1),
  },
  ineligibleTriConsumption: {
    tipoDeConexao: 'trifasico',
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption.trifasico, -1),
  },
};

const output = {
  eligible: {
    elegivel: true,
    economiaAnualDeCO2: 404.208,
  },
  ineligibleClass: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.class],
  },
  ineligibleBillingModel: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.billingModel],
  },
  ineligibleMonoConsumption: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.consumption],
  },
  ineligibleBiConsumption: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.consumption],
  },
  ineligibleTriConsumption: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.consumption],
  },
};

module.exports = { input, output };
