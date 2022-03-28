function average(array) { // helper no mesmo arquivo da classe?
  const avg = array.reduce((sum, item) => sum + item);
  return avg / array.length;
}

class ClientValidator { // é um uso digno pra classe? ou uma função resolve?
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

  #checkClass(data) {
    if (!this.rules.eligibleClasses.includes(data.classeDeConsumo)) {
      this.#report.elegivel = false;
      this.#addMotive(this.rules.inelegMsgs.class);
    }
  }

  #checkBillingModel(data) {
    if (!this.rules.eligibleBillingModels.includes(data.modalidadeTarifaria)) {
      this.#report.elegivel = false;
      this.#addMotive(this.rules.inelegMsgs.billingModel);
    }
  }

  #checkConsumption(data) {
    if (average(data.historicoDeConsumo) < this.rules.minConsumption[data.tipoDeConexao]) {
      this.#report.elegivel = false;
      this.#addMotive(this.rules.inelegMsgs.consumption);
    }
  }

  #calculateCO2Savings(data) {
    const savings = average(data.historicoDeConsumo) * 12 * this.rules.CO2PerKWh;
    this.#report.economiaAnualDeCO2 = savings.toFixed(2);
  }

  validate(data) {
    // mandar o input inteiro pra cada metodo ou ja depenar antes?
    this.#checkClass(data);
    this.#checkBillingModel(data);
    this.#checkConsumption(data);
    if (this.#report.elegivel) {
      this.#calculateCO2Savings(data);
    }
    return this.#report;
  }
}

module.exports = ClientValidator;
