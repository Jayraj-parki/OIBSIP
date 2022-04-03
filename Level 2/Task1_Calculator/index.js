let input = document.getElementById("input")
let output = document.getElementById("output")
let storedAns="0";
const operation = ['/', '*', '+', '-','%']
const addToInput = (data) => {
    let size = input.innerText.length;
    let prev = input.innerText.charAt(size - 1);
    if(input.innerText==0){
        input.innerText = data
    }
    else if (data == prev && operation.includes(data)) {
        return;
    }
    else if (operation.includes(data) && operation.includes(prev)) {
        input.innerText = input.innerText.substring(0, size - 1);

        input.innerText += data
    }
    else {
        input.innerText += data
    }
}

const getSqrt=()=>{
    input.innerText = '√'
}

const changeSign=()=>{
    let size = input.innerText.length;
    let prev=''
    let i=0;
    if(operation.includes(input.innerText.charAt(size - 1))){
        return;
    }
    for(i=0;i<size;i++){
        let p=input.innerText.charAt(size - 1-i);
        if(operation.includes(p)){
           
            break;
        }else{
            prev= p+prev;
        }
    }
    if(input.innerText==0 || operation.includes(prev)){
        console.log(operation.includes(prev))
        return;
    }
    else{ 
            input.innerText = input.innerText.substring(0, size -i);
            input.innerText += `(-${prev})`
        
    }
}
const deleteOutput=()=>{
    let size = input.innerText.length;
    input.innerText = input.innerText.substring(0, size - 1);
    if(size==1){
        input.innerText = "0";
    }
}
const clearOutput=()=>{ 
    input.innerText = "0";
    output.innerText=""
}

const showResult=()=>{
    let size = input.innerText.length;
    if(input.innerText.charAt(0)=='√'){
        output.innerText= Math.sqrt(+input.innerText.substring(1,size))
        storedAns=output.innerText;
    }
    else{
        try{
            output.innerText=eval(input.innerText);
            storedAns=output.innerText;
        }
        catch(err){
            output.innerText='Error';
            storedAns=0;
        }
    }
}

const showAns=()=>{
    input.innerText = storedAns;
}
