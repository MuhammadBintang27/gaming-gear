'use strict'

const Schema = use('Schema')

class GamingGearsSchema extends Schema {
  up() {
    this.create('gaming_gears', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('type').notNullable().index()
      table.decimal('price', 10, 2).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('gaming_gears')
  }
}

module.exports = GamingGearsSchema