import { MathJax, MathJaxContext } from "better-react-mathjax";
export function VoltageFormula() {
  return (
    <>
      <MathJaxContext>
        <MathJax>{"Формула напряжения: \\(U=I*R\\)"}</MathJax>
        <MathJax>{"\\(U\\) - Напряжение"}</MathJax>
        <MathJax>{"\\(R\\) - Сопротивление"}</MathJax>
        <MathJax>{"\\(I\\) - Сила тока"}</MathJax>
      </MathJaxContext>
    </>
  );
}
export function ForceGravityFormula() {
  return (
    <>
      <MathJaxContext>
        <MathJax>{"Формула силы тяжести: \\(F=m*g\\)"}</MathJax>
        <MathJax>{"\\(F\\) - Сила тяжести"}</MathJax>
        <MathJax>{"\\(m\\) - Масса тела"}</MathJax>
        <MathJax>
          {"\\(g\\) - Гравитационная постоянная = \\(9.80665м/с^2\\)"}
        </MathJax>
      </MathJaxContext>
    </>
  );
}
export function SpeedFormula() {
  return (
    <>
      <MathJaxContext>
        <MathJax>{"Формула скорости: \\(v=S/t\\)"}</MathJax>
        <MathJax>{"\\(v\\) - Скорость"}</MathJax>
        <MathJax>{"\\(S\\) - Расстояние"}</MathJax>
        <MathJax>{"\\(t\\) - Время"}</MathJax>
      </MathJaxContext>
    </>
  );
}
