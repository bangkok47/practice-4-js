import { getJSON } from './task-1.js';

export default function getSequential(urls) {
  let result = [];

  return new Promise((res, rej) => {
    urls.forEach((url) => {
      getJSON(url)
        .then((response) => {
          result.push(response);
          if (result.length === urls.length) {
            res(result);
          }
        })
        .catch(() => rej(new Error(`“failed to fetch ${url}”`)));
    });
  });
}
