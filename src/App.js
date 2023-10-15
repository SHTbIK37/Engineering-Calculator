import "./App.css";
import { FormulasList } from "./components/FormulasList";
import { useEffect, useState } from "react";
function App() {
  const [renderFunction, setRenderFunction] = useState("");
  const [answer, setAnswer] = useState("");
  return (
    <div>
      <h2>Калькулятор физических величин</h2>
      <p>Выберите функцию:</p>
      {
        <FormulasList
          answer={answer}
          setAnswer={setAnswer}
          renderFunction={renderFunction}
          setRenderFunction={setRenderFunction}
        />
      }
      {renderFunction}
      {answer}
    </div>
  );
}

export default App;
