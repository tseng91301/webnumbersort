let inputValue;
var option;
function getValueInput(){
    var option2;
    inputValue = document.getElementById("element").value; 
    option2 = document.getElementsByName('opti');
    for(a=0;a<option2.length;a++){
        if(option2[a].checked){
            //alert(option2[a].value);
            option=option2[a].value;
        }
    }
    if(option=="sl"){
        //alert("chosl");
        sortsl();
    }else if(option=="ls"){
        sortls();
    }
}
function sortsl(){
    
    var a1=countn();
    a1.sort(function(a,b){
        return a-b;
    });
    /*for(a=0;a<a1.length;a++){
        var ord=0;
        for(b=0;b<a1.length;b++){
            if(a1[a]>a1[b]){
                ord++;
            }
        }
        var tm3=a1[ord];
        a1[ord]=a1[a];
        a1[a]=tm3;
    }*/
    //alert(a1);
    printso(a1);

    //document.getElementById("valueInput").innerHTML = a1;
    
}
function sortls(){
    
    var a1=countn();
    a1.sort(function(a,b){
        return b-a;
    });
    /*for(a=0;a<a1.length;a++){
        var ord=0;
        for(b=0;b<a1.length;b++){
            if(a1[a]<a1[b]){
                ord++;
            }
        }
        var tm3=a1[ord];
        a1[ord]=a1[a];
        a1[a]=tm3;
    }*/
    //alert(a1);
    printso(a1);

    //document.getElementById("valueInput").innerHTML = a1;
    
}
function printso(sss){
    var output="";
    for(a=0;a<sss.length;a++){
        output+=sss[a]+'\n';
    }
    document.getElementById("valueInput").innerHTML = output;
}
function countn(){
    var amo=1;
    for(aa=0;aa<inputValue.length;aa++){
        if(inputValue[aa]=='\n'){
            amo++;
        }
    }
    
    //return(amo);
    var tm2=0;
    var comp=[];
    
    for(aa=0;aa<amo;aa++){
        var altn="";
        
        while(inputValue[tm2]!='\n'&&inputValue[tm2]!=undefined){
            //alert("countn");
            altn+=inputValue[tm2];
            tm2++;
        }
        tm2++;
        var num=Number(altn);
        
        comp[aa]=num;
        
        
    }
    //alert(comp);
    return(comp);
}
