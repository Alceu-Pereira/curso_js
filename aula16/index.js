const alunos = ['Luiz', 'Maria', 'João'];

// alunos[2] = 'Eduardo';
// console.log(alunos);
// console.log(alunos[2]);
// console.log(alunos[3]);

// console.log(alunos.length);

// ADD itens no final da lista
// Método 1
// alunos[alunos.length] = 'Luiza';
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// // Método 2
// alunos.push('Luiza');
// alunos.push('Fábio');
// alunos.push('Luana');


// ADD itens no início da lista
// alunos.unshift('Luiza');


// Removendo itens do final da lista
// const removido = alunos.pop();


// console.log(alunos);
// console.log(removido);

alunos.push('Luiza');
alunos.push('Eduardo');
// console.log(alunos.slice(2, 3));
console.log(alunos.slice(0, -2));