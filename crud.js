function gerarID() {
    return Math.floor(Math.random()*1000)
}

let listaPessoas = [];

function cadastrarPessoa(pessoa) {
    pessoa.id = gerarID();
    listaPessoas.push(pessoa);
}

function atualizarPessoa(id, camposAtualizados) {
    const pessoasIndex = listaPessoas.findIndex(p=>p.id===id);
    if (pessoasIndex!=-1) {
        listaPessoas[pessoasIndex] = {...listaPessoas[pessoasIndex], ...camposAtualizados}
    }
}

function deletarPessoa(id) {
    listaPessoas = listaPessoas.filter(p=>p.id!==id);
}

function listarPessoas() {
    return listaPessoas;
}

//exemplo
cadastrarPessoa({nome: 'João', idade: 30, cidade: 'São Paulo' });
cadastrarPessoa({nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' });
console.log([...listarPessoas()]);

atualizarPessoa(listaPessoas[0].id, {cidade: 'Brasilia'})
console.log([...listarPessoas()]);

deletarPessoa(listaPessoas[0].id)
console.log([...listarPessoas()]);