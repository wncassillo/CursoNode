import _ from "lodash";
//Instalando pacotes globalmente, não no projeto
//existem módulos que são executaveis, e não precisam de importação

//lodash foi isntalado globalmente (npm install -g <nome>)
//mas para funcionar, o lodash precisa "de seus arquivos disponiveis"
//por isso, em alguns casos ao usar um pacote global, precisamos tambem fazer
//o comando (npm link <nome>)

const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7];
console.log(_.sortedUniq(arr));

//Não faz parte dessa aula, mas é nesse ponto onde vemos um pouco sobre npx
//e entendemos que ele é o "executor" de pacotes
//exemplo com o cowsay
