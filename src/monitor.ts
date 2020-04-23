/* 页面监控 */
// reference: https://github.com/forthealllight/blog/issues/38

(() => {
  addEvent('load', (ev) => {
    console.group('load');
    console.info(performanceMonitor());
    console.groupEnd();
  });
  addEvent('DOMContentLoaded', (ev) => {
    console.group('DOMContentLoaded');
    console.info(performanceMonitor());
    console.groupEnd();
  });
  ws('pushState', () => {
    console.group('pushState');
    console.info(performanceMonitor());
    console.groupEnd();
  });
})();

// TODO: 根据 业务id / 页面id 来进行监控 pushState 单页监控处理
function ws(type: string, cb: () => void) {
  const history: any = window.history;
  const originTypeOfHistory = history[type];
  history[type] = function() {
    setTimeout(cb);
    return originTypeOfHistory.bind(this, arguments);
  };
}

function addEvent(type: string, callback: (ev: any) => void) {
  return window.addEventListener(type, callback);
}

function performanceMonitor() {
  if (!window.performance || !performance.timing) {
    return 'not support the performance, please supplement it ...';
  }
  let timestamp = 0;
  let first = 0;
  let str = '';
  let len = 0;
  let mergeList = [];
  const report = performance.navigation.type;
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
        return [proto, NaN];
      }
    })
    .filter((item: any[]) => !isNaN(item[1]));

  performanceTimes = performanceTimes.sort((a: any[], b: any[]) => a[1] - b[1]);

  // if (report === 1) {
  //   return performanceTimes;
  // }

  len = performanceTimes.length - 1;
  mergeList = performanceTimes.map((item, i) => {
    if (item[2] > 100) {
      (item[2] as number) /= 1000;
      item[2] += ' s';
    } else {
      item[2] += ' ms';
    }

    if (i === 0 || i === len) {
      item[0] = '(ts:' + item[1] + ')' + '\n' + item[0];
    }

    return '\n' + item[0] + ' = ' + item[2];
  });

  str = '\n' + location.href + '\n' + new Date().toLocaleString() + '\n';
  return str + mergeList.join('\n');
}
