const Empresa = require("./modelos/empresa.js");
const router = require("express").Router()

router.post("/criar", async function(req,res){
    const empresa = await criarEmpresa(req.body)
    res.status(200).json({
        msg: `Dados da empresa inseridos`
    })
})
router.post("/atualizar", async function(req,res){
    const empresa = await atualizarEmpresa(req.body,req.body.id)
    res.status(200).json({
        msg: `Dados da empresa atualizados`
    })
})
router.get("/buscar", async function(req,res){
    const empresas = await buscarTodos(req.body)
    res.status(200).json(empresas)
})
router.get("/buscar/:id", async function(req,res){
    const empresa = await buscarPorId(req.params.id)
    res.status(200).json(empresa)
})

async function criarEmpresa(empresa) {
    const empresaCriada = await Empresa.create({
        nome: empresa.nome,
        cnpj: empresa.cnpj
    })
    return empresaCriada
}

async function atualizarEmpresa(empresa, id) {
    const empresaEditada = await Empresa.update({
        nome: empresa.nome,
        cnpj: empresa.cnpj,
    },
        { where: { id: id } }
    )
    return empresaEditada
}

async function buscarPorId(id) {
    const empresa = await Empresa.findByPk(id)
    return empresa
}

async function buscarTodos() {
    const empresas = await Empresa.findAll()
    return empresas
}
module.exports = router