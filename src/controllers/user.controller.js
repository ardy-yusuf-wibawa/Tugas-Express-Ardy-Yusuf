exports.getUser = (req, res, next) => {
    res.send({
        data: [
            {
                pesan: 'Ini tugas API express JS Kelompok 9',
                nama: 'Guntur',
                asal: 'Jakarta',
                kendaraan: ['sepeda', 'mobil', 'motor']
            },
            {
                pesan: 'Ini tugas API express JS Kelompok 9',
                nama: 'Angga',
                asal: 'Jakarta'
            },
            {
                pesan: 'Ini tugas API express JS Kelompok 9',
                nama: 'Anang',
                asal: 'Jakarta'
            },
            {
                pesan: 'Ini tugas API express JS Kelompok 9',
                nama: 'Ardy',
                asal: 'Jakarta'
            }
        ]
    });
};