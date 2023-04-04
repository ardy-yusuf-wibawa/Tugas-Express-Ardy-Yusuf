exports.getUser = (req, res, next) => {
    res.send({
    pesan: 'Ini tugas API express JS',
    nama : 'Guntur',
    asal: 'Jakarta'    
    });
};