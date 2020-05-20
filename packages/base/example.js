import * as eslint from "eslint"; // eslint-disable-line no-unused-vars, import/order
import * as index from "."; // eslint-disable-line no-unused-vars

// eslint-disable-next-line complexity
((name) => {
  if (name.length > 0) {
    console.log(name); // eslint-disable-line no-console
  }

  if (name.length > 1) {
    return;
  }

  if (name.length > 2) {
    return;
  }

  if (name.length > 3) {
    return;
  }

  if (name.length > 4) {
    return;
  }

  if (name.length > 6) {
    return;
  }

  return true;
})();

export default function () {
  return true;
}

const one = 1;
export const two = one;
