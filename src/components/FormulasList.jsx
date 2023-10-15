import { acceptFormula } from "../utils/acceptFormula";
export function FormulasList(props) {
  return (
    <div>
      <select id="formulasList">
        <option value="forceGravity">Сила тяжести</option>
        <option value="voltage">Вольтаж</option>
        <option value="speed">Скорость</option>
      </select>
      <button
        onClick={() => {
          acceptFormula(props);
        }}
      >
        Подтвердить выбор
      </button>
    </div>
  );
}
