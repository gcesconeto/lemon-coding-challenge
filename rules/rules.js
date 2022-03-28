module.exports = {
  eligibleClasses: ['residencial', 'industrial', 'comercial'],
  eligibleBillingModels: ['branca', 'convencional'],
  minConsumption: {
    monofasico: 400,
    bifasico: 500,
    trifasico: 750,
  },
  CO2PerKWh: 0.084,
  inelegMsgs: {
    class: 'Classe de consumo não atendida',
    billingModel: 'Modalidade tarifária não aceita',
    consumption: 'Consumo para tipo de conexão insuficiente',
  },
};
