const { contextBridge, ipcRenderer } = require('electron') 

contextBridge.exposeInMainWorld(
    'ipcRenderer',
    {
        onceInitData: (cb) => {
            //once vs on => once une fois qu'il est exec, il est détruit
            ipcRenderer.once('init-data', cb)
        }
    }
)