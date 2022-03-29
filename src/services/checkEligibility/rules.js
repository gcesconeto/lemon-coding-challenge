module.exports = {
  eligibleConnectionTypes: ['monofasico', 'bifasico', 'trifasico'],
  ineligibleConnectionTypes: [],
  eligibleClasses: ['residencial', 'industrial', 'comercial'],
  ineligibleClasses: ['rural', 'poderPublico'],
  eligibleBillingModels: ['branca', 'convencional'],
  ineligibleBillingModels: ['azul', 'verde'],
  minConsumption: {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  },
  CO2PerKWh: 0.084,
  reasons: {
    class: 'Classe de consumo não aceita',
    billingModel: 'Modalidade tarifária não aceita',
    consumption: 'Consumo muito baixo para tipo de conexão',
  },
};
