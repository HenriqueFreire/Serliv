function calcularAreaRetangulo(base, altura) {
    if (typeof base !== 'number' || typeof altura !== 'number') {
      throw new Error('Ambos os valores devem ser números.')
    }

    return base * altura;
}

try {
    console.log(calcularAreaRetangulo(2, 3));
} catch (error) {
    console.log(error.message);
}