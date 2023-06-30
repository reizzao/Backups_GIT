/* Auxiliares para Generator ************************** */
const HASH_STRING = Date.now().toString();
const HASH_NUMBER = Date.now();
const MAKE_DATE = new Date(Date.now());

/* *************************************************** */

export const generate = {
  generateID(): string {
    return HASH_STRING;
  },

  generateIDB(): string {
    return HASH_STRING;
  },

  generateCodigo(): string {
    return HASH_STRING;
  },

  generateDateCreateAt(): Date {
    return MAKE_DATE;
  },

  generateDateUpdateAt(): Date {
    return MAKE_DATE;
  },

  generateRemovedAt(): Date {
    return MAKE_DATE;
  },

  generateLoggerAt(): Date {
    return MAKE_DATE;
  },

  generateIncrementNumber(): number {
    return HASH_NUMBER;
  },
};
