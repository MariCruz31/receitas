import receitas from "../models/receitas.js";

class ReceitaController {

    static getAllReceitas = (req, res) => {
        receitas.find((err, receitas) => {
            res.status(200).json(receitas);
        });
    };
 static createReceitas = (req,res) => {
    let receita = new receitas(req.body);

    receita.save((err) => {
        if (err) {
            res.status(500)
            .send({ message: `${err.message} - falha ao cadastrar`});
    } else {
        res.status(201).send(receita.toJSON());
    }
    });
 };

static getByIdReceitas = (req, res) => {
    const id = req.params.id;

    receitas.findById(id, (err, receitas) => {
        if (err) {
            res
            .status(400)
            .send({mensage: `${err.message} - Id da receita não localizado`})
        } else {
            res.status(200).send(receitas);
        }
    });
};

static updateReceitas = (req, res) => {
    const id = req.params.id;
    receitas.findByIdAndUpdate(id, { $set: req.body }, (err) => {
        if (!err) {
            res.status(200).send({ message: "receita atualizada com sucesso"});
        } else {
            res.status(500).send({message: err.message});
        }
    });
};
static deleteReceitas = (req, res) => {
    const id =req.params.id;
    receitas.findByIdAndDelete(id, (err) => {
        if (!err) {
        res.status(200).send({ message: "receita excluida com sucesso"});
     }  else {
    res.status(500).send({messae: err.message});
} 

});

};
static deleteAllReceitas =  async (req, res) => {

try {
    await receitas.deleteMany({});
    res
    .status(200)
    .send({ message: "todas as receitas foram removidas com sucesso"});
} catch (error) {
res.status(500).send({ message: error.message});
}
};

}
export default ReceitaController;