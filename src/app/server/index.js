const {getModels} = require('node-car-api');

async function print () {
  const models = await getModels('PEUGEOT');

  console.log(models);
}

print();