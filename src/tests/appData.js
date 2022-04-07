const rules = require('../services/checkEligibility/rules');

function populateConsumption(minConsumption, offset) {
  return new Array(12).fill(minConsumption + offset);
}

const input = {
  eligible: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[0]][0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligibleDocument: {
    numeroDoDocumento: '58403919000107',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[0]][0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligibleSubClass: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    subclasseDeConsumo: rules.ineligibleSubClasses[rules.eligibleClasses[0]][0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligible: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.ineligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[0]][0],
    modalidadeTarifaria: rules.ineligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], -1),
  },
  wrongFormat: {
    numeroDoDocumento: '5840391900010',
    tipoDeConexao: rules.ineligibleConnectionTypes[0],
    classeDeConsumo: rules.ineligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[0]][0],
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
  ineligibleDocument: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.cnpj],
  },
  ineligibleSubClass: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.subclassInvalid],
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
