function average(array) { // helper no mesmo arquivo da classe?
  const avg = array.reduce((sum, item) => sum + item);
  return avg / array.length;
}

export default class ClientValidator { // é um uso digno pra classe? ou uma função resolve?
  #report;

  constructor(rules) {
    this.rules = rules;
    this.#report = { elegivel: true };
  }

  #addMotive(motive) {
    if (this.#report.razoesInelegibilidade) {
      this.#report.razoesInelegibilidade.push(motive);
    } else {
      this.#report.razoesInelegibilidade = [motive];
    }
  }

  #checkClass(input) {
    if (!this.rules.eligibleClasses.includes(input.classeDeConsumo)) {
      this.#report.elegivel = false;
      this.#addMotive(this.rules.inelegMsgs.class);
    }
  }

  #checkBillingModel(input) {
    if (!this.rules.eligibleBillingModels.includes(input.modalidadeTarifaria)) {
      this.#report.elegivel = false;
      this.#addMotive(this.rules.inelegMsgs.billingModel);
    }
  }

  #checkConsumption(input) {
    if (average(input.historicoDeConsumo) < this.rules.minConsumption[input.tipoDeConexao]) {
      this.#report.elegivel = false;
      this.#addMotive(this.rules.inelegMsgs.consumption);
    }
  }

  #calculateCO2Savings(input) {
    const savings = average(input.historicoDeConsumo) * 12 * this.rules.CO2PerKWh;
    this.#report.economiaAnualDeCO2 = savings.toFixed(2);
  }

  validate(input) {
    // mandar o input inteiro pra cada metodo ou ja depenar antes?
    this.#checkClass(input);
    this.#checkBillingModel(input);
    this.#checkConsumption(input);
    if (this.#report.elegivel) {
      this.#calculateCO2Savings(input);
    }
    return this.#report;
  }
}
