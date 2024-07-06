import { describe, expect, it } from "vitest";
import { hexToRgb } from "./hexToRgb";

describe("hexToRgb", () => {
  it("convert valid hexadecimal color code to rgb object", () => {
    expect(hexToRgb("737373")).toStrictEqual({
      b: 0.45098039215686275,
      g: 0.45098039215686275,
      r: 0.45098039215686275,
    });
  });

  it("throws an error if hexadecimal color code is not 6 characters", () => {
    expect(() => hexToRgb("#737373")).toThrowError(
      `"HexadecimalColorCode" must be 6 characters (e.g. f0f0f0), but "#737373"`,
    );
  });

  it("throws an error if hexadecimal color code has invalid characters", () => {
    expect(() => hexToRgb("f0zzf0")).toThrowError(
      `"zz" is not a valid hex code`,
    );
  });
});
