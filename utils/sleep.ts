export const waitSleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
