const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const { fighters, bosses } = require('./characters');
const { getBossAttackValue, getFighterAttackValue } = require('./battle');

let fighter;
let boss;

const TIMEOUT = 2500;

;(function main () {
    boss = getRandomBoss();

    inquirer.prompt([{
        message: 'Choose your Fighter...',
        name: 'fighterChoice',
        choices: fighters,
        type: 'list',
    }]).then(answers => {
        fighter = answers.fighterChoice;
        print('red', `${fighter.shortName} faces ${fighter.shortName === 'Rhea'?'her':'his'} most dreaded foe yet... `)
        print('red', `...the sinister ${boss.name}`)

        bossAttacks();
    })


})();

function bossAttacks() {
    if (boss.hp <= 0) {
        return print('green', 'VICTORY ACHIEVED')
    }
    setTimeout(() => {
        print('black', `${boss.shortName} ${boss.attackDescription}...`);
        setTimeout(() => {
            const damage = getBossAttackValue(boss.atk);
            if (damage === 0) {
                print('blue', `${fighter.shortName} evades the attack, unharmed`)
            } else {
                fighter.hp -= damage;
                print('red', `${fighter.shortName} takes ${damage} damage. Total HP: ${fighter.hp || 0}`)
            }
            fighterAttacks();
        }, TIMEOUT);
    }, TIMEOUT)
}

function fighterAttacks() {
    if (fighter.hp <= 0) {
        return print('red', 'YOU ARE DEAD');
    }
    setTimeout(() => {
        print('black', `${fighter.shortName} ${fighter.attackDescription}...`)
        setTimeout(() => {
            const damage = getFighterAttackValue(fighter.atk);
            boss.hp -= damage;
            print('green', `${boss.shortName} takes ${damage} damage. Total HP: ${boss.hp || 0}`)
            bossAttacks();
        }, TIMEOUT);
    }, TIMEOUT)
}

function getRandomBoss() {
    return bosses[Math.floor(Math.random() * bosses.length)];
}

function print (color, ...message) {
    if (typeof chalk[color] != 'function') return console.log('no color', color)
    console.log(chalk[color](...message), '\n');
}


