export function voltage() {
  return (
    <div>
      <input type="number" placeholder="Сопротивление Ом" />
      <select id="Ohm">
        <option value="mOm">мОм</option>
        <option value="Om">Ом</option>
        <option value="KOm">КОм</option>
        <option value="MOm">МОм</option>
      </select>
      *
      <input type="number" placeholder="Сила тока А" />
      <select id="A">
        <option value="micA">микроA</option>
        <option value="mA">мA</option>
        <option value="A">A</option>
        <option value="KA">КA</option>
        <option value="MA">МA</option>
      </select>
      <button>Посчитать</button>
    </div>
  );
}
export function forceGravity() {
  return (
    <div>
      <input type="number" placeholder="Масса Кг" />
      <select id="Ohm">
        <option value="mOm">мОм</option>
        <option value="Om">Ом</option>
        <option value="KOm">КОм</option>
        <option value="MOm">МОм</option>
      </select>
      * g<button>Посчитать</button>
    </div>
  );
}
