const rules = require('../checkEligibility/rules');

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
  inelegibleClass: {
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.ineligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  inelegibleBillingModel: {
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.ineligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  inelegibleMonoConsumption: {
    tipoDeConexao: 'monofasico',
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption.monofasico, -1),
  },
  inelegibleBiConsumption: {
    tipoDeConexao: 'bifasico',
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption.bifasico, -1),
  },
  inelegibleTriConsumption: {
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
    economiaAnualDeCO2: '404.21',
  },
  inelegibleClass: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.class],
  },
  inelegibleBillingModel: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.billingModel],
  },
  inelegibleMonoConsumption: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.consumption],
  },
  inelegibleBiConsumption: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.consumption],
  },
  inelegibleTriConsumption: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.consumption],
  },
};

module.exports = { input, output };
