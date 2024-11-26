function a() {
  console.log("Executando a()");
}

function b() {
  console.log("Executando b()");
}

//Isso é um loop de eventos:
//Onde os eventos a e b são executados
function c() {
  console.log("Executando c()");
  a();
  b();
}

c();
