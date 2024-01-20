document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById("audioPlayer");

    function carregarMusicas() {
        var diretorioMusica = "mp3/";

        // Lê os arquivos na pasta e carrega uma música aleatória
        lerArquivos(diretorioMusica, function(musicas) {
            // Sorteia um índice aleatório para escolher uma música
            var indiceSorteado = Math.floor(Math.random() * musicas.length);

            // Atualiza o atributo 'src' do elemento de áudio com a música sorteada
            audioPlayer.src = diretorioMusica + musicas[indiceSorteado];
        });
    }

    function lerArquivos(diretorio, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var linhas = xhr.responseText.split(/\r?\n/);
                    var musicas = linhas.filter(linha => linha.endsWith(".mp3"));
                    callback(musicas);
                } else {
                    console.error("Erro ao carregar as músicas", xhr.status, xhr.statusText);
                }
            }
        };

        xhr.open("GET", diretorio, true);
        xhr.send();
    }

    // Carrega as músicas quando a página é carregada
    carregarMusicas();
});
