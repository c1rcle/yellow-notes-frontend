import tinycolor from 'tinycolor2';

export const getTextColor = data => {
  const toObject = data => {
    const color = tinycolor(data);
    const rgb = color.toRgb();
    const hex = color.toHex();
    const transparent = hex === '000000' && rgb.a === 0;

    return {
      hex: transparent ? 'transparent' : `#${hex}`,
      rgb
    };
  };

  if (!data) {
    return 'text-dark';
  }
  const col = toObject(data);
  if (col.hex === 'transparent') {
    return 'text-light';
  }
  const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? 'text-dark' : 'text-light';
};

export const getFormColor = data => {
  const color = tinycolor(data);
  color.brighten();
  return `#${color.toHex()}`;
};
