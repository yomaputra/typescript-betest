import bcrypt from "bcrypt";

class Hash {
  #saltRounds: number;

  constructor(rounds = 10) {
    this.#saltRounds = rounds;
  }

  make(plainText: string): string {
    const hashed = bcrypt.hashSync(plainText, this.#saltRounds);

    return hashed;
  }

  check(plainText: string, hashText: string): boolean {
    const result = bcrypt.compareSync(plainText, hashText);

    return result;
  }
}

export default Hash;
