//Экспорт функции, которая будет форматировать текст ошибки в красный цвет. Принимает text и возвращает его красным

export const formatError = text => `
    <span style="color: red">${text}</span>
`;