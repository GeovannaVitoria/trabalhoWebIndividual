let btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    let texto = document.getElementById('texto')
    let name = texto.value

    let encontraVogais = name.match(/[aeiouéêãáàâõóòíìîùúûy]/gi)
    let numeroVogais = encontraVogais.length
    
    /*
        string.match compara uma string com uma expressão regular, e retorna um array com as correspondências encontradas.
        [ ] = buscar qualquer caractere da lista dentro dos colchetes
        g = busca global: continue procurando após encontrar uma correspondência
        i = busca case-insensitive (sem diferenciar maiúsculas e minúsculas
    */
    
    alert(numeroVogais)
})