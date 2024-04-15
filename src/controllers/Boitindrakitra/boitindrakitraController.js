import boitindrakitraService from '../../services/Boitindrakitra/boitindrakitraService.js';

async function getBoitindrakitra(req, res) {
    const amount = await boitindrakitraService.readBoitindrakitra()
  return res.json(amount)
}



export default { getBoitindrakitra };
