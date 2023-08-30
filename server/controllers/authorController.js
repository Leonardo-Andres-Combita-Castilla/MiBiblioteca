const authors = require ('../Models/authorModel')

exports.getAllAuthors = async (req, res) => {
    const author = await authors.find()
    return res.status(200).json(author)
}

exports.getOneAuthor = async (req, res) => {
    const {id} = req.params;
    const author = await authors.findById(id)
    return res.status(200).json(author)
}

exports.createAuthor = async (req, res) => {
    const newAuthor = new authors ({...req.body})
    const insertedAuthor = await newAuthor.save()
    return res.status(201).json(insertedAuthor)
}

exports.updateAuthor = (req, res) => {
    const {id} = req.params;
    const toEdit = req.body;
    authors.findOneAndUpdate ({_id: id}, toEdit, {new: true})
    .then ((updateAuthor) => {
        res.json(updateAuthor)
    })
}

exports.deleteAuthor = async (req, res) => {
    const {id} = req.params
    const AuthorToDelete = await authors.findByIdAndDelete(id)
    return res.status(202).json(AuthorToDelete)
}

