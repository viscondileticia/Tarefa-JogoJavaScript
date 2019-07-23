letra = "X";
 
function joga(space){
    spaceclicada = document.getElementById(space).innerHTML;
   if (spaceclicada == "X" || spaceclicada == "O"){
       alert("Tente outro espaço!");
   }else{
        document.getElementById(space).innerHTML = letra;
        if (letra == "X"){
            letra = "O";
        }else{
            letra = "X";
        }
   }
}

function novo(){
    for (i=1; i<4; i++){
       for (j=1; j<4; j++){
          nomecelula = 'spc' + i + j
           document.getElementById(nomecelula).innerHTML = '';
      
      }
   }
}
 
function verif(){
    s11 = document.getElementById('spc11').innerHTML;
    s12 = document.getElementById('spc12').innerHTML;
    s13 = document.getElementById('spc13').innerHTML;
    s21 = document.getElementById('spc21').innerHTML;
    s22 = document.getElementById('spc22').innerHTML;
    s23 = document.getElementById('spc23').innerHTML;
    s31 = document.getElementById('spc31').innerHTML;
    s32 = document.getElementById('spc32').innerHTML;
    s33 = document.getElementById('spc33').innerHTML;
    if (((s11 != '') && (s12 != '') && (s13 != '') && (s11 == s12) && (s12 == s13)) || ((s11 != '') && (s22 != '') && (s33 != '') && (s11 == s22) && (s22 == s33)) || ((s11 != '') && (s21 != '') && (s31 != '') && (s11 == s21) && (s21 == s31)) || ((s21 != '') && (s22 != '') && (s23 != '') && (s21 == s22) && (s22 == s23)) || ((s31 != '') && (s32 != '') && (s33 != '') && (s31 == s32) && (s32 == s33)) || ((s12 != '') && (s22 != '') && (s32 != '') && (s12 == s22) && (s22 == s32)) || ((s13 != '') && (s23 != '') && (s33 != '') && (s13 == s23) && (s23 == s33)) || ((s31 != '') && (s22 != '') && (s13 != '') && (s31 == s22) && (s22 == s13))){
        alert('Você ganhou!');
       novo();
    }
 }
 
 