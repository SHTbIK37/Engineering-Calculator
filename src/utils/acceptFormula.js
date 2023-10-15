import * as formulas from "../components/Formulas";
export function acceptFormula(props) {
  props.setAnswer("");
  const select = document.getElementById("formulasList")?.value;
  const calcState = { answer: props.answer, setAnswer: props.setAnswer };
  props.setRenderFunction(formulas[select](calcState));
  return 0;
}
