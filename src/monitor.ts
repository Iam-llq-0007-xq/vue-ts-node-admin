/* 页面监控 */
// reference: https://github.com/forthealllight/blog/issues/38

/* addEvent('load', (ev) => {
  console.log('load ...', performance.timing.loadEventEnd, performance.timing.navigationStart);
  performanceMonitor();
});


document.addEventListener('DOMContentLoaded', () => {
  console.log('3 seconds passed');
  performanceMonitor();
});
ws('pushState');

function addEvent(type: string, callback: (ev: any) => void) {
  return window.addEventListener(type, callback);
}

function ws(type: string) {
  const history: any = window.history;
  const originTypeOfHistory = history[type];
  history[type] = function() {
    performanceMonitor();
    return originTypeOfHistory.bind(this, arguments);
  };
}

function performanceMonitor() {
  const timing = performance.timing;
  const start = timing.navigationStart;
  let dnsTime = 0;
  let tcpTime = 0;
  let firstPaintTime = 0;
  let domRenderTime = 0;
  let loadTime = 0;

  dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
  tcpTime = timing.connectEnd - timing.connectStart;
  firstPaintTime = timing.responseStart - start;
  domRenderTime = timing.domContentLoadedEventEnd - start;
  loadTime = timing.loadEventEnd - start;

  console.log(`
    \nDNS解析时间: ${dnsTime / 1000} s
    \nTCP建立时间: ${tcpTime / 1000} s
    \n首屏时间: ${firstPaintTime / 1000} s
    \ndom渲染完成时间: ${domRenderTime / 1000} s
    \n页面onload时间: ${loadTime / 1000} s
  `);
}
 */

addEvent('load', (ev) => {
  console.log('load ...', performance.timing.loadEventEnd, performance.timing.navigationStart);
  console.log(performanceMonitor());
});

function addEvent(type: string, callback: (ev: any) => void) {
  return window.addEventListener(type, callback);
}

// https://stackoverflow.com/questions/7606972/measuring-site-load-times-via-performance-api
function performanceMonitor() {
  if (!window.performance || !performance.timing) {
    return 'not support the performance, please supplement it ...';
  }
  let timestamp = 0;
  let first = 0;
  let str = '';
  let len = 0;
  let mergeList = [];
  // const report = performance.navigation.type;
  let performanceTimes = [
    'navigationStart',
    'unloadEventStart',
    'unloadEventEnd',
    'redirectStart',
    'redirectEnd',
    'fetchStart',
    'domainLookupStart',
    'domainLookupEnd',
    'connectStart',
    'connectEnd',
    'secureConnectionStart',
    'requestStart',
    'responseStart',
    'responseEnd',
    'domLoading',
    'domInteractive',
    'domContentLoadedEventStart',
    'domContentLoadedEventEnd',
    'domComplete',
    'loadEventStart',
    'loadEventEnd',
  ]
    .map((proto) => {
      timestamp = (performance as any).timing[proto];
      if (isFinite(timestamp) && timestamp !== 0) {
        if (!first) {
          first = timestamp;
        }
        return [proto, timestamp, timestamp - first];
      } else {
        return [1, NaN];
      }
    })
    .filter((item: any[]) => !isNaN(item[1]));

  performanceTimes = performanceTimes.sort((a: any[], b: any[]) => a[1] - b[1]);

  // if (report === 1) {
  //   return performanceTimes;
  // }
  
  len = performanceTimes.length - 1;
  mergeList = performanceTimes.map((item, i) => {
    if (i > 0 && performanceTimes[i - 1][2] !== item[2]) {
      item[0] = '\n' + item[0];
    }
    if (i === 0 || i === len) {
      item[0] = '\n' + '(ts:' + item[1] + ')' + '\n' + item[0];
      (item[2] as number) /= 1000;
      item[2] += ' seconds elapsed \n';
    }

    return item[0] + ' = ' + item[2];
  });

  str = '\n' + location.href + '\n' + new Date().toLocaleString();
  return str + mergeList.join('\n');
}
