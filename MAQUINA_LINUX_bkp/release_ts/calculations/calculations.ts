// deno-lint-ignore-file
// deno-lint-ignore-file no-unused-vars

export const calculations = {
  sum: (x: number, y: number): number => {
    return x + y;
  },

  discountPercentage: async (
    input: number,
    percentage: number = 0,
  ): Promise<number> => {
    const formula = await input - ((input * percentage) / 100);
    return await formula;
  },
};

// console.log(soma(10, 10));

/*
mergear ..
*/
