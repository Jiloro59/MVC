const bienvenue = (req,res) => {
    res.send("Bienvenue sur la page d'accueil")
}
const info = (req,res) => {
    res.json({nom : 'Joly', prenom : "Rémi"})
}

const accesInterdit = (req,res) => {
    res.statut(403).send('Erreur 403 - Accès interdit')
}

module.exports = {bienvenue,info,accesInterdit}