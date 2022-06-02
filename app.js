const quadrados = document.querySelectorAll('[data-cell]');
let vezDoO = false;

const marcar = (quadrado, adicionarCLass) => {
    quadrado.classList.add(adicionarCLass);
}

// inverter vezDoO para ser true;
const mudarJogador = () => {
    vezDoO = !vezDoO;
};

const clicar = (e) => {
    //colocar x ou o
    const quadrado = e.target;
    const adicionarCLass = vezDoO ? 'o' : 'x';
    
    marcar (quadrado, adicionarCLass);


    //verificar se venceu

    //ver se empatou

    //mudar x pra o, e o para x
    mudarJogador();
};


for (const quadrado of quadrados) {
    quadrado.addEventListener('click', clicar, {once:true})
}   