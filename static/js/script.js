// document.addEventListener("DOMContentLoaded", function () {

//   var audioPlayer = document.getElementById("audioPlayer");

//   function carregarMusicas() {
//     var musicas = [
//       "mp3/Valsa do pardal orquestra.mp3",
//       "mp3/Dream rest.mp3",
//       "mp3/Quarteto de tubas.mp3",
//       "mp3/Scherzo.mp3",
//       "mp3/Sonata nº X.mp3",
//       "mp3/Trio_for_Strings.mp3",
//       "mp3/Valsa em Amenor.mp3",
//       "mp3/Valsa em Cmenor.mp3",
//       "mp3/Walk trought the Mountain.mp3",
//       "mp3/Aquele com piano e a harpa.mp3"
//     ];

//     // Sorteia um índice aleatório para escolher uma música
//     var indiceSorteado = Math.floor(Math.random() * musicas.length);

//     // Atualiza o atributo 'src' do elemento de áudio com a música sorteada
//     audioPlayer.src = musicas[indiceSorteado];
//   }
  
//   // Carrega as músicas quando a página é carregada
//   carregarMusicas();
// });

document.addEventListener("click", (e) => {
  const targetCard = e.target.closest(".card");
  const targetContainer = e.target.closest(".container");

  if (targetCard && targetContainer) {
    const cardsContainer = targetContainer;

    cardsContainer.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
    });

    targetCard.classList.add("active");
  }
});

