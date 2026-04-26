const http = require("http");

// Funcion que retorna el mensaje principal
function getMessage() {
  return "Hola Mundo";
}

// Funcion que retorna el status code esperado
function getStatusCode() {
  return 200;
}

// Prueba 1: el mensaje es correcto
test("getMessage retorna Hola Mundo", () => {
  expect(getMessage()).toBe("Hola Mundo");
});

// Prueba 2: el status code es 200
test("getStatusCode retorna 200", () => {
  expect(getStatusCode()).toBe(200);
});

// Prueba 3: el mensaje no esta vacio
test("getMessage no retorna string vacio", () => {
  expect(getMessage().length).toBeGreaterThan(0);
});