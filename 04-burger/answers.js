const { types, rares, potatos, souses, delivery } = require("./values");

exports.typesBurgers = types.map(o => `${o.name} (${o.price})`);
exports.typesRares = rares.map(o => `${o.name}`);
exports.typesPotatos = potatos.map(o => `${o.name}`);
exports.typesSouses = souses.map(o => `${o.name}`);
exports.typesDelivery = delivery.map(o => `${o.name}`);
