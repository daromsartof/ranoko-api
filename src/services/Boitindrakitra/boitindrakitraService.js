import boitindrakitraRepositorie from "../../repositories/Boitindrakitra/boitindrakitraRepositorie.js";

async function readBoitindrakitra() {
  const history = await boitindrakitraRepositorie.findBoitindrakitra()
  console.log(history)
  const response = {
    sum: 0,
    history: []
  }
  history.map(h => {
    response.sum += h.credit,
    response.history.push(h)
  })

  return response
}


export default {
    readBoitindrakitra,
};
