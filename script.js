document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById("audioPlayer");

    function carregarMusicas() {
        var musicas = [
            "mp3/Valsa do pardal orquestra.mp3",
            "mp3/#Prelude_for_strings.mp3",
            "mp3/Dream rest.mp3",
            "mp3/Fantasy in D minor.mp3",
            "mp3/Flammen.mp3",
            "mp3/Quarteto de tubas.mp3",
            "mp3/Scherzo.mp3",
            "mp3/sintomas de euforia.mp3",
            "mp3/Sonata nº X.mp3",
            "mp3/Trio_for_Strings.mp3",
            "mp3/Valsa do Diabo.mp3",
            "mp3/Valsa do pardal orquestra.mp3",
            "mp3/Valsa em Amenor.mp3",
            "mp3/Valsa em Cmenor.mp3",
            "mp3/Walk trought the Mountain.mp3"
        ];

        // Sorteia um índice aleatório para escolher uma música
        var indiceSorteado = Math.floor(Math.random() * musicas.length);

        // Atualiza o atributo 'src' do elemento de áudio com a música sorteada
        audioPlayer.src = musicas[indiceSorteado];
    }

    // Carrega as músicas quando a página é carregada
    carregarMusicas();
});
