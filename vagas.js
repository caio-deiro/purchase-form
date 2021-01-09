var cont = 0;

function clicks(){
    
   if(cont > 0){
   cont = cont -1;
   document.getElementById('saida_numero').value = cont;
}
    else{
       alert('Valor inválido!')
   }
}

function clicks2(){
    cont = cont + 1;
    document.getElementById('saida_numero').value = cont;
}


function obrigado(){
    alert('Obrigado pela preferencia!');
}