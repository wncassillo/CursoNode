import EventEmitter from "events"; // como o nome sugere um "emitidor" de eventos

const eventEmitter = new EventEmitter();

//um 'gatilho' que deixa determinado evento preparado e o "ativa" ao ser chamado
eventEmitter.on("start", () => {
  console.log("Durante");
});

console.log("Antes"); // Antes do gatilho e do evento

eventEmitter.emit("start"); // O disparo do gatilho

console.log("Após"); //Depois do evento
