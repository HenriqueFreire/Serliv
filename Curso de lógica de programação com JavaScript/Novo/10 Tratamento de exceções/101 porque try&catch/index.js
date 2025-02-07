let obj = {
    name: 'João',
    email: 'joao@example.com',
    age: 22,
    job: 'Developer',
    city: 'São Paulo',
}

obj = null

try {
    console.log(obj.name)
} catch (error) {
    console.log('ocorreu um erro')
    console.log(error.message)
}finally {
    console.log('finalmente') // sempre vai ser executado
}