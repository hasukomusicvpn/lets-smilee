function valiName(){
    let name = document.getElementById('name');
    if(name.value == ""){
        alert("Pleave fill out your name!")
        return false;
    } else {
        localStorage.setItem('name',name.value);
    }
}