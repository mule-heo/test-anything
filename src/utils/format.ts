const phoneNumberFormat = (number: number | string) => {
  if (isNaN(+number)) return "";
  else {
    if (typeof number === "number") number = number.toString();
    const numberArr = number.split("");
    if (numberArr.length > 3) numberArr.splice(3, 0, "-");
    if (numberArr.length > 8) numberArr.splice(8, 0, "-");
    return numberArr.join("");
  }
};

export { phoneNumberFormat };
