import { MathJax, MathJaxContext } from "better-react-mathjax";
export function VoltageFormula() {
  return (
    <MathJaxContext>
      <MathJax>{"Формула напряжения: \\(U=I*R\\)"}</MathJax>
      <MathJax>{"\\(U\\) - Напряжение"}</MathJax>
      <MathJax>{"\\(R\\) - Сопротивление"}</MathJax>
      <MathJax>{"\\(I\\) - Сила тока"}</MathJax>
    </MathJaxContext>
  );
}
export function ForceGravityFormula() {
  return (
    <MathJaxContext>
      <MathJax>{"Формула силы тяжести: \\(F=m*g\\)"}</MathJax>
      <MathJax>{"\\(F\\) - Сила тяжести"}</MathJax>
      <MathJax>{"\\(m\\) - Масса тела"}</MathJax>
      <MathJax>
        {"\\(g\\) - Гравитационная постоянная = \\(9.80665м/с^2\\)"}
      </MathJax>
    </MathJaxContext>
  );
}
export function SpeedFormula() {
  return (
    <MathJaxContext>
      <MathJax>{"Формула скорости: \\(v=S/t\\)"}</MathJax>
      <MathJax>{"\\(v\\) - Скорость"}</MathJax>
      <MathJax>{"\\(S\\) - Расстояние"}</MathJax>
      <MathJax>{"\\(t\\) - Время"}</MathJax>
    </MathJaxContext>
  );
}
export function RenderU() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(U\\) - `}</MathJax>
    </MathJaxContext>
  );
}
export function RenderI() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(I\\) - `}</MathJax>
    </MathJaxContext>
  );
}
export function RenderR() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(R\\) - `}</MathJax>
    </MathJaxContext>
  );
}
export function Renderm() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(m\\) - `}</MathJax>
    </MathJaxContext>
  );
}
export function RenderF() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(F\\) - `}</MathJax>
    </MathJaxContext>
  );
}
export function RenderS() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(S\\) - `}</MathJax>
    </MathJaxContext>
  );
}
export function Renderv() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(v\\) - `}</MathJax>
    </MathJaxContext>
  );
}
export function Rendert() {
  return (
    <MathJaxContext>
      <MathJax>{`\\(t\\) - `}</MathJax>
    </MathJaxContext>
  );
}
