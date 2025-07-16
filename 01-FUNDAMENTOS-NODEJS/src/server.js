import http from 'node:http'

const users = []

const server = http.createServer(async(req, res) => {
  const { method, url } = req

  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const body = Buffer.concat(buffers).toString()

  const statusCode = res.writeHead(200)

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users), (statusCode))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      nome: "John Doe",
      email: "johndoe@exemple.com"
    })

    return res
      .end('Criação de usuario', (statusCode))
  }

  return res.end('Hello')
})

server.listen(3333)