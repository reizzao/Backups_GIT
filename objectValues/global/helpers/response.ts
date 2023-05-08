type BadArgumentsFN = (e: Error) => void;

export const badArguments: BadArgumentsFN = (err) => {
  throw err;
};
