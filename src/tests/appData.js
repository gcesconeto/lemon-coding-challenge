const rules = require('../services/checkEligibility/rules');

function populateConsumption(minConsumption, offset) {
  return new Array(12).fill(minConsumption + offset);
}

const input = {
  eligible: {
    numeroDoDocumento: '140417377067',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligible: {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.ineligibleClasses[0],
    modalidadeTarifaria: rules.ineligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], -1),
  },
  wrongFormat: {
    numeroDoDocumento: '14041737706',
    tipoDeConexao: rules.ineligibleConnectionTypes[0],
    classeDeConsumo: rules.ineligibleClasses[0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], -1),
  },
};

const output = {
  eligible: {
    elegivel: true,
    economiaAnualDeCO2: 404.208,
  },
  ineligible: {
    elegivel: false,
    razoesDeInelegibilidade: [
      rules.reasons.class,
      rules.reasons.billingModel,
      rules.reasons.consumption,
    ],
  },
};

module.exports = { input, output };
