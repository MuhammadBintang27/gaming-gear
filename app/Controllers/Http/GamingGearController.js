'use strict'

const GamingGear = use('App/Models/GamingGear')
const Validator = use('Validator')

class GamingGearController {
  // Daftar tipe dan kategori yang diizinkan
  static get allowedTypes() {
    return ['Mouse', 'Keyboard', 'Headset', 'Monitor', 'Controller']
  }

  // GET /gaming-gears
  async index({ request, view }) {
    const type = request.input('type')
    console.log('Requested Type:', type)
  
    let query = GamingGear.query()
    if (type) {
      query = query.where('type', type)
    }
    
    const gears = await query.orderBy('id', 'asc').fetch() // Ambil semua data
    console.log('Gears:', gears.toJSON())
  
    return view.render('gaming_gears.index', {
      gears: gears,// Kirim semua data sebagai array JSON
      types: this.constructor.allowedTypes,
      selectedType: type || null
    })
  }

  // GET /gaming-gears/create
  async create({ view }) {
    return view.render('gaming_gears.create', {
      types: this.constructor.allowedTypes,
    })
  }

  // POST /gaming-gears
  async store({ request, response, session }) {
    const rules = {
      name: 'required|min:2',
      type: `required|in:${this.constructor.allowedTypes.join(',')}`,
      price: 'required|number|range:0.01,1000000',
    }

    const messages = {
      'name.required': 'Name is required',
      'name.min': 'Name must be at least 2 characters',
      'type.required': 'Type is required',
      'type.in': 'Invalid type selected',
      'price.required': 'Price is required',
      'price.number': 'Price must be a number',
      'price.range': 'Price must be between 0.01 and 1,000,000',
    }

    

    await GamingGear.create(request.only(['name', 'type', 'price']))
    session.flash({ success: 'Gaming gear created successfully' })
    return response.redirect('/gaming-gears')
  }

  // GET /gaming-gears/:id
  async show({ params, view, session, response }) {
    if (isNaN(params.id)) {
      session.flash({ error: 'Invalid gear ID' })
      return response.redirect('/gaming-gears')
    }
    try {
      const gear = await GamingGear.findOrFail(params.id)
      console.log('Gear:', gear.toJSON()) // Debugging
      return view.render('gaming_gears.show', { gear })
    } catch (error) {
      console.error('Error:', error) // Debugging
      session.flash({ error: 'Gaming gear not found' })
      return response.redirect('/gaming-gears')
    }
  }

  // GET /gaming-gears/:id/edit
  async edit({ params, view, session, response }) {
    if (isNaN(params.id)) {
      session.flash({ error: 'Invalid gear ID' })
      return response.redirect('/gaming-gears')
    }
    try {
      const gear = await GamingGear.findOrFail(params.id)
      return view.render('gaming_gears.edit', {
        gear,
        types: this.constructor.allowedTypes,
      })
    } catch (error) {
      session.flash({ error: 'Gaming gear not found' })
      return response.redirect('/gaming-gears')
    }
  }

  // PUT /gaming-gears/:id
  async update({ params, request, response, session }) {
    const rules = {
      name: 'required|min:2',
      type: `required|in:${this.constructor.allowedTypes.join(',')}`,
      price: 'required|number|range:0.01,1000000',
    }

    const messages = {
      'name.required': 'Name is required',
      'name.min': 'Name must be at least 2 characters',
      'type.required': 'Type is required',
      'type.in': 'Invalid type selected',
      'price.required': 'Price is required',
      'price.number': 'Price must be a number',
      'price.range': 'Price must be between 0.01 and 1,000,000',
    }

    

    try {
      const gear = await GamingGear.findOrFail(params.id)
      gear.merge(request.only(['name', 'type', 'price']))
      await gear.save()
      session.flash({ success: 'Gaming gear updated successfully' })
      return response.redirect('/gaming-gears')
    } catch (error) {
      session.flash({ error: 'Failed to update gaming gear' })
      return response.redirect('/gaming-gears')
    }
  }

  // DELETE /gaming-gears/:id
  async destroy({ params, response, session }) {
    try {
      const gear = await GamingGear.findOrFail(params.id)
      await gear.delete()
      session.flash({ success: 'Gaming gear deleted successfully' })
      return response.redirect('/gaming-gears')
    } catch (error) {
      session.flash({ error: 'Failed to delete gaming gear' })
      return response.redirect('/gaming-gears')
    }
  }
}

module.exports = GamingGearController