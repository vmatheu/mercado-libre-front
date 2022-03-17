const onlyHaveNumber = (search) => /^([0-9]){1,}$/.test(search);
const haveLetterAndNumber = (search) => /^([0-9,a-z,A-Z,ñ\s]){4,}$/.test(search);
export const validateSearch = (search) =>
  haveLetterAndNumber(search) || onlyHaveNumber(search);
