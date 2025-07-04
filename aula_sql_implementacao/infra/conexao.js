import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'nozomi.proxy.rlwy.net',
    user: 'root',
    password: 'VdpPXvTeJUfuLNGGAmoXXcLyEaVBSnDz',
    database: 'railway',
    port: 50146,
})

conexao.connect()

export default conexao