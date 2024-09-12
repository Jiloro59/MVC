const router = require('./routers/route')
const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log("Serveur en écoute sur le port " + PORT)
})

app.use ('/', router)