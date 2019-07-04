import * as jsonServer from 'json-server'
import { Express } from 'express'
import * as fs from 'fs'
import * as https from 'https'

const port = 3001;

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.bodyParser)

server.post('/login', (req, resp) => {
    resp.json({ message: 'ok' })
})

server.use(router)

const options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(port, () => {
    console.log(`JSON Server is running on: https://localhost:${port}`)
})

