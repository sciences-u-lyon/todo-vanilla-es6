export const qs = (selector, from = document) => from.querySelector(selector);
export const qsAll = (selector, from = document) => from.querySelectorAll(selector);
export const on = (target, eventName, callback) => {
  target.addEventListener(eventName, callback);
};
export const newElement = element => document.createElement(element);
export const uniqueId = () => new Date().getTime();
