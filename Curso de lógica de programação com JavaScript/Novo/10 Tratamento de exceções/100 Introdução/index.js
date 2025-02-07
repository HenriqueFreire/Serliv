try {
    // Tentando dividir por zero
    const resultado = 10 / 0;
    console.log(resultado);
} catch (erro) {
    console.log("Erro na divisão:", erro.message);
}

