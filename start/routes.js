'use strict'

const Route = use('Route')
const GamingGearController = use('App/Controllers/Http/GamingGearController')

// Route utama menampilkan daftar gaming gears
Route.get('/', 'GamingGearController.index')

// Redirect /gaming-gears ke /
Route.get('/gaming-gears', ({ response }) => {
  return response.redirect('/')
})

// Routes resource lainnya (tanpa index)
Route.resource('gaming-gears', 'GamingGearController')
  .except(['index'])
  