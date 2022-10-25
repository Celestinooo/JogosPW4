const Jogo = require("./modelos/jogo.js");
const router = require("express").Router()

router.post("/criar", async function(req,res){
    const jogo = await criarJogo(req.body)
    res.status(200).json({
        msg: `Dados do jogo inseridos`
    })
})
router.post("/atualizar", async function(req,res){
    const jogo = await atualizarJogo(req.body, req.body.id)
    res.status(200).json({
        msg: `Dados do jogo atualizados`
    })
})
router.get("/buscar", async function(req,res){
    const jogos = await buscarTodos(req)
    res.status(200).json(jogos)
})
router.get("/buscar/:id", async function(req,res){
    const jogo = await buscarPorId(req.params.id)
    res.status(200).json(jogo)
})
router.get("/buscar/:idEmpresa", async function(req,res){
    const jogos = await buscarJogosPorEmpresa(req)
    res.status(200).json(jogos)
})

async function criarJogo(jogo) {
    const jogoCriado = await Jogo.create({
        nome: jogo.nome,
        descricao: jogo.descricao,
        avaliacao: jogo.avaliacao,
        anoLancamento: jogo.anoLancamento,
        empresaId: jogo.empresaId,
    })
    return jogoCriado
}

async function atualizarJogo(jogo, id) {
    const jogoEditado = await Jogo.update({
        nome: jogo.nome,
        descricao: jogo.descricao,
        avaliacao: jogo.avaliacao,
        anoLancamento: jogo.anoLancamento,
    },
        { where: { id: id } }
    )
    return jogoEditado
}

async function buscarPorId(id) {
    const jogo = await Jogo.findOne({where: {
        id: id
      }})
    return jogo
}

async function buscarTodos() {
    const jogos = await Jogo.findAll()
    return jogos
}

async function buscarJogosPorEmpresa(empresaId) {
    const jogos = await Jogo.findAll({where: {
        empresaId: empresaId
      }})
    return jogos
}

module.exports = router