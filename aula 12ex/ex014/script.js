function carregar() {
    var msg = document.getElementById('msg');     
    var img = document.getElementById('imagem'); 
    var data = new Date()
    var horas = data.getHours()
    
    msg.innerHTML = `Agora são ${horas} horas.`;

    if (horas >= 0 && horas < 12) {
        // BOM DIA!
        img.src = 'bomdia.jpg';
        document.body.style.backgroundColor = '#4E5B0D'; // Cor para manhã
    } else if (horas >= 12 && horas <= 18) {
        // BOA TARDE!
        img.src = 'boatarde.jpg';
        document.body.style.backgroundColor = '#FF3F18'; // Cor para tarde
    } else {
        // BOA NOITE!
        img.src = 'boanoite.jpg';
        document.body.style.backgroundColor = '#25331A'; // Cor para noite
    }
}
