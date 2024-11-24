function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <10 ) {
                //criança
                img.setAttribute('src', 'fotobebem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotojovemM.jpg')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'fotoadultom.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10 ) {
                //criança
                img.setAttribute('src', 'fotobebef.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotojovemf.jpg')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src', 'fotoadultof.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoavo.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}