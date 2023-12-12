class Logger<T> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      callback(item);
    });
  }
}

export default function play() {
  const logger = new Logger<string>();

  const cars = ["audi", "toyoda", "subaru"];

  logger.log(cars, (car) => {
    console.log(car);
  });
}
