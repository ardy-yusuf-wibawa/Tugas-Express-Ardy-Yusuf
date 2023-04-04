const userId = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' },
  ];
  


exports.updateUser = (req, res, next) => {
    const userId = req.params.id;

    res.send({ message: `User ${userId} updated successfully` });
    console.log('hasilnya >> ', userId);
};
