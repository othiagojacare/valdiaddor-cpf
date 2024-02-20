var cpfNum = document.getElementById('cpfNum');
var hello = '52998224725'.split("")
var elementos = -1;
function TestaCPF(){
  for(var i = 10; i >= 2; i--){
    if(elementos <=8){
      elementos++
    }
    var resAnt = hello[0]* i 
    var res = resAnt + hello[elementos]* i 
    console.log(res)
  }
}

// res = hello