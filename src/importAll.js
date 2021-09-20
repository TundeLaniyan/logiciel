import { camelCase } from "lodash";

const importAll = () => {
  const r = require.context("./img", false, /\.(png|jpe?g|svg)$/);
  let images = {};
  r.keys().forEach((item) => {
    images[camelCase(item.replace("./", "").split(".")[0])] = r(item).default;
  });
  return images;
};

export default importAll();
