const fighters = [
    {
        name: 'Solaire of Astora: Warrior',
        value: {
            hp: 200,
            atk: 7,
            def: 7,
            name: 'Solaire of Astora',
            shortName: 'Solaire',
            attackDescription: 'hurls a spear of lightning',
        },
    },
    {
        name: 'Siegmeyer of Catarina: Knight',
        value: {
            hp: 220,
            atk: 5,
            def: 9,
            name: 'Siegmeyer of Catarina',
            shortName: 'Siegmeyer',
            attackDescription: 'charges his foe and takes a swipe',
        }
    },
    {
        name: 'Big Hat Logan: Sorceror',
        value: {
            hp: 180,
            atk: 9,
            def: 6,
            name: 'Big Hat Logan',
            shortName: 'Logan',
            attackDescription: 'casts Crystal Soul Spear',
        }
    },
    {
        name: 'Rhea of Thoroland: Priestess',
        value: {
            hp: 200,
            atk: 8,
            def: 6,
            name: 'Rhea of Thoroland',
            shortName: 'Rhea',
            attackDescription: 'conjures the Wrath of the Gods',
        }
    },
    
];

const bosses = [
    {
        name: 'Manus, Father of the Abyss',
        hp: 700,
        atk: 7,
        shortName: 'Manus',
        attackDescription: 'flails and thrashes wildly',
    }, {
        name: 'Gravelord Nito',
        hp: 500,
        atk: 5,
        shortName: 'Nito',
        attackDescription: 'unleashes a deadly miasma upon you',
    }, {
        name: 'Gwyn, Lord of Cinder',
        hp: 500,
        atk: 6,
        shortName: 'Gwyn',
        attackDescription: 'lunges toward you with sword aflame',
    }, {
        name: 'Seath the Scaleless',
        hp: 500,
        atk: 5,
        shortName: 'Seath',
        attackDescription: 'exhales crystal breath upon you',
    }, {
        name: 'Bed of Chaos',
        hp: 400,
        atk: 6,
        shortName: 'The Chaos',
        attackDescription: 'unleashes deadly pillars of flame',
    }, {
        name: 'Four Cheese Pizzas',
        hp: 400,
        atk: 5,
        shortName: 'The Pizzas',
        attackDescription: 'use Sausage and Onion and Pepperoni',
    }
];

module.exports = { fighters, bosses };
