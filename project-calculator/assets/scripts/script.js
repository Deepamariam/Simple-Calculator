function display(val) 
{ 
    document.getElementById("result").value+=val 
} 
  
//function that evaluates the digit and return result 
function solve() 
{ 
    

    /*try{
        (document.getElementsById("result").value = "")
    }

    catch(err){

        document.getElementsById("result").value = ""
    } */
    
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 

    

} 
  
//function that clear the display 
function clearvalue() 
{ 
    document.getElementById("result").value = "  "
} 
