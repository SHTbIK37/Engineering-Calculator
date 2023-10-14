import * as formulas from "../components/Formulas";
export function acceptFormula(props) {
  const select = document.getElementById("formulasList")?.value;
  props.setRenderFunction(formulas[select]);
  return 0;
}
