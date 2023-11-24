import { acceptFormula } from "../utils/acceptFormula";
export function FormulasList(props) {
  return (
    <div>
      <select id="formulasList">
        <option value="voltageFormula">Вольтаж</option>
        <option value="forceGravityFormula">Сила тяжести</option>
        <option value="speedFormula">Скорость</option>
      </select>
      <button
        onClick={() => {
          props.setRenderVariables("");
          acceptFormula(props);
        }}
      >
        Ок
      </button>
    </div>
  );
}
