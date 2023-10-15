import * as calculations from "../utils/calculations";
export function voltage(props) {
  return (
    <div id="voltage">
      <input type="number" placeholder="Сопротивление Ом" />
      <select id="Ohm">
        <option value="0">Ом</option>
        <option value="-3">мОм</option>
        <option value="3">КОм</option>
        <option value="6">МОм</option>
      </select>
      *
      <input type="number" placeholder="Сила тока А" />
      <select id="A">
        <option value="0">A</option>
        <option value="-6">микроA</option>
        <option value="-3">мA</option>
        <option value="3">КA</option>
        <option value="6">МA</option>
      </select>
      <button
        onClick={() => {
          calculations.calcVoltage(props);
        }}
      >
        Посчитать
      </button>
    </div>
  );
}
export function forceGravity(props) {
  return (
    <div id="forceGravity">
      <input type="number" placeholder="Масса Кг" />
      <select id="KG">
        <option value="0">Килограмм</option>
        <option value="-3">Грамм</option>
        <option value="3">Тонна</option>
      </select>
      * g
      <button
        onClick={() => {
          calculations.calcForceGravity(props);
        }}
      >
        Посчитать
      </button>
    </div>
  );
}
