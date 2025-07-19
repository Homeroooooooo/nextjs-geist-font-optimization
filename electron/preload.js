const { contextBridge, ipcRenderer } = require('electron')

// Exponer APIs seguras al renderer
contextBridge.exposeInMainWorld('electronAPI', {
  // Funciones para manejo de archivos
  openFileDialog: () => ipcRenderer.invoke('open-file-dialog'),
  saveFileDialog: () => ipcRenderer.invoke('save-file-dialog'),
  
  // Información del sistema
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  
  // Configuración de ventana
  minimizeWindow: () => ipcRenderer.invoke('minimize-window'),
  maximizeWindow: () => ipcRenderer.invoke('maximize-window'),
  closeWindow: () => ipcRenderer.invoke('close-window'),
  
  // Notificaciones
  showNotification: (title, body) => ipcRenderer.invoke('show-notification', title, body)
})
