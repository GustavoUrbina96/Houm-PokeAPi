export const capitalizeStr = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const remainStr = str.substring(1);
  return firstLetter + remainStr;
};
