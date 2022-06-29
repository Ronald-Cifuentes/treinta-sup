export const formatt = (value: number): string => {
  const valueAux = String(value).replace(/\D/g, '');
  const inputValue = valueAux.replace('.', '').split('').reverse().join(''); // reverse
  let newValue = '';
  for (let i = 0; i < inputValue.length; i++) {
    if (i % 3 === 0) {
      newValue += '.';
    }
    newValue += inputValue[i];
  }
  return `$ ${newValue.split('').reverse().join('').slice(0, -1)}`;
};
