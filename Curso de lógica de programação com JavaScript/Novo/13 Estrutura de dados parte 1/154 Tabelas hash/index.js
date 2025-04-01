// Tabelas Hash

// Tabelas Hash são estruturas de dados que associam chaves de pesquisa a valores. 
// Elas são muito eficientes para buscas, inserções e remoções de elementos. 
// A ideia é simples: a chave de pesquisa é usada para calcular um índice (hash) que será usado para acessar a tabela. 
// O índice é calculado através de uma função hash, que transforma a chave em um número inteiro. 
// A função hash deve ser rápida e distribuir os índices de forma uniforme pela tabela. 
// Se dois elementos tiverem o mesmo índice, ocorre uma colisão. 
// Existem várias técnicas para resolver colisões, como listas encadeadas, árvores binárias, endereçamento aberto, entre outras.
// Neste exemplo, vamos implementar a técnica de encadeamento externo, que consiste em usar listas encadeadas para resolver colisões.

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.table = [];
    }

    put(key, value) {
        const pos = this.hashCode(key);
        if (this.table[pos] === undefined) {
            this.table[pos] = new Node(key, value);
        } else {
            let node = this.table[pos];
            while (node.next) {
                node = node.next;
            }
            node.next = new Node(key, value);
        }
    }

    get(key) {
        const pos = this.hashCode(key);
        let node = this.table[pos];
        while (node) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }
        return undefined;
    }

    remove(key) {
        const pos = this.hashCode(key);
        let node = this.table[pos];
        if (node) {
            if (node.key === key) {
                this.table[pos] = node.next;
            } else {
                let prev = node;
                while (node.next) {
                    if (node.next.key === key) {
                        prev.next = node.next.next;
                        return;
                    }
                    prev = node;
                    node = node.next;
                }
            }
        }
    }

    hashCode(key) {
        return key.toString().length % 37;
    }
}

const hash = new HashTable();

// Prós e contras
// O encadeamento externo é uma técnica simples e eficiente para resolver colisões.
// No entanto, ela pode ser ineficiente se a função hash não distribuir bem os índices pela tabela.
// Além disso, a tabela pode ficar muito grande, o que pode causar problemas de desempenho.

// Uma alternativa seria a técnica de sondagem linear, que consiste em procurar o próximo índice livre na tabela.
// exemplo:

class HashTable2 {
    constructor() {
        this.table = [];
    }

    put(key, value) {
        let pos = this.hashCode(key);
        while (this.table[pos] !== undefined) {
            pos++;
        }
        this.table[pos] = new Node(key, value);
    }

    get(key) {
        let pos = this.hashCode(key);
        while (this.table[pos] !== undefined) {
            if (this.table[pos].key === key) {
                return this.table[pos].value;
            }
            pos++;
        }
        return undefined;
    }

    remove(key) {
        let pos = this.hashCode(key);
        while (this.table[pos] !== undefined) {
            if (this.table[pos].key === key) {
                this.table[pos] = undefined;
                return;
            }
            pos++;
        }
    }

    hashCode(key) {
        return key.toString().length % 37;
    }
}

const hash2 = new HashTable2();