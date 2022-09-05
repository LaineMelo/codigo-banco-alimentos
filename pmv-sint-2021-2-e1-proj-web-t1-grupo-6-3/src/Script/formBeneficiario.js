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
        html=html+"<td><a href=\"#\" onclick=\"buscaCPF('" +  pessoa.cpf + "');\">"+pessoa.cpf+"</a></td>"; 
        html=html+"<td>"+pessoa.nomeCompleto+"</td>";
        html=html+"<td>"+pessoa.nis+"</td>"; 
        html=html+"<td>"+pessoa.dataNascimento+"</td>";
        html=html+"<td>"+pessoa.contato+"</td>";
        html=html+"<td>"+pessoa.endereco+"</td>"; 
        html=html+"<td>"+pessoa.numeroEnd+"</td>";
        html=html+"<td>"+pessoa.cidade+"</td>";
        html=html+"<td>"+pessoa.estado+"</td>"; 
        html=html+"<td>"+pessoa.condicao+"</td>";
        html=html+"<td>"+pessoa.beneficio+"</td>"; 
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
        ancora.setAttribute("onClick", "buscaCPF('" +  pessoa.cpf + "');"); 
        
        ancora.innerHTML=pessoa.cpf; 
        coluna.appendChild(ancora); 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.nomeCompleto; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.nis; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.dataNascimento;
        linha.appendChild(coluna);
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.contato; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.endereco; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.numeroEnd;
        linha.appendChild(coluna);
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.ciadde; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.estado; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.condicao;
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.beneficio;
        linha.appendChild(coluna);  
        
        document.getElementById("corpoTabela").appendChild(linha); 
    });
    
}
function gravar(){
    
    var novo = new Object(); 
    
    novo.cpf=document.getElementById("cpf").value; 
    novo.nomeCompleto=document.getElementById("nomeCompleto").value; 
    novo.nis=document.getElementById("nis").value;
    novo.dataNascimento=document.getElementById("dataNascimento").value;
    novo.contato=document.getElementById("contato").value; 
    novo.endereco=document.getElementById("endereco").value; 
    novo.numeroEnd=document.getElementById("numeroEnd").value;
    novo.cidade=document.getElementById("cidade").value;
    novo.estado=document.getElementById("estado").value; 
    novo.condicao=document.getElementById("condicao").value; 
    novo.beneficio=document.getElementById("beneficio").value; 
    
    var jt = JSON.stringify(novo);
    
    localStorage.setItem(novo.cpf, jt);
    
    document.getElementById("btnRemover").classList.remove("d-none");
}

function remover(){ 
    var cpf = document.getElementById("cpf").value; 
    
    localStorage.removeItem(cpf);
    document.getElementById("cpf").value=""; 
    document.getElementById("nomeCompleto").value="";
    document.getElementById("nis").value="";
    document.getElementById("dataNascimento").value="";
    document.getElementById("contato").value=""; 
    document.getElementById("endereco").value="";
    document.getElementById("numeroEnd").value="";
    document.getElementById("cidade").value="";
    document.getElementById("estado").value=""; 
    document.getElementById("condicao").value="";
    document.getElementById("beneficio").value="";
    
    document.getElementById("btnRemover").classList.add("d-none");
}

function buscaCPF(cpf){
    menuCadastro();
    
    var jt = localStorage.getItem(cpf);
    
    if(jt!=null){ 
        
        var pessoa=JSON.parse(jt);
        document.getElementById("cpf").value=pessoa.cpf;
        document.getElementById("nomeCompleto").value=pessoa.nomeCompleto;
        document.getElementById("nis").value=pessoa.nis; 
        document.getElementById("dataNascimento").value=pessoa.dataNascimento;
        document.getElementById("contato").value=pessoa.contato;
        document.getElementById("endereco").value=pessoa.endereco;
        document.getElementById("numeroEnd").value=pessoa.numeroEnd; 
        document.getElementById("cidade").value=pessoa.cidade;
        document.getElementById("estado").value=pessoa.estado;
        document.getElementById("condicao").value=pessoa.condicao;
        document.getElementById("beneficio").value=pessoa.beneficio; 
        document.getElementById("btnRemover").classList.remove("d-none");
    }else{ 
        document.getElementById("nomeCompleto").value="";
        document.getElementById("nis").value="";
        document.getElementById("dataNascimento").value=""; 
        document.getElementById("contato").value=""; 
        document.getElementById("endereco").value="";
        document.getElementById("numeroEnd").value="";
        document.getElementById("cidade").value="";
        document.getElementById("estado").value=""; 
        document.getElementById("condicao").value="";
        document.getElementById("beneficio").value="";
        document.getElementById("btnRemover").classList.add("d-none");
    }
}

function buscaPessoa(){
    var cpf = document.getElementById("cpf").value;
    buscaCPF(cpf);
}



