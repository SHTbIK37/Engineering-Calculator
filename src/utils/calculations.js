import { constants } from "./constants";
function getInputs(elementId) {
  const inputs = document
    .getElementById(elementId)
    .getElementsByTagName("input");
  return inputs;
}
function goC(elementId, inputs) {
  const selects = document
    .getElementById(elementId)
    .getElementsByTagName("select");
  const resultsC = [];
  console.log(selects);
  console.log(inputs);
  for (let i = 0; i < selects.length; i++) {
    if (selects[i].id === "Time") {
      if (selects[i].value[0] === "-")
        resultsC.push(inputs[i].value / 10 ** -selects[i].value);
      if (selects[i].value === "1") resultsC.push(inputs[i].value / 60);
      if (selects[i].value === "2") resultsC.push(inputs[i].value / 60 / 60);
      if (selects[i].value === "0") resultsC.push(inputs[i].value);
      continue;
    }
    if (selects[i].value[0] === "-") {
      resultsC.push(inputs[i].value / 10 ** -selects[i].value);
      continue;
    }
    if (selects[i].value === "0") {
      resultsC.push(inputs[i].value);
      continue;
    }
    resultsC.push(inputs[i].value * 10 ** selects[i].value);
  }
  console.log(resultsC);
  return resultsC;
}
function renderAnswer(resultState) {
  resultState.props.setAnswer(
    <div id="answer">
      Ответ: {resultState.result} {resultState.unit}
    </div>
  );
}
export function calcForceGravity(props) {
  const inputs = getInputs("forceGravity");
  const resultsC = goC("forceGravity", inputs);
  const result = resultsC[0] * constants.g;
  renderAnswer({ props, result, unit: "Н" });
}
export function calcVoltage(props) {
  const inputs = getInputs("voltage");
  const resultsC = goC("voltage", inputs);
  const result = resultsC[0] * resultsC[1];
  renderAnswer({ props, result, unit: "В" });
}
export function calcSpeed(props) {
  const inputs = getInputs("speed");
  const resultsC = goC("speed", inputs);
  const result = resultsC[0] / resultsC[1];
  renderAnswer({ props, result, unit: "м/с" });
}
