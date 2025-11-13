ServerEvents.recipes(event => {
    const gtceu = event.recipes.gtceu

    gtceu.matter_annihilation("kubejs:magenta")
        .itemInputs(Item.of("projectexpansion:magenta_matter", 2))
        .EUt(-GTValues.VA[GTValues.EV])
        .duration(200)

    gtceu.metamorphosis("kubejs:steam")
        .circuit(1)
        .inputFluids(Fluid.of("minecraft:water", 81000))
        .outputFluids(Fluid.of("gtceu:steam", 81000))
        .EUt(GTValues.VA[GTValues.IV])
        .duration(1)

    gtceu.world_collection("kubejs:overworld_0")
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

    gtceu.world_collection("kubejs:overworld_1")
        .notConsumable("minecraft:grass_block")
        .circuit(1)
        .itemOutputs(Item.of("gtceu:raw_chalcopyrite", 20), Item.of("minecraft:raw_iron", 8), 
            Item.of("gtceu:raw_pyrite", 8), Item.of("minecraft:raw_copper", 8))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    gtceu.world_collection("kubejs:overworld_2")
        .notConsumable("minecraft:grass_block")
        .circuit(2)
        .itemOutputs(Item.of("gtceu:raw_magnetite", 12), 
            Item.of("gtceu:raw_vanadium_magnetite", 8), Item.of("minecraft:raw_copper", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    gtceu.world_collection("kubejs:overworld_3")
        .notConsumable("minecraft:grass_block")
        .circuit(3)
        .itemOutputs(Item.of("gtceu:raw_soapstone", 12), Item.of("gtceu:raw_talc", 8),
            Item.of("gtceu:raw_glauconite_sand", 8), Item.of("gtceu:raw_pentlandite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:overworld_4")
        .notConsumable("minecraft:grass_block")
        .circuit(4)
        .itemOutputs(Item.of("gtceu:raw_red_garnet", 12), Item.of("gtceu:raw_yellow_garnet", 8),
            Item.of("gtceu:raw_amethyst", 8), Item.of("gtceu:raw_opal", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:overworld_5")
        .notConsumable("minecraft:grass_block")
        .circuit(5)
        .itemOutputs(Item.of("gtceu:raw_almandine", 12), Item.of("gtceu:raw_pyrope", 8),
            Item.of("gtceu:raw_sapphire", 8), Item.of("gtceu:raw_green_sapphire", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(150)

    gtceu.world_collection("kubejs:overworld_6")
        .notConsumable("minecraft:grass_block")
        .circuit(6)
        .itemOutputs(Item.of("gtceu:raw_redstone", 12),
            Item.of("gtceu:raw_ruby", 8), Item.of("gtceu:raw_cinnabar", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(150)

    gtceu.world_collection("kubejs:overworld_7")
        .notConsumable("minecraft:grass_block")
        .circuit(7)
        .itemOutputs(Item.of("gtceu:raw_kyanite", 12), 
            Item.of("gtceu:raw_mica", 8), Item.of("gtceu:raw_pollucite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(225)

    gtceu.world_collection("kubejs:overworld_8")
        .notConsumable("minecraft:grass_block")
        .circuit(8)
        .itemOutputs(Item.of("gtceu:raw_rock_salt", 12), Item.of("gtceu:raw_salt", 8),
            Item.of("gtceu:raw_lepidolite", 4), Item.of("gtceu:raw_spodumene", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(175)

    gtceu.world_collection("kubejs:overworld_9")
        .notConsumable("minecraft:grass_block")
        .circuit(9)
        .itemOutputs(Item.of("gtceu:raw_graphite", 28),
            Item.of("gtceu:raw_coal", 16), Item.of("gtceu:raw_diamond", 12))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:overworld_10")
        .notConsumable("minecraft:grass_block")
        .circuit(10)
        .itemOutputs(Item.of("gtceu:raw_apatite", 12),
            Item.of("gtceu:raw_tricalcium_phosphate", 8), Item.of("gtceu:raw_pyrochlore", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:the_nether_extra_1")
        .notConsumable("minecraft:grass_block")
        .circuit(31)
        .itemOutputs(Item.of("gtceu:raw_sulfur", 12),
            Item.of("gtceu:raw_pyrite", 8), Item.of("gtceu:raw_sphalerite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(50)

    gtceu.world_collection("kubejs:overworld_32")
        .notConsumable("minecraft:grass_block")
        .circuit(32)
        .itemOutputs(Item.of("minecraft:stone", 32), Item.of("minecraft:dirt", 32),
            Item.of("minecraft:sand", 32))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)



    gtceu.matter_forge_mk1("kubejs:dark_matter")
        .notConsumable("#gtceu:circuits/ulv")
        .itemInputs(Item.of("projecte:aeternalis_fuel", 64), Item.of("kubejs:compressed_diamond_block", 64))
        .itemOutputs("projecte:dark_matter")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
})