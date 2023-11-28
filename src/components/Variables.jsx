import * as calculations from "../utils/calculations";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import * as MathJaxChars from "./MathJaxText";

export function VariablesU(props) {
  if (props.letter === "VariablesU") {
    return (
      <div id="Operations">
        <MathJaxChars.RenderR />
        <input type="number" placeholder="Сопротивление Ом" />
        <select id="Ohm">
          <option value="0">Ом</option>
          <option value="-3">мОм</option>
          <option value="3">КОм</option>
          <option value="6">МОм</option>
        </select>
        <br />
        *
        <br />
        <MathJaxChars.RenderI />
        <input type="number" placeholder="Сила тока А" />
        <select id="A">
          <option value="0">A</option>
          <option value="-6">мкA</option>
          <option value="-3">мA</option>
          <option value="3">КA</option>
          <option value="6">МA</option>
        </select>
        <button
          onClick={() => {
            calculations.calcVoltage(props);
          }}
        >
          Ок
        </button>
      </div>
    );
  }
  if (props.letter === "VariablesR") {
    return (
      <div id="Operations">
        <MathJaxChars.RenderU />
        <input type="number" placeholder="Напряжение Вольт" />
        <select id="U">
          <option value="0">Вольт</option>
          <option value="-3">мВольт</option>
          <option value="3">КВольт</option>
          <option value="6">МВольт</option>
        </select>
        <br />
        /
        <br />
        <MathJaxChars.RenderI />
        <input type="number" placeholder="Сила тока А" />
        <select id="A">
          <option value="0">A</option>
          <option value="-6">мкA</option>
          <option value="-3">мA</option>
          <option value="3">КA</option>
          <option value="6">МA</option>
        </select>
        <button
          onClick={() => {
            calculations.calcOhm(props);
          }}
        >
          Ок
        </button>
      </div>
    );
  }
  if (props.letter === "VariablesI") {
    return (
      <div id="Operations">
        <MathJaxChars.RenderU />
        <input type="number" placeholder="Напряжение Вольт" />
        <select id="U">
          <option value="0">Вольт</option>
          <option value="-3">мВольт</option>
          <option value="3">КВольт</option>
          <option value="6">МВольт</option>
        </select>
        <br />
        /
        <br />
        <MathJaxChars.RenderR />
        <input type="number" placeholder="Сопротивление Ом" />
        <select id="Ohm">
          <option value="0">Ом</option>
          <option value="-3">мОм</option>
          <option value="3">КОм</option>
          <option value="6">МОм</option>
        </select>
        <button
          onClick={() => {
            calculations.calcI(props);
          }}
        >
          Ок
        </button>
      </div>
    );
  }
}
export function VariablesF(props) {
  if (props.letter === "VariablesF") {
    return (
      <div id="Operations">
        <MathJaxChars.Renderm />
        <input type="number" placeholder="Масса Кг" />
        <select id="KG">
          <option value="0">Килограмм</option>
          <option value="-3">Грамм</option>
          <option value="3">Тонна</option>
        </select>
        <br />
        * g
        <br />
        <button
          onClick={() => {
            calculations.calcForceGravity(props);
          }}
        >
          Ок
        </button>
      </div>
    );
  }
  if (props.letter === "VariablesM") {
    return (
      <div id="Operations">
        <MathJaxChars.RenderF />
        <input type="number" placeholder="Сила тяжести Н" />
        <select id="N">
          <option value="0">Ньютон</option>
          <option value="-3">мНьютон</option>
          <option value="3">КНьютон</option>
        </select>
        <br />/ g <br />
        <button
          onClick={() => {
            calculations.calcWeightG(props);
          }}
        >
          Ок
        </button>
      </div>
    );
  }
}
export function Variablesv(props) {
  console.log(props.letter);
  if (props.letter === "Variablesv") {
    return (
      <div id="Operations">
        <MathJaxChars.RenderS />
        <input type="number" placeholder="Расстояние Метры" />
        <select id="S">
          <option value="0">Метры</option>
          <option value="-3">Миллиметры</option>
          <option value="-2">Сантиметры</option>
          <option value="3">Километры</option>
        </select>
        <br />
        /
        <br />
        <MathJaxChars.Rendert />
        <input type="number" placeholder="Время Секунды" />
        <select id="Time">
          <option value="0">Секунды</option>
          <option value="-3">Милисекунды</option>
          <option value="1">Минуты</option>
          <option value="2">Час</option>
        </select>
        <button
          onClick={() => {
            calculations.calcSpeed(props);
          }}
        >
          Ок
        </button>
      </div>
    );
  }
  if (props.letter === "VariablesS") {
    return (
      <div id="Operations">
        <MathJaxChars.Renderv />
        <input type="number" placeholder="Скорость м/с" />
        <select id="v">
          <option value="0">м/c</option>
          <option value="3">Км/ч</option>
        </select>
        <br />
        *
        <br />
        <MathJaxChars.Rendert />
        <input type="number" placeholder="Время Секунды" />
        <select id="Time">
          <option value="0">Секунды</option>
          <option value="-3">Милисекунды</option>
          <option value="1">Минуты</option>
          <option value="2">Час</option>
        </select>
        <button
          onClick={() => {
            calculations.calcS(props);
          }}
        >
          Ок
        </button>
      </div>
    );
  }
  if (props.letter === "Variablest") {
    return (
      <div id="Operations">
        <MathJaxChars.RenderS />
        <input type="number" placeholder="Расстояние Метры" />
        <select id="S">
          <option value="0">Метры</option>
          <option value="-3">Миллиметры</option>
          <option value="-2">Сантиметры</option>
          <option value="3">Километры</option>
        </select>
        <br />
        /
        <br />
        <MathJaxChars.Renderv />
        <input type="number" placeholder="Скорость м/с" />
        <select id="v">
          <option value="0">м/c</option>
          <option value="3">Км/ч</option>
        </select>
        <button
          onClick={() => {
            calculations.calct(props);
          }}
        >
          Ок
        </button>
      </div>
    );
  }
}
