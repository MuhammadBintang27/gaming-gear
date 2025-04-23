'use strict'

   const Database = use('Database')
   const GamingGear = use('App/Models/GamingGear')

   class GamingGearSeeder {
     async run() {
       await Database.table('gaming_gears').truncate() // Kosongkan tabel sebelumnya
       await GamingGear.createMany([
         { name: 'Razer DeathAdder V2', type: 'Mouse', price: 59.99 },
         { name: 'Logitech G Pro X', type: 'Keyboard',  price: 129.99 },
         { name: 'SteelSeries Arctis 7', type: 'Headset',  price: 149.99 },
         { name: 'Dell Alienware 27', type: 'Monitor',  price: 499.99 },
         { name: 'Sony DualSense', type: 'Controller',  price: 69.99 },
         { name: 'Corsair K95 RGB', type: 'Keyboard',  price: 199.99 },
         { name: 'HyperX Cloud II', type: 'Headset', price: 99.99 },
         { name: 'ASUS ROG Swift', type: 'Monitor',  price: 799.99 },
         { name: 'Microsoft Xbox Elite', type: 'Controller',  price: 179.99 },
         { name: 'Logitech G502 Hero', type: 'Mouse', price: 49.99 },
       ])
     }
   }

   module.exports = GamingGearSeeder