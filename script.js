function displayNumber(num){
    if(num=="AC"){
        result.value=""
    }
    else if(num=="del"){
        result.value = result.value.slice(0, -1);
    }
    else{
        result.value +=num; 
    }
    

}
function operation(){
    result.value = eval(result.value);
    
}