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
  ineligibleClass: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.ineligibleClasses[0],
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
  subClassNotInClass: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[1]][0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligibleBillingModel: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: rules.eligibleConnectionTypes[0],
    classeDeConsumo: rules.eligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[0]][0],
    modalidadeTarifaria: rules.ineligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption[rules.eligibleConnectionTypes[0]], 1),
  },
  ineligibleMonoConsumption: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: 'monofasico',
    classeDeConsumo: rules.eligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[0]][0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption.monofasico, -1),
  },
  ineligibleBiConsumption: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: 'bifasico',
    classeDeConsumo: rules.eligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[0]][0],
    modalidadeTarifaria: rules.eligibleBillingModels[0],
    historicoDeConsumo:
      populateConsumption(rules.minConsumption.bifasico, -1),
  },
  ineligibleTriConsumption: {
    numeroDoDocumento: '58403919000106',
    tipoDeConexao: 'trifasico',
    classeDeConsumo: rules.eligibleClasses[0],
    subclasseDeConsumo: rules.eligibleSubClasses[rules.eligibleClasses[0]][0],
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
  ineligibleDocument: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.cnpj],
  },
  ineligibleClass: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.class],
  },
  ineligibleSubClass: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.subclassInvalid],
  },
  subClassNotInClass: {
    elegivel: false,
    razoesDeInelegibilidade: [rules.reasons.subclassNotInClass],
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
