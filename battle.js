module.exports = {
    getFighterAttackValue,
    getBossAttackValue,
}

function getFighterAttackValue (fighterAtk = 0) {
    const modifier = 20;
    return Math.round(fighterAtk + fighterAtk * (Math.random() * modifier));
}

function getBossAttackValue (bossAtk = 0) {
    const evadeChance = 0.55;
    const modifier = 20;
    if (Math.random() > evadeChance) {
        return Math.round(bossAtk + bossAtk * (Math.random() * modifier));
    }
    return 0;
}