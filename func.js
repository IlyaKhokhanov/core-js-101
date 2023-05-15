function getRectangleString(width, height) {
  const repeater = (val, n) => val.repeat(n - 2);
  return `┌${repeater('─', width)}┐\n${repeater(
    `│${repeater(' ', width)}│\n`,
    height,
  )}└${repeater('─', width)}┘\n`;
}
