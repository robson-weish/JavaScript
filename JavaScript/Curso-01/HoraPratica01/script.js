function carregar(){
    var msg =  document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data =  new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora>=0 && hora <12)
    {
        img.src = "Imagens/Manhã.png"
        document.body.style.background='#ad77385d'
    }
    else if (hora >= 12 && hora <= 18)
    {
        img.src = "Imagens/Tarde.png" 
        document.body.style.background='#4266375d'

    }
    else 
    {
        img.src = "Imagens/Noite.png"  
        document.body.style.background='#1415295d'
    }
}