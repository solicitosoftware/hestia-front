export const formatPrice = (val: number) => {
  try {
    let value: string = "";
    if (val === 0) value += `$ ${val}`;
    else if (val > 0) {
      const valueStr = `$ ${val.toFixed(0)}`;
      value = valueStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return value;
  } catch (error) {
    console.error(error);
  }
};
