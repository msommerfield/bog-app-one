const Creature = require('../models/Creature.js')

const saved = async () => {
    await Creature.deleteMany()
    const fred = new Creature({name: 'Fred', description: 'dawg'})
    await fred.save()
    const sadie = new Creature({name: 'Sadie', description: 'pup'})
    await sadie.save()
    const emily = new Creature({name: 'Emily', description: 'sister' })
    await emily.save()
}

saved()