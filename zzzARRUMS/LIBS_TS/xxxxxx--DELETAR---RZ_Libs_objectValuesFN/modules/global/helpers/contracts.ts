export class InvalidArgumentsError extends Error {
  constructor(msg: string, nameCustomClassError: string) {
    super(msg);
    this.name = nameCustomClassError;
  }
}
