
export class Somador {
  public calcular(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
}

export class Subtrador {
  public calcular(numero1: number, numero2: number): number {
    return numero1 - numero2;
  }
}

export class Multiplicador {
  public calcular(numero1: number, numero2: number): number {
    return numero1 * numero2;
  }
}

export class Divisor {
  public calcular(numero1: number, numero2: number): number {
    if (numero2 === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return numero1 / numero2;
  }
}