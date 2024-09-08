function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLocaleLowerCase();
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";


    if (campoPesquisa == "") {
        section.innerHTML = "Nenhum time foi encontrado"
        return 
    }
    for (let dado of dados) {
        let titulo = dado.titulo.toLocaleLowerCase()
        let descricao = dado.descricao.toLocaleLowerCase()
        let tag = dado.tag.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tag.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}<p>
                <a href=${dado.link} target="_blank">Site Oficial</a>  
            </div>
           `
        }  
        }
        
    

    section.innerHTML = resultados

}

