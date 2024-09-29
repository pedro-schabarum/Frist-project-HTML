from flask import Flask, render_template, request, redirect, session, flash, url_for

class Lista_musicas:
    def __init__(self, titulo, url_foto) -> None:
        self.titulo=titulo
        self.url_foto=url_foto

musicas = [
    Lista_musicas(titulo="Prelúdio nº 1", url_foto="assets/prelude1.jpg"),
    Lista_musicas(titulo="Valsa do Pardal", url_foto="assets/valsa_do_pardal.jpg"),
    Lista_musicas(titulo="João e Maria - Infância", url_foto="assets/JMI.jpg"),
    Lista_musicas(titulo="Sintomas de euforia", url_foto="assets/sintomas_de_euforia.jpg"),
    Lista_musicas(titulo="Valsa do diabo", url_foto="assets/Valsa do Diabo.jpg"),
    Lista_musicas(titulo="Élégie pour un amour", url_foto="assets/élégie.jpg"),
    Lista_musicas(titulo="Flammen", url_foto="assets/flammen.jpg"),
    Lista_musicas(titulo="Yule", url_foto="assets/yule.jpg"),
    Lista_musicas(titulo="Prelúdio para cordas n° 1", url_foto="assets/prelude_for_strings.jpg")
]

musicas_JM = [
    Lista_musicas(titulo="Infância", url_foto="./assets/JMI.jpg"),
    Lista_musicas(titulo="Fome", url_foto="./assets/JMII.jpg"),
    Lista_musicas(titulo="Os pais discutem", url_foto="./assets/JMIII.jpg"),
    Lista_musicas(titulo="Na floresta", url_foto="./assets/JMIV.jpg"),
    Lista_musicas(titulo="Intermezzo", url_foto="./assets/JMINTERMEZZO.jpg"),
    Lista_musicas(titulo="A casa de doces", url_foto="./assets/JMV.jpg"),
    Lista_musicas(titulo="A bruxa", url_foto="./assets/JMVI.jpg"),
    Lista_musicas(titulo="Presos", url_foto="./assets/JMVII.jpg"),
    Lista_musicas(titulo="A bruxa morre", url_foto="./assets/JMVIII.jpg"),
    Lista_musicas(titulo="De volta pra casa", url_foto="./assets/JMfinal.jpg")
]


app = Flask(__name__)
app.secret_key = 'alura'
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/composicoes')
def composicoes():
    return render_template('composition.html', musicas=musicas, musicas_JM=musicas_JM)

@app.route('/musica', methods=['POST',])
def musica():

    musica = 'index'
    return render_template(musica)


app.run(debug=True)