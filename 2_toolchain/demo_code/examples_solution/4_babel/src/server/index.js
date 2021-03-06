const express = require('express')
const path = require('path')

const app = express()

// assets. Static JS, CSS, fonts
app.use('/', express.static(path.join(__dirname, '../../dist')))

// SPA default configuration
// it is important to declare this after the assets rule
app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, '../../dist/index.html'));
})

// start server
const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`server running on port ${server.address().port}`)
})
