



firebase.initializeApp({
    apiKey: "AIzaSyAPXKjiTpMQbWWkYm6cAsXbbEORLL8r_jU",
    authDomain: "proyectowebventa.firebaseapp.com",
    projectId: "proyectowebventa"
});

var db = firebase.firestore();


function guardarMensajes() {

    var nombre = document.getElementById('txtName').value;
    var correo = document.getElementById('txtEmail').value;
    var numero = document.getElementById('txtPhone').value;
    var mensajes = document.getElementById('txtMsj').value;

    db.collection("mensaje").add({
        nombre: nombre,
        correo: correo,
        numero: numero,
        mensajes: mensajes
    })
        .then(function (docRef) {
            alert("Mensaje Enviado, Gracias por escribir");
            document.getElementById('txtName').value = "";
            document.getElementById('txtEmail').value = "";
            document.getElementById('txtPhone').value = "";
            document.getElementById('txtMsj').value = "";
            
            
        })
        .catch(function (error) {
            
            alert("Error el mensaje no pudo ser enviado "+error);
        });

}


