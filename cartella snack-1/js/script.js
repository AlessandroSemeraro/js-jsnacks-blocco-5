let listAuto = [
{
    marca: "FIAT",
    modello:  "PANDA",
    alimentazione:"BENZINA",
} ,
{
    marca: "RENAULT",
    modello: "CORSA",
    alimentazione:"DIESEL",
} ,
{ 
    marca: "FORD",
    modello: "CMAX",
    alimentazione:"ELETTRICA",
} ,
{
    marca: "CITROEN",
    modello: "C3",
    alimentazione:"METANO",
} ,
{
    marca: "MERCEDES",
    modello: "A2",
    alimentazione:"BENZINA",
},
{
    marca: "BMW",
    modello: "B1",
    alimentazione:"DIESEL",
},
{
    marca: "PIPPO",
    modello: "LOLLO",
    alimentazione:"ELETTRICA",
},
{
    marca: "GINO",
    modello: "GINETTI",
    alimentazione:"METANO",
},
{
    marca: "RETU",
    modello: "4X",
    alimentazione:"BENZINA",
},
{
    marca: "PORIPO",
    modello: "ERRE",
    alimentazione:"DIESEL", 
},
]

const carDiesel=listAuto.filter((carElement)=>{
    if (carElement.alimentazione == "DIESEL"){
        return true;
    }
})

const carBenzina=listAuto.filter((carElement)=>{
    if (carElement.alimentazione == "BENZINA"){
        return true;
    }
})

const carOthers=listAuto.filter((carElement)=>{
    if (carElement.alimentazione != "BENZINA" && carElement.alimentazione != "DIESEL"){
        return true;
    }
})

console.log(carDiesel);
console.log(carBenzina);
console.log(carOthers);
