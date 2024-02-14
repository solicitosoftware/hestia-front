export const formatPrice = (val: number) => {
  try {
    if (val === 0) `$ ${val}`;
    else val > 0;
    const valueStr = `$ ${val.toFixed(0)}`;
    const value = valueStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return value;
  } catch (error) {
    console.error(error);
  }
};
