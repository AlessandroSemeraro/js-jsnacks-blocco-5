const listPlayers = [
{
    name:"Lucia",
    cognome:" fuffi",
    età:15,
},
{
    name:"Antonio",
    cognome:" Pelgo",
    età:40,
},
{
    name:"Leonardo",
    cognome:" polpofi",
    età:10,
},
{
    name:"caronte",
    cognome:" fifi",
    età:19,
},
{
    name:"porzia",
    cognome:" melandri",
    età:35,
},
{
    name:"acirilico",
    cognome:" fellini",
    età:80,
}
];

let listDriverPlayers = listPlayers.map((driver)=>{
    if ( driver.età < 18){
        return driver.name + driver.cognome + " non può guidare"
    }
    else if ( driver.età >= 18){
        return driver.name + driver.cognome + " può guidare"
    }
    
})
console.log(listDriverPlayers)
  