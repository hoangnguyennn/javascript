Array.prototype.concat2 = function (...valueN) {
  const paramsLength = valueN.length;
  let result = this;

  for (let i = 0; i < paramsLength; i++) {
    const valueI = valueN[i];
    if (Array.isArray(valueI)) {
      result = [...result, ...valueI];
    } else {
      result = [...result, valueI];
    }
  }

  return result;
};

Array.prototype.every2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    let callbackResult = false;
    if (thisArg) {
      callbackResult = callback.bind(thisArg)(this[i], i, this);
    } else {
      callbackResult = callback(this[i], i, this);
    }

    if (!callbackResult) {
      return false;
    }
  }

  return true;
};

Array.prototype.filter2 = function (callback, thisArg) {
  const length = this.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    let callbackResult = false;

    if (thisArg) {
      callbackResult = callback.bind(thisArg)(this[i], i, this);
    } else {
      callbackResult = callback(this[i], i, this);
    }

    if (callbackResult) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.find2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    let callbackResult = false;

    if (thisArg) {
      callbackResult = callback.bind(thisArg)(this[i], i, this);
    } else {
      callbackResult = callback(this[i], i, this);
    }

    if (callbackResult) {
      return this[i];
    }
  }
};

Array.prototype.findIndex2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    let callbackResult = false;

    if (thisArg) {
      callbackResult = callback.bind(thisArg)(this[i], i, this);
    } else {
      callbackResult = callback(this[i], i, this);
    }

    if (callbackResult) {
      return i;
    }
  }

  return -1;
};

Array.prototype.forEach2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (thisArg) {
      callback.bind(thisArg)(this[i], i, this);
    } else {
      callback(this[i], i, this);
    }
  }
};

Array.prototype.includes2 = function (valueToFind, fromIndex = 0) {
  const length = this.length;
  for (let i = fromIndex; i < length; i++) {
    if (this[i] === valueToFind) {
      return true;
    }
  }

  return false;
};

Array.prototype.indexOf2 = function (searchElement, fromIndex = 0) {
  const length = this.length;
  for (let i = fromIndex; i < length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

Array.prototype.lastIndexOf2 = function (searchElement, fromIndex) {
  if (!fromIndex) {
    fromIndex = this.length - 1;
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

Array.prototype.map2 = function (callback, thisArg) {
  const length = this.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    if (thisArg) {
      result[i] = callback.bind(thisArg)(this[i], i, this);
    } else {
      result[i] = callback(this[i], i, this);
    }
  }

  return result;
};

Array.prototype.pop2 = function () {
  const length = this.length;
  const willRemove = this[length - 1];
  this.length = length - 1;
  return willRemove;
};

Array.prototype.push2 = function (...elementN) {
  const n = elementN.length;
  let length = this.length;

  for (let i = 0; i < n; i++) {
    this[length++] = elementN[i];
  }

  return this.length;
};
