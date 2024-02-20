let temponatela = document.getElementById("tempos")

let milisegundos = document.getElementById("temposmsegundos")
let Numeros = document.getElementById("input")
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
let Horas;
let Minutos;
let Segundos;
let Segundosc = 0;
let Minutosc = 0;
let Horasc = 0;
let MSegundosc = 0;

let Resetado = false;
let Pausado = false;
let intervalo;

let Ttemporizador = document.getElementById("Temporizador")
let Cronômetro = document.getElementById("Cronômetro")

let IniciarBtn = document.getElementById("IniciarBtn")
IniciarBtn.addEventListener("click", () => {
    
    if(!Pausado){
        IniciarBtn.style.display = "none"
        PausarBtn.style.display = "block"
        ResetarBtn.style.display = "block"
    if(radesc[0].checked){
       
    let duração = (parseInt(horas.value) * 60 * 60)
    + (parseInt(minutos.value) * 60) + (parseInt(segundos.value));

    temporizador(duração, temponatela);

    }else if(radesc[1].checked) {
        
        
        function formato(timer){
            return timer < 10 ? `0${timer}` : timer
        }
        function formatom(timer){
            return timer < 100 ? `0${timer}` : timer
        }
         intervalo = setInterval(() => {
           
            if(!Pausado){
                MSegundosc += 10
                if((MSegundosc === 1000)){
                    Segundosc++;
                    MSegundosc = 0;
                    if(Segundosc === 60){
                        Minutosc++;
                        Segundosc = 0;
                    }
                    if(Minutosc === 60){
                        Horasc++;
                        Segundos = 0;
                    }
                }
                temponatela.innerHTML = formato(Horasc)
                temponatela.innerHTML +=  `:`
                temponatela.innerHTML += formato(Minutosc)
                temponatela.innerHTML +=  `:`
                temponatela.innerHTML += formato(Segundosc)
                temponatela.innerHTML +=  `:`
                temponatela.innerHTML += formatom(MSegundosc)
            }
            if(Resetado){
                clearInterval(intervalo)
                temponatela.innerHTML = '00:00:00:000'
                Resetado = false
            }
        }, 10);
}
    }
})


const temporizador = (duração, temponatela) =>{

    let temporizador = duração;

    

    intervalo = setInterval(() => {
        
        Horas = Math.floor((temporizador / 60) / 60);
        Minutos = Math.floor(temporizador / 60) - (Horas * 60)
        Segundos = Math.floor(temporizador % 60);
        Horas = Horas< 10 ? `0${Horas}` : Horas;
        Minutos = Minutos < 10 ? `0${Minutos}` : Minutos;
        Segundos = Segundos < 10 ? `0${Segundos}`: Segundos;
        temponatela.innerHTML = `${Horas}:${Minutos}:${Segundos}`
        if(!Pausado){
        temporizador--
        if(temporizador < 0){
            temponatela.innerHTML = "Acabou!!"
            IniciarBtn.style.display = "block";
            ContinuarBtn.style.display = "none"
            PausarBtn.style.display = "none"
            clearInterval(intervalo)
        }
    if(Resetado){
        clearInterval(intervalo)
        temponatela.innerHTML = "00:00:00"
        Resetado = false
    }}
    }, 1000);
}
let PausarBtn = document.getElementById('PausarBtn')
PausarBtn.addEventListener("click",() => {
    Pausado = !false
    ContinuarBtn.style.display = "block"
    PausarBtn.style.display = "none"
})
let ContinuarBtn = document.getElementById("ContinuarBtn")
ContinuarBtn.addEventListener("click",() => {
    Pausado = false
    ContinuarBtn.style.display = "none"
    PausarBtn.style.display = "block"
})
let ResetarBtn = document.getElementById("ResetarBtn")
ResetarBtn.addEventListener("click", ( ) => {
  
    
    Horas = 0
    Minutos = 0
    Segundos = 0
    horas.value = '00'
    minutos.value = '00'
    segundos.value  = '00'
    IniciarBtn.style.display = "block";
    ContinuarBtn.style.display = "none"
    PausarBtn.style.display = "none"
    if(radesc[1].checked){
        MSegundosc = 0
        Segundosc = 0
        Minutosc = 0
        Horasc = 0
        Pausado = true
        temponatela.innerHTML = `00:00:00:000`
    }
    return Resetado = true, Pausado = false;
  
   
   
   
    
    
    
})
let SelecionarBtn = document.getElementById("SelecionarBtn")
SelecionarBtn.addEventListener("click", () => {
    if(radesc[0].checked){
        
        temponatela.innerHTML = `00:00:00`
        Numeros.style.display = "block"
        Ttemporizador.style.display = "block"
        milisegundos.style.display = "none"
        Cronômetro.style.display = "none"
        IniciarBtn.style.display = "block";
        ResetarBtn.style.display = "none"
    ContinuarBtn.style.display = "none"
    PausarBtn.style.display = "none"
     
    } else {
        temponatela.innerHTML = `00:00:00:000`
        Numeros.style.display = "none"
        Cronômetro.style.display = "block"
        Ttemporizador.style.display = "none"
        milisegundos.style.display = "block"
        IniciarBtn.style.display = "block";
        ResetarBtn.style.display = "none"
    ContinuarBtn.style.display = "none"
    PausarBtn.style.display = "none"
     
    }
    
})
let radesc = document.getElementsByName('radesc')





