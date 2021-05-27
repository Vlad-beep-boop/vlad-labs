export default function createObservableArray(array, callback) {
  callback(array);
  return new Proxy(array, {
    apply: function (target, thisArg, argumentsList) {
      callback(array);
      return thisArg[target].apply(this, argumentList);
    },
    deleteProperty: function (target, property) {
      callback(array);
      return true;
    },
    set: function (target, property, value, receiver) {
      target[property] = value;
      callback(array);
      return true;
    },
  });
}
