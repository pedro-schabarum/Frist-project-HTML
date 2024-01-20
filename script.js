document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById("audioPlayer");

    function carregarMusicas() {
        var musicas = [
            "mp3/a do sonho.mp3",
            "mp3/Valsa do pardal orquestra.mp3"
            // Adicione mais músicas conforme necessário
        ];

        // Sorteia um índice aleatório para escolher uma música
        var indiceSorteado = Math.floor(Math.random() * musicas.length);

        // Atualiza o atributo 'src' do elemento de áudio com a música sorteada
        audioPlayer.src = musicas[indiceSorteado];
    }

    // Carrega as músicas quando a página é carregada
    carregarMusicas();
});
