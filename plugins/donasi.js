let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081317880558]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [081317880558]
│ • Dana [081317880558]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
