'use strict'

const Model = use('Model')

class GamingGear extends Model {
  static get table() {
    return 'gaming_gears'
  }

  static get createdAtColumn() {
    return 'created_at'
  }

  static get updatedAtColumn() {
    return 'updated_at'
  }

  static get fillable() {
    return ['name', 'type', 'price']
  }

  static get casts() {
    return {
      price: 'float'
    }
  }
}

module.exports = GamingGear