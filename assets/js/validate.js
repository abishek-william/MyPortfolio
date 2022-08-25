function setError(id,error){
    element = document.getElementById(id);
    element.getElementByClassName('formerror').innerHTML = error;
}

function validateForm(){
    var returnval = true;
    var name= document.forms['myform']["fname"].value;
    if(name.length<5){
        setError("name","*Length of name is too short");
        returnval = false;
    }

    return returnval;
}
 