import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }
  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');
  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};
export default swRegister;

// const swRegister = async () => {
//   if ('serviceWorker' in navigator) {
//     // await runtime.register();
//     try {
//       await navigator.serviceWorker.register('./sw.bundle.js');
//       console.log('service worker registration success');
//     } catch (error) {
//       console.log('service worker registration success');
//     }

//     return;
//   }
//   console.log('Service worker not supported in this browser');
// };
// export default swRegister;
