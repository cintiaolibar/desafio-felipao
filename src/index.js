
let xp = 13.000;
let nivelDoHeroi;
let nome = "Vortex";


if (xp <= 1.000) {
    nivelDoHeroi = "Ferro";

  } else if (xp >= 1.001 && xp <= 2.000){
    nivelDoHeroi = "Bronze";
  } else if (xp >= 2.001 && xp <= 5.000){
    nivelDoHeroi = "Prata";
  } else if (xp >= 6.001 && xp <= 7.000){
    nivelDoHeroi = "Ouro";
  } else if (xp >= 7.001 && xp <= 8.000){
    nivelDoHeroi = "Platina";
  } else if (xp >= 8.001 && xp <= 9.000){
    nivelDoHeroi = "Ascendente";
  } else if (xp >= 9.001 && xp <= 10.000){
    nivelDoHeroi = "Imortal"
  } else if (xp >= 10.001){
    nivelDoHeroi = "Radiante"
  } 

console.log("O Herói de nome " + nome + "está no nível " + nivelDoHeroi);


