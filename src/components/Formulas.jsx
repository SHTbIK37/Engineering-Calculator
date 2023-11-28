import * as MathJaxText from "./MathJaxText";
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
      <MathJaxText.SpeedFormula />
      <span>Выберите, что хотете найти</span>
      <br />
      <select id="selectVarSpeed">
        <option value="Variablesv">Скорость</option>
        <option value="VariablesS">Расстояние</option>
        <option value="Variablest">Время</option>
      </select>
      <button
        onClick={() => {
          const letter = document.getElementById("selectVarSpeed")?.value;
          props.setRenderVariables(
            <Variables.Variablesv props={props} letter={letter} />
          );
        }}
      >
        Ок
      </button>
    </div>
  );
}
