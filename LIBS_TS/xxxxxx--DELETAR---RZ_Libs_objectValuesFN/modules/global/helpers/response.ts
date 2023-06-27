export type ResponseBadArguments = void
type BadArgumentsFN = (e: Error) => ResponseBadArguments;

export const badArguments: BadArgumentsFN = (err) => {
  throw err;
};
