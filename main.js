 import { app, BrowserWindow } from 'electron'
// const { app, BrowserWindow } = require('electron')
let win;

function createWindow(){
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgrounColor: '#ffff',
        icon:'file://${__dirname}/dist/WebServicesFZ/assets/Imagenes/AppIcons_4.png'
    })
        win.loadUrl('file://${__dirname}/dist/index.html');

        win.webContents.openDevTools()
        win.on('closed',function(){
            win = null
        })
}

app.on('ready', createWindow)

app.on('window-all-closed', function(){
    if(process.platform !== 'darwin')
    app.quit();
})

app.on('activate', function(){
    if(win == null)
    createWindow();
})