function vreme(a, b) {
  if (a >= 9 && a < 17) {
    return "dosli ste tokom radnog vremena";
  } else if (a < 9 && a >= 17) {
    return "niste dosli tokom radnog vremena ";
  }
}
console.log(vreme(12, 53));
