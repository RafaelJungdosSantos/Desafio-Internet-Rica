function valida (){
if (document.getElementById("nome").value.length < 1){
alert('POR FAVOR, PREENCHA O CAMPO NOME!!!');
document.getElementById("nome").style.borderColor=erro;
document.getElementById("nome").focus();
return false;
}else{
     document.getElementById("nome").style.borderColor=df;
}
if (document.getElementById("profissao").value.length < 1){
alert('POR FAVOR, PREENCHA O CAMPO PROFISSÃO!!!');
document.getElementById("profissao").style.borderColor=erro;
document.getElementById("profissao").focus();
return false;
}else{
     document.getElementById("telefone").style.borderColor=df;
}
if (document.getElementById("telefone").value.length < 1){
alert('POR FAVOR, PREENCHA O CAMPO TELEFONE!!!');
document.getElementById("telefone").style.borderColor=erro;
document.getElementById("telefone").focus();
return false;
}else{
     document.getElementById("telefone").style.borderColor=df;
}
if (document.getElementById("salario").value.length < 1){
alert('POR FAVOR, PREENCHA O CAMPO SALÁRIO!!!');
document.getElementById("salario").style.borderColor=erro;
document.getElementById("salario").focus();
return false;
}else{
     document.getElementById("salario").style.borderColor=df;
}
}
function apenasMaiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
}
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function telMascara(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")
 
    if (v.length <= 14) { //CPF
 
    
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    
 
    } 
 
    return v
 
}
function antLetra(v){
    
    v=v.replace(/\D/g,"")
    v = new String(Number(v));
 	var len = v.length;
 	if (1 == len)
 	v = v.replace(/(\d)/,"0.0$1");
 	else if (2 == len)
 	v = v.replace(/(\d)/,"0.$1");
 	else if (3 == len) 
 	v = v.replace(/(\d{2})$/,'.$1');
        else if (4 == len) 
 	v = v.replace(/(\d{2})$/,'.$1');
        else if (5 == len) 
 	v = v.replace(/(\d{2})$/,'.$1');
        else if (len > 5) {
 	v = v.replace(/(\d{5})$/,'.$1');
        v=v.replace(/(\d{2})$/,',$1');
 	}
        
    
return v
}


function limpar(){
$('#nome').val('');
$('#profissao').val('');
$('#telefone').val('');
$('#salario').val('');


}
function valores(){
    var nomev = $('#nome').val();
    var profissaov = $('#profissao').val();
    var telefonev = $('#telefone').val();
    var salariov = $('#salario').val();
    if(document.getElementById("nome" && "profissao" && "salario").value == "" || (document.getElementById("telefone").value.length < 1)){
        alert('POR FAVOR, PREENCHER TODOS OS CAMPOS')
    	return false;
	}else{
    Adicionar( nomev , profissaov , telefonev , salariov );
   
}
}
function Adicionar(nomev, profissaov, telefonev, salariov){
    $("#tblValores").find("tbody").append("<tr><td>"+ nomev +"</td><td>"+ profissaov +"</td><td>"+ telefonev +"</td><td><label>R$ </label>"+ salariov+ "</td></tr>");
     
      
};



