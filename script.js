const dgram = require('dgram');
const net = require('net')

const updServer = dgram.createSocket('udp4');
updServer.on('message', (msg, rinfo) => {
    console.log(`Pacote udp de ${rinfo.address} : ${rinfo.port}`)
});

updServer.on('listening', () => {
    const address = updServer.address()
    console.log(`Servidor UDP executando em ${address.address} :${address.port}`)
})

updServer.bind(12345);

const tcpServer = net.createSocket((socket) => {
    console.log(`Conexão tcp de ${socket.remoteAdress} : ${socket.remotePort}`)

    socket.on('data', (data) => {
        console.log(`Dados recebidos de: ${data}`)
    })

    socket.on('close', () => {
        console.log(`Conexão tcp `)
    })
})

tcpServer.listen(12345, () => {
    console.log('Servidor TCP escutando na porta 12345');
  });




c