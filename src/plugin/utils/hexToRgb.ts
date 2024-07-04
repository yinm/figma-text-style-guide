export function hexToRgb(HexadecimalColorCode: string) {
  function hexToRange0To1(hex: string) {
    if (!/^[0-9a-fA-F]{2}$/.test(hex)) {
      throw new Error(`"${hex}" is not a valid hex code`);
    }

    return parseInt(hex, 16) / 255;
  }

  if (HexadecimalColorCode.length !== 6) {
    throw new Error(
      `"HexadecimalColorCode" must be 6 characters (e.g. f0f0f0), but "${HexadecimalColorCode}"`,
    );
  }

  const r = HexadecimalColorCode.slice(0, 2);
  const g = HexadecimalColorCode.slice(2, 4);
  const b = HexadecimalColorCode.slice(4, 6);

  return {
    r: hexToRange0To1(r),
    g: hexToRange0To1(g),
    b: hexToRange0To1(b),
  };
}
