import * as formulas from "../components/Formulas";
export function acceptFormula(props) {
  props.setAnswer("");
  const select = document.getElementById("formulasList")?.value;
  props.setRenderFunction(formulas[select](props));
  return 0;
}
