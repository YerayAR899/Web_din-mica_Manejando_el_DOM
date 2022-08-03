let newCollumn;

function addCollumn(){
    document.getElementById("tablaEjercicio").innerHTML += "<tr>";
    for(let i=0; i<4; i++){
        newCollumn = document.createElement("td");
        document.getElementById("tablaEjercicio").appendChild(newCollumn);
    }
}
