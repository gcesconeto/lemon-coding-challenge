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
    cpf: 'CPF inválido',
    cnpj: 'CNPJ inválido',
    class: 'Classe de consumo não aceita',
    billingModel: 'Modalidade tarifária não aceita',
    consumption: 'Consumo muito baixo para tipo de conexão',
    subclassNotInClass: 'Subclasse de consumo não pertence a classe de consumo',
    subclassInvalid: 'Subclasse de consumo não aceita',
  },
  eligibleSubClasses: {
    comercial: [
      'administracaoCondominial',
      'comercial',
      'servicosDeTelecomunicacao',
      'servicosDeTransporte',
    ],
    industrial: ['industrial'],
    residencial: ['residencial'],
  },
  ineligibleSubClasses: {
    comercial: ['templosReligiosos'],
    industrial: [],
    residencial: ['baixaRenda'],
  },
};
