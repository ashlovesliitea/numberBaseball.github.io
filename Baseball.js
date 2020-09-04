
 var input=[];
 var guess=[];
 
 var display=document.getElementById('display');

 var input1=document.getElementById('a');
 var input2=document.getElementById('b');
 var input3=document.getElementById('c');

 
function init(){
    var list=[0,1,2,3,4,5,6,7,8,9];
    for(var i=0;i<3;i++){
        var select=Math.floor(Math.random()*list.length);
        guess[i]=list.splice(select,1)[0];
        console.log(guess[i]);
    }

}

function inputInit(){
    input1.value="";
    input2.value="";
    input3.value="";
    input1.focus();
}

function moveNum(num){


    if(isFinite(num.value)==false){
        alert("숫자만 입력해주세요!");
        num.value="";
        return false;
    }
    
   

    if(num.id=='a'){
        input[0]=num.value;
        max=num.getAttribute("maxlength");
        if(num.value.length>=max){
            num.nextElementSibling.focus();
        }
    
    }
    else if(num.id=='b'){
        input[1]=num.value;
        max=num.getAttribute("maxlength");
        if(input[0]==input[1]){
            num.value="";
        }
        if(num.value.length>=max){
            num.nextElementSibling.focus();
        }
    
    }
    else if(num.id=='c'){
        input[2]=num.value;
        max=num.getAttribute("maxlength");
        if(input[0]==input[2]||input[1]==input[2]){
            num.value="";
        }
       else{
           check();
       }
    }

   
}

function check(){
    var strike=0;
    var ball=0;

    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(guess[i]==input[j]){
                if(i==j){
                    strike++;
                }
                else{
                    ball++;
                }
                break;
            }
        }
    }


    
    if(strike==3){
        display.value=input[0]+' '+input[1]+' '+input[2]+' : Home Run!!\n'+display.value;
    }
    else if(strike==0&&ball==0){
        display.value=input[0]+' '+input[1]+' '+input[2]+' : OUT!!!\n'+display.value;
    }
    else{
        display.value=input[0]+' '+input[1]+' '+input[2]+' :'+strike+'S '+ball+'B \n'+display.value;
    }

   inputInit();

}
     

  init();