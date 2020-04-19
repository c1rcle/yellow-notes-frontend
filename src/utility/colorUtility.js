import tinycolor from 'tinycolor2';

export const getVariant = data => {
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
    return 'dark';
  }
  const col = toObject(data);
  if (col.hex === 'transparent') {
    return 'light';
  }
  const yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? 'dark' : 'light';
};

export const getBlackOrWhiteColor = data => {
  return getVariant(data) === 'dark' ? '#000000' : '#ffffff';
};

export const getFormColor = data => {
  if (!data) {
    return '#ffc785';
  }

  const color = tinycolor(data);
  color.brighten();
  return `#${color.toHex()}`;
};
