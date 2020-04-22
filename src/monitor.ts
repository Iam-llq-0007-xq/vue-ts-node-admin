/* 页面监控 */
// reference: https://github.com/forthealllight/blog/issues/38
// coding...

function addEvent(type: string, callback: (ev: any) => {}) {
  return window.addEventListener(type, callback);
}

function ws(type) {
  const origin = (window as any).history[type];
  return function() {
    
  }
}
