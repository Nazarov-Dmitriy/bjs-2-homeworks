function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = {};
    let idx = cache.findIndex((item) =>
      args.join(",") == item.hash
    );
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }

    let result = func(...args);
    hash['hash'] = args.join(",");
    hash['value'] = result;

    cache.push(hash);
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  console.log(cache);
  return wrapper;
}



function debounceDecoratorNew(func, ms) {
  let isThrottled = false;

  return function () {

    if (isThrottled) {
      return;
    }
    isThrottled = true;
    setTimeout(() => {
      if (isThrottled) {
        isThrottled = false;
      }
      func();
    }, ms);
  };
}

function debounceDecorator2(func, ms) {
  let isThrottled = false;
  let savedThis;

  function wrapper() {
    savedThis = this;
    if (isThrottled) {
      return;
    }
    isThrottled = true;
    setTimeout(() => {
      if (isThrottled) {
        isThrottled = false;
      }
      func.apply(this);
      wrapper.count = wrapper.count + 1;
      return console.log(wrapper.count);
    }, ms);
  };

  wrapper.count = 0;
   return wrapper;
}

