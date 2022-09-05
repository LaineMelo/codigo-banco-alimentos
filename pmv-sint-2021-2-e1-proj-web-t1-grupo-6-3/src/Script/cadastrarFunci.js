var atual;
var localStorage = Window.localStorage;


function menuCadastro(){
    atual.classList.add("d-none"); 
    atual = document.getElementById("cadastro");
    atual.classList.remove("d-none");
} 


function menuRelatorioInner(){ 
    atual.classList.add("d-none"); 
    atual=document.getElementById("relatorio"); 
    atual.classList.remove("d-none"); 
    
    var html=""; 
    var keys = Object.keys(localStorage); 
    
    keys.forEach(function(chave, pos){ 
        let pessoa = JSON.parse(localStorage.getItem(chave)); 
        html = html+"<tr>"; 
        html=html+"<td><a href=\"#\" onclick=\"buscaCPF('" +  pessoa.cpfFunc + "');\">"+pessoa.cpfFunc+"</a></td>"; 
        html=html+"<td>"+pessoa.nomeFunc+"</td>";
        html=html+"<td>"+pessoa.enderecoFunc+"</td>"; 
        html=html+"<td>"+pessoa.cargo+"</td>";
        html=html+"<td>"+pessoa.unidade+"</td>"; 
        html=html+"</tr>"; 
    });

    document.getElementById("corpoTabela").innerHTML=html; 
}

function menuRelatorioDOM(){ 
    
    atual.classList.add("d-none"); 
    atual=document.getElementById("relatorio"); 
    atual.classList.remove("d-none"); 
    
    var keys = Object.keys(localStorage); 
    
    while (document.getElementById("corpoTabela").firstChild) { 
        
        document.getElementById("corpoTabela").removeChild(document.getElementById("corpoTabela").firstChild); 
    }
    
    keys.forEach(function(chave, pos){ 
        let pessoa = JSON.parse(localStorage.getItem(chave)); 
        let linha = document.createElement("tr"); 
        let coluna = document.createElement("td"); 
        let ancora = document.createElement("a"); 
        
        ancora.setAttribute("href", "#"); 
        ancora.setAttribute("onClick", "buscaCPF('" +  pessoa.cpfFunc + "');"); 
        
        ancora.innerHTML=pessoa.cpfFunc; 
        coluna.appendChild(ancora); 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.nomeFunc; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.enderecoFunc; 
        linha.appendChild(coluna);
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.unidade; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.cargo; 
        linha.appendChild(coluna);

        document.getElementById("corpoTabela").appendChild(linha); 
    });
    
}
function gravar(){
    
    var novo = new Object(); 
    
    novo.cpfFunc=document.getElementById("cpfFunc").value; 
    novo.nomeFunc=document.getElementById("nomeFunc").value; 
    novo.enderecoFunc=document.getElementById("enderecoFunc").value; 
    novo.unidade=document.getElementById("unidade").value; 
    novo.cargo=document.getElementById("cargo").value; 
    
    var jt = JSON.stringify(novo);
    
    localStorage.setItem(novo.cpfFunc, jt);
    
    document.getElementById("btnRemover").classList.remove("d-none"); 
}

function remover(){ 
    var cpfFunc = document.getElementById("cpfFunc").value; 
    
    localStorage.removeItem(cpfFunc);
    document.getElementById("cpfFunc").value=""; 
    document.getElementById("nomeFunc").value="";
    document.getElementById("enderecoFunc").value="";
    document.getElementById("unidade").value="";
    document.getElementById("cargo").value="";
    
    document.getElementById("btnRemover").classList.add("d-none");
}

function buscaCPF(cpfFunc){
    menuCadastro();
    
    var jt = localStorage.getItem(cpfFunc);
    
    if(jt!=null){ 
        
        var pessoa=JSON.parse(jt);
        document.getElementById("cpfFunc").value=pessoa.cpfFunc;
        document.getElementById("nomeFunc").value=pessoa.nomeFunc;
        document.getElementById("enderecoFunc").value=pessoa.enderecoFunc;
        document.getElementById("unidade").value=pessoa.unidade;
        document.getElementById("cargo").value=pessoa.cargo; 
        document.getElementById("btnRemover").classList.remove("d-none");
    }else{ 
        document.getElementById("nomeFunc").value="";
        document.getElementById("enderecoFunc").value="";
        document.getElementById("unidade").value="";
        document.getElementById("cargo").value=""; 
        document.getElementById("btnRemover").classList.add("d-none");
    }
}

function buscaPessoa(){
    var cpfFunc = document.getElementById("cpfFunc").value;
    buscaCPF(cpfFunc);
}



