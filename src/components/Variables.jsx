import * as calculations from "../utils/calculations";
import { MathJax, MathJaxContext } from "better-react-mathjax";
const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [["$", "$"]],
    displayMath: [["\\(", "\\)"]],
  },
};
export function VariablesU(props) {
  if (props.letter === "VariablesU") {
    return (
      <div id="Operations">
        <MathJaxContext config={config}>
          <MathJax>{`\\(R\\) - `}</MathJax>
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
          <MathJax>{"\\(I\\) - "}</MathJax>
          <input type="number" placeholder="Сила тока А" />
          <select id="A">
            <option value="0">A</option>
            <option value="-6">мкA</option>
            <option value="-3">мA</option>
            <option value="3">КA</option>
            <option value="6">МA</option>
          </select>
        </MathJaxContext>
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
        <MathJaxContext>
          <MathJax>{"\\(U\\) - "}</MathJax>
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
          <MathJax>{"\\(I\\) - "}</MathJax>
          <input type="number" placeholder="Сила тока А" />
          <select id="A">
            <option value="0">A</option>
            <option value="-6">мкA</option>
            <option value="-3">мA</option>
            <option value="3">КA</option>
            <option value="6">МA</option>
          </select>
        </MathJaxContext>
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
        <MathJaxContext>
          <MathJax>{"\\(U\\) - "}</MathJax>
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
          <MathJax>{"\\(R\\) - "}</MathJax>
          <input type="number" placeholder="Сопротивление Ом" />
          <select id="Ohm">
            <option value="0">Ом</option>
            <option value="-3">мОм</option>
            <option value="3">КОм</option>
            <option value="6">МОм</option>
          </select>
        </MathJaxContext>
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
  console.log(props);
  if (props.letter === "VariablesF") {
    return (
      <div id="Operations">
        <MathJaxContext>
          <MathJax>{"\\(m\\) - "}</MathJax>
          <input type="number" placeholder="Масса Кг" />
          <select id="KG">
            <option value="0">Килограмм</option>
            <option value="-3">Грамм</option>
            <option value="3">Тонна</option>
          </select>
          <br />
          * g
          <br />
        </MathJaxContext>
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
  if (props.letter === "VariablesM") {
    return (
      <div id="Operations">
        <MathJaxContext>
          <MathJax>{"\\(F\\) - "}</MathJax>
          <input type="number" placeholder="Сила тяжести Н" />
          <select id="N">
            <option value="0">Ньютон</option>
            <option value="-3">мНьютон</option>
            <option value="3">КНьютон</option>
          </select>
          <br />/ g <br />
        </MathJaxContext>
        <button
          onClick={() => {
            calculations.calcWeightG(props);
          }}
        >
          Посчитать
        </button>
      </div>
    );
  }
}
