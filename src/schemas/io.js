const {
  tiposDeConexao,
  classesDeConsumo,
  subclassesDeConsumo,
  modalidadesTarifarias,
  cpf,
  cnpj,
} = require('./types');

const enumOf = (values) => ({
  type: typeof values[0],
  enum: values,
  example: values[0],
});

const inputSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'numeroDoDocumento',
    'tipoDeConexao',
    'classeDeConsumo',
    'subclasseDeConsumo',
    'modalidadeTarifaria',
    'historicoDeConsumo',
  ],
  properties: {
    numeroDoDocumento: { oneOf: [cpf, cnpj] },
    tipoDeConexao: enumOf(tiposDeConexao),
    classeDeConsumo: enumOf(classesDeConsumo),
    modalidadeTarifaria: enumOf(modalidadesTarifarias),
    subclasseDeConsumo: enumOf(subclassesDeConsumo),
    historicoDeConsumo: { // em kWh
      type: 'array',
      minItems: 3,
      maxItems: 12,
      items: {
        type: 'integer',
        minimum: 0,
        maximum: 9999,
      },
    },
  },
};

const outputSchema = {
  oneOf: [
    {
      type: 'object',
      additionalProperties: false,
      required: ['elegivel', 'economiaAnualDeCO2'],
      properties: {
        elegivel: enumOf([true]), // always true
        economiaAnualDeCO2: { type: 'number', minimum: 0 },
      },
    },
    {
      type: 'object',
      additionalProperties: false,
      required: ['elegivel', 'razoesDeInelegibilidade'],
      properties: {
        elegivel: enumOf([false]), // always false
        razoesDeInelegibilidade: {
          type: 'array',
          uniqueItems: true,
          items: {
            type: 'string',
            enum: [
              'Classe de consumo não aceita',
              'Modalidade tarifária não aceita',
              'Consumo muito baixo para tipo de conexão',
              'CPF inválido',
              'CNPJ inválido',
              'Subclasse de consumo não pertence a classe de consumo',
              'Subclasse de consumo não aceita',
            ],
          },
        },
      },
    },
  ],
};

module.exports = {
  inputSchema,
  outputSchema,
};
