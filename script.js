const form = document.getElementById("curtainForm");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const width = Number(document.getElementById("windowWidth").value);
  const height = Number(document.getElementById("windowHeight").value);
  const fold = Number(document.getElementById("curtainType").value);

  if (!width || !height || width < 60 || height < 100) {
    result.innerHTML = "<p>Проверьте значения: минимальная ширина 60 см, высота 100 см.</p>";
    return;
  }

  const curtainWidth = Math.round(width * fold);
  const panelWidth = Math.round(curtainWidth / 2);
  const curtainHeight = Math.round(height + 3);

  result.innerHTML = `
    <h3>Рекомендуемые размеры</h3>
    <p>Общая ширина ткани: <strong>${curtainWidth} см</strong></p>
    <p>Каждое полотно (2 шт): <strong>${panelWidth} см</strong></p>
    <p>Высота полотна: <strong>${curtainHeight} см</strong></p>
    <p>Ориентировочный срок пошива и доставки: <strong>5-7 дней</strong>.</p>
  `;
});
