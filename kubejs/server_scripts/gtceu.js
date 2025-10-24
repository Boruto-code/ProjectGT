ServerEvents.recipes(event => {
    const gtceu = event.recipes.gtceu

    gtceu.world_collection("kubejs:overworld_1")
        .notConsumable("minecraft:grass_block")
        .circuit(0)
        .itemOutputs(Item.of("minecraft:sugar_cane", 32), Item.of("gtceu:rubber_sapling", 4),
            Item.of("minecraft:oak_sapling", 4), Item.of("minecraft:spruce_sapling", 4), 
            Item.of("minecraft:birch_sapling", 4), Item.of("minecraft:jungle_sapling", 4),
            Item.of("minecraft:acacia_sapling", 4), Item.of("minecraft:dark_oak_sapling", 4),
            Item.of("minecraft:mangrove_propagule", 4), Item.of("minecraft:cherry_sapling", 4)
        )
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    gtceu.matter_forge_mk1("kubejs:dark_matter")
        .notConsumable("#gtceu:circuits/ulv")
        .itemInputs(Item.of("projecte:aeternalis_fuel", 64), Item.of("kubejs:compressed_diamond_block", 64))
        .itemOutputs("projecte:dark_matter")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
})