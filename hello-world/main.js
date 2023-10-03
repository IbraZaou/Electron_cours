// on recupère seulement ce qui est nécessaire pour nous dans notre package electron
//ici app et BrowserWindow

const { app, BrowserWindow } = require('electron')
const path = require('path')
//fonction pour generer la page( vas nous creer une nouvelle page)
function generateBrowserWindow() {
    // browser window attend des paramètres ici une width et une height si on veut qu'il prennent toujours 100% de l'écran
    const window = new BrowserWindow({
        width: 1400,
        height: 1200,
    })
    //object de la class browser window
    //__dirname s'adapte au chemin ou il est
    window.loadFile(path.join(__dirname, 'src', 'views', 'home', 'home.html'))
}
//promesse (async await) code lu mais non bloquan permet d'avoir un call back sur la promesse. then les erreurs, catch le sucess
app.whenReady()
    //si succes afficher fenetre on utilise une fonction flècher
    .then(() => {
        generateBrowserWindow()
    })

// on rajoute ça car spécifique pour apple spécific mac
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        generateWindow()
    }
})
// on met en place le add event listner en premier lieu l'evenement puis le callback
// app. on ajout un listner sur l'évenement
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})