import boitindrakitraRepositorie from "../../repositories/Boitindrakitra/boitindrakitraRepositorie.js";

async function readBoitindrakitra() {
  return boitindrakitraRepositorie.findBoitindrakitra()
}


export default {
    readBoitindrakitra,
};
