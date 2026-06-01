let nota1 = 7.5;
let nota2 = 8.0;
let nota3 = 6.0;

let media = (nota1 + nota2 + nota3) / 3;
let status;

if (media >= 7) {
    status = "Aprovado";
} else if (media >= 5) {
    status = "Se Liga";
} else {
    status = "Reprovado";
}

console.log(`Resultado Final`);
console.log(`A média final do aluno é: ${media.toFixed(1)}`);
console.log(`Situação: ${status}`);
