import * as calculations from "../utils/calculations";
import * as MathJaxText from "./MathJaxText";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import * as Variables from "./Variables";
export function voltageFormula(props) {
  return (
    <div id="voltageFormula">
      <MathJaxText.VoltageFormula />
      <span>Выберите, что хотете найти</span>
      <br />
      <select id="selectVarVoltage">
        <option value="VariablesU">Напряжение</option>
        <option value="VariablesI">Сила тока</option>
        <option value="VariablesR">Сопротивление</option>
      </select>
      <button
        onClick={() => {
          const letter = document.getElementById("selectVarVoltage")?.value;
          props.setRenderVariables(
            <Variables.VariablesU props={props} letter={letter} />
          );
        }}
      >
        Ок
      </button>
    </div>
  );
}
export function forceGravityFormula(props) {
  return (
    <div id="forceGravityFormula">
      <MathJaxText.ForceGravityFormula />
      <span>Выберите, что хотете найти</span>
      <br />
      <select id="selectVarForceGravity">
        <option value="VariablesF">Сила тяжести</option>
        <option value="VariablesM">Масса тела</option>
      </select>
      <button
        onClick={() => {
          const letter = document.getElementById(
            "selectVarForceGravity"
          )?.value;
          props.setRenderVariables(
            <Variables.VariablesF props={props} letter={letter} />
          );
        }}
      >
        Ок
      </button>
    </div>
  );
}
export function speedFormula(props) {
  return (
    <div id="speedFormula">
      <MathJaxContext>
        <MathJax>{"\\(v=S/t\\)"}</MathJax>
      </MathJaxContext>
      <input type="number" placeholder="Расстояние Метры" />
      <select id="S">
        <option value="0">Метры</option>
        <option value="-3">Миллиметры</option>
        <option value="-2">Сантиметры</option>
        <option value="3">Километры</option>
      </select>
      /
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
        Посчитать
      </button>
    </div>
  );
}
