# NextJS Exercise

#### Queste sono delle esercitazioni basiche e facili di NextJS
Un full-stack web è un sito web formato da 2 parti:

- Back-end
- Front-end

## Back-end
    Il back-end è la parte **non-visibile** di un full-stack web, un' API.
### Cos'è un' API?
API sta per `Application Programming Interface`, ovvero un interfaccia che permette di collegare un' applicazione ad un' altra anche se diversi. Come questo esercitamento.

Semplicemente crea una `comunicazione`. In questo caso "comunica" i dati di un database MongoDB al `Front-end`.

## Front-end
    Il front-end è la parte **visibile** di un full-stack web, presente in ogni sito web, anche in HTML vanilla.

Questa parte di web è fatta in file chiamati `JSX`, file che **non** verranno mai "comunicati" usando ispezione, in poche parole dati privati, che poi vengono trasformati in HTML/CSS/JS per essere compatibili con ogni browser, in questo caso io non ho utilizzato CSS essendo solo un esercizio per me.

Questa parte (in questo caso, si potrebbero fare molte altre request) può inviare (`POST` request), ricevere (`GET` request) o eliminare (`DELETE` request) dati dall'API.

Per connettere il `front-end` al `back-end` io ho usato ***Axios***, un pacchetto di NPM che permette di eseguire qualsiasi tipo di request.

Ovviamente si può fare anche senza usare ***Axios*** ma usando il metodo **fetch()**, ma per comodità io uso ***Axios***.

## Questa è una spiegazione molto minima ma utile per chi sta imparando. Non usate subito NextJS, ma imparate ReactJS prima.
------- 

## Come usare questa app
Per usare quest'app scaricate il file .zip da sopra.

Nella cartella **server** creare un file `config.json` con il seguente contenuto:
```json
{
    "mongo": "url_database_mongodb",
    "port": "3001" //vi consiglio di tenere questa porta, o dovrete modificare il component api
}
```

Per avviare l'API usare 
`node index.js`
nella cartella API.

Per avviare il front-end usare
`npm run dev`
nella cartella client.

------

# Altro

#### Questo è un esercizio molto basico, utile per chi sta iniziando ad approcciarsi ai *full-stack web*.
#### Quest'app è stata fatta interamente dal sottoscritto (SkryxDev) e può essere "scaricata" da tutti.

## Lascia una star <3