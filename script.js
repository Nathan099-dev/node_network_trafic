const dgram =  require('dgram');
const net = require('net')

const updServer = dgram.createSocket('udp4');
updServer.on('message',(msg, rinfo) => {
    console.log(`Pacote udp de ${rinfo.address} : ${rinfo.port}`)
});

updServer.on('listening', () =>{
    const address = updServer.address()
    console.log(`Servidor UDP executando em ${address.address} :${address.port}`)
    
})