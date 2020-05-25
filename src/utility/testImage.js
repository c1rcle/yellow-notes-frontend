const testImage = (url, timeoutT) => {
  return new Promise((resolve, reject) => {
    let timeout = timeoutT || 5000;
    let timer,
      img = new Image();
    img.onerror = img.onabort = () => {
      clearTimeout(timer);
      reject('Invalid URL!');
    };
    img.onload = () => {
      clearTimeout(timer);
      resolve('success');
    };
    timer = setTimeout(() => {
      img.src = '//!!!!/test.jpg';
      reject('timeout');
    }, timeout);
    img.src = url;
  });
};

export default testImage;
