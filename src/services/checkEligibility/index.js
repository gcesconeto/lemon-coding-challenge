function average(array) {
  const avg = array.reduce((sum, item) => sum + item);
  return avg / array.length;
}

class CheckEligibility {
  #report;

  constructor(data) {
    this.data = data;
  }

  #addReason(reason) {
    if (this.#report.razoesDeInelegibilidade) {
      this.#report.razoesDeInelegibilidade.push(reason);
    } else {
      this.#report.razoesDeInelegibilidade = [reason];
    }
  }

  #checkClass(input) {
    if (!this.data.eligibleClasses.includes(input.classeDeConsumo)) {
      this.#report.elegivel = false;
      this.#addReason(this.data.reasons.class);
    }
  }

  #checkBillingModel(input) {
    if (!this.data.eligibleBillingModels.includes(input.modalidadeTarifaria)) {
      this.#report.elegivel = false;
      this.#addReason(this.data.reasons.billingModel);
    }
  }

  #checkConsumption(input) {
    if (average(input.historicoDeConsumo) < this.data.minConsumption[input.tipoDeConexao]) {
      this.#report.elegivel = false;
      this.#addReason(this.data.reasons.consumption);
    }
  }

  #calculateCO2Savings(input) {
    const savings = average(input.historicoDeConsumo) * 12 * this.data.CO2PerKWh;
    this.#report.economiaAnualDeCO2 = savings;
  }

  check(input) {
    this.#report = { elegivel: true };
    this.#checkClass(input);
    this.#checkBillingModel(input);
    this.#checkConsumption(input);
    if (this.#report.elegivel) {
      this.#calculateCO2Savings(input);
    }
    return this.#report;
  }
}

module.exports = CheckEligibility;
