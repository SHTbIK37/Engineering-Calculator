import "./App.css";
import { FormulasList } from "./components/FormulasList";
import { useEffect, useState } from "react";
function App() {
  const [renderFunction, setRenderFunction] = useState("");
  const [renderVariables, setRenderVariables] = useState("");
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    const latex = document.getElementById("Operations")?.children;

    if (latex) {
      setTimeout(() => {
        for (let elem of latex) {
          if (elem.tagName === "SPAN") elem.style.display = "inline";
        }
      }, 100);
    }
  }, [renderVariables]);
  return (
    <div>
      <h2 id="mainText">Калькулятор физических величин</h2>
      <p>Выберите формулу:</p>
      {
        <FormulasList
          answer={answer}
          setAnswer={setAnswer}
          renderFunction={renderFunction}
          setRenderFunction={setRenderFunction}
          setRenderVariables={setRenderVariables}
        />
      }
      {renderFunction}
      {renderVariables}
      {answer}
    </div>
  );
}

export default App;
