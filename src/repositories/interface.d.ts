interface Repository {
  getAll(): void;
  getById(id: string): void;
  create(values: unknown): void;
  update(id: string, values: unknown): void;
  delete(id: string): void;
}

export default Repository;
