const nomes = ["ALISSON", "NICOLE", "ALICE", "GUSTAVO", "PAOLA", "NEYMAR", "ANA"]
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);