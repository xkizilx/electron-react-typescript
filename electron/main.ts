import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

const installDevExtensions = () => {

  [REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS].forEach(ext =>
    installExtension(ext)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err)));
}

const createWindow = async () => {
  const win = new BrowserWindow({ width: 800, height: 600 });

  if (!!app.isPackaged) {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  } else {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
    installDevExtensions();
    win.loadURL('http://localhost:2003');
    win.webContents.openDevTools()
  }

};

app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());
app.whenReady().then(createWindow);
