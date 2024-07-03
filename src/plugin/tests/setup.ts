import { createFigma } from "figma-api-stub";
import { afterAll, beforeAll } from "vitest";

beforeAll(() => {
  // @ts-expect-error for Figma
  globalThis.figma = createFigma({ simulateErrors: true });
});

afterAll(() => {
  // @ts-expect-error for Figma
  delete globalThis.figma;
});
