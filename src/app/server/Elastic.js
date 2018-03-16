const { getBrands } = require('node-car-api');
const { getModels } = require('node-car-api');
var fs = require('fs');

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  hosts: ['http://localhost:9200']
});

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('Everything is ok');
  }
});


client.indices.create({
  index: 'cars'
}, function (err, resp, status) {
  if (err) {
    console.log(err);
  } else {
    console.log("create", resp);
  }
});



async function insertIntoElastic() {
  const brands = await getBrands();
  console.log(brands);
  const cars = [];
  brands.forEach(async brand => {
    var carsWithBrand = await getModels(brand);
    carsWithBrand.forEach(car => {
      cars.push(car);
    });
    fs.writeFileSync('cars.json', JSON.stringify(cars),'UTF-8'); });

}
/*
  cars.forEach(car => {
    client.index({
      index: 'cars',
      id: car.uuid,
      type: 'car',
      body: {
        "brand": car.brand,
        "model": car.model,
        "volume": car.volume,
        "name": car.name
      }
    }, function (err, resp, status) {
      console.log(resp);
    });
  });
};
*/

insertIntoElastic();
exports.insertElastic = insertIntoElastic;