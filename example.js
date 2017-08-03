'use strict'

const setAmpCORS = require('./')
const Koa = require('koa')
const app = new Koa()
const PORT = 3001;

app.use(setAmpCORS('.'))

app.listen(PORT, () => console.log(`Listening to ${PORT}`))