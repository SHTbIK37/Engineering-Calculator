import "./App.css";
import { constants } from "./utils/constants";
import { FormulasList } from "./components/FormulasList";
import { useEffect, useState } from "react";
function App() {
  const [renderFunction, setRenderFunction] = useState("");
  return (
    <div>
      <h2>Калькулятор физических величин</h2>
      <p>Выберите функцию:</p>
      {
        <FormulasList
          renderFunction={renderFunction}
          setRenderFunction={setRenderFunction}
        />
      }
      {renderFunction}
    </div>
  );
}

export default App;
