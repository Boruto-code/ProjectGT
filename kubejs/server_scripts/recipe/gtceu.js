ServerEvents.recipes(event => {
    const gtceu = event.recipes.gtceu

    gtceu.compressor("kubejs:compress_firebricks")
        .itemInputs(Item.of("gtceu:firebrick", 4))
        .itemOutputs("gtceu:firebricks")
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.extruder("kubejs:compress_diamond_block")
        .itemInputs(Item.of("minecraft:diamond_block", 9))
        .notConsumable("gtceu:block_extruder_mold")
        .itemOutputs("kubejs:compressed_diamond_block")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(40)

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
        .itemOutputs(Item.of("gtceu:raw_kyanite", 12), Item.of("gtceu:raw_trona", 8),
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
    
    gtceu.world_collection("kubejs:overworld_11")
        .notConsumable("minecraft:grass_block")
        .circuit(11)
        .itemOutputs(Item.of("gtceu:raw_lazurite", 12), Item.of("gtceu:raw_sodalite", 8),
            Item.of("gtceu:raw_lapis", 8), Item.of("gtceu:raw_calcite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:overworld_12")
        .notConsumable("minecraft:grass_block")
        .circuit(12)
        .itemOutputs(Item.of("gtceu:raw_grossular", 12), Item.of("gtceu:raw_spessartine", 8),
            Item.of("gtceu:raw_pyrolusite", 8), Item.of("gtceu:raw_tantalite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(250)
    
    gtceu.world_collection("kubejs:overworld_13")
        .notConsumable("minecraft:grass_block")
        .circuit(13)
        .itemOutputs(Item.of("gtceu:raw_cassiterite_sand", 12), Item.of("gtceu:raw_garnet_sand", 8),
            Item.of("gtceu:raw_asbestos", 8), Item.of("gtceu:raw_diatomite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    gtceu.world_collection("kubejs:overworld_14")
        .notConsumable("minecraft:grass_block")
        .circuit(14)
        .itemOutputs(Item.of("gtceu:raw_galena", 12), 
            Item.of("gtceu:raw_silver", 8), Item.of("gtceu:raw_lead", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:overworld_15")
        .notConsumable("minecraft:grass_block")
        .circuit(15)
        .itemOutputs(Item.of("gtceu:raw_goethite", 20), Item.of("gtceu:raw_yellow_limonite", 8),
            Item.of("gtceu:raw_hematite", 8), Item.of("gtceu:raw_malachite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(10)

    gtceu.world_collection("kubejs:overworld_16")
        .notConsumable("minecraft:grass_block")
        .circuit(16)
        .itemOutputs(Item.of("gtceu:raw_chalcopyrite", 20), Item.of("gtceu:raw_zeolite", 8),
            Item.of("gtceu:raw_cassiterite", 8), Item.of("gtceu:raw_realgar", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(175)

    gtceu.world_collection("kubejs:overworld_17")
        .notConsumable("minecraft:grass_block")
        .circuit(17)
        .itemOutputs(Item.of("gtceu:raw_basaltic_mineral_sand", 12), Item.of("gtceu:raw_granitic_mineral_sand", 8),
            Item.of("gtceu:raw_fullers_earth", 8), Item.of("gtceu:raw_gypsum", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    gtceu.world_collection("kubejs:overworld_18")
        .notConsumable("minecraft:grass_block")
        .circuit(18)
        .itemOutputs(Item.of("gtceu:raw_garnierite", 12), Item.of("gtceu:raw_nickel", 8),
            Item.of("gtceu:raw_cobaltite", 8), Item.of("gtceu:raw_pentlandite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:overworld_19")
        .notConsumable("minecraft:grass_block")
        .circuit(19)
        .itemOutputs(Item.of("gtceu:raw_bentonite", 12), Item.of("gtceu:raw_magnesite", 8),
            Item.of("gtceu:raw_olivine", 8), Item.of("gtceu:raw_glauconite_sand", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(300)

    gtceu.world_collection("kubejs:overworld_20")
        .notConsumable("minecraft:grass_block")
        .circuit(20)
        .itemOutputs(Item.of("gtceu:raw_tin", 16), Item.of("gtceu:raw_cassiterite", 8))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    gtceu.world_collection("kubejs:overworld_21")
        .notConsumable("minecraft:grass_block")
        .circuit(21)
        .itemOutputs(Item.of("gtceu:raw_oilsands", 24))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:the_nether_extra_1")
        .notConsumable("minecraft:grass_block")
        .circuit(29)
        .itemOutputs(Item.of("gtceu:raw_quartzite", 12),
            Item.of("gtceu:raw_certus_quartz", 8), Item.of("gtceu:raw_barite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(200)

    gtceu.world_collection("kubejs:the_nether_extra_2")
        .notConsumable("minecraft:grass_block")
        .circuit(30)
        .itemOutputs(Item.of("gtceu:raw_sulfur", 12),
            Item.of("gtceu:raw_pyrite", 8), Item.of("gtceu:raw_sphalerite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(50)
    
    gtceu.world_collection("kubejs:the_nether_extra_3")
        .notConsumable("minecraft:grass_block")
        .circuit(31)
        .itemOutputs(Item.of("gtceu:raw_nether_quartz", 12), Item.of("gtceu:raw_quartzite", 4))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    gtceu.world_collection("kubejs:stones")
        .notConsumable("minecraft:cobblestone")
        .circuit(32)
        .itemOutputs(Item.of("minecraft:stone", 32), Item.of("minecraft:deepslate"), Item.of("minecraft:dirt", 32), 
            Item.of("minecraft:sand", 32), Item.of("minecraft:netherrack", 32), Item.of("minecraft:basalt", 16),
            Item.of("minecraft:granite", 16), Item.of("minecraft:diorite", 16), Item.of("minecraft:andesite", 16),
            Item.of("gtceu:marble", 16))
        .EUt(GTValues.VA[GTValues.ULV])
        .duration(100)

    gtceu.world_collection("kubejs:the_nether_1")
        .notConsumable("minecraft:netherrack")
        .circuit(1)
        .itemOutputs(Item.of("gtceu:raw_saltpeter", 12), Item.of("gtceu:raw_diatomite", 8),
            Item.of("gtceu:raw_electrotine", 8), Item.of("gtceu:raw_alunite", 4))
        .EUt(GTValues.VA[GTValues.EV])
        .duration(200)

    gtceu.world_collection("kubejs:the_nether_2")
        .notConsumable("minecraft:netherrack")
        .circuit(2)
        .itemOutputs(Item.of("gtceu:raw_tetrahedrite", 16),
            Item.of("minecraft:raw_copper", 8), Item.of("gtceu:raw_stibnite", 4))
        .EUt(GTValues.VA[GTValues.EV])
        .duration(125)

    gtceu.world_collection("kubejs:the_nether_3")
        .notConsumable("minecraft:netherrack")
        .circuit(3)
        .itemOutputs(Item.of("gtceu:raw_blue_topaz", 12), Item.of("gtceu:raw_topaz", 8),
            Item.of("gtceu:raw_chalcocite", 8), Item.of("gtceu:raw_bornite", 4))
        .EUt(GTValues.VA[GTValues.EV])
        .duration(125)

    gtceu.world_collection("kubejs:moon_1")
        .notConsumable("ad_astra:moon_stone")
        .circuit(1)
        .itemOutputs(Item.of("gtceu:raw_beryllium", 12),
            Item.of("gtceu:raw_emerald", 8), Item.of("gtceu:raw_thorium", 4))
        .EUt(GTValues.VA[GTValues.MV])
        .duration(250)

    gtceu.world_collection("kubejs:moon_2")
        .notConsumable("ad_astra:moon_stone")
        .circuit(2)
        .itemOutputs(Item.of("gtceu:raw_pitchblende", 20), Item.of("gtceu:raw_uraninite", 4))
        .EUt(GTValues.VA[GTValues.MV])
        .duration(250)

    gtceu.world_collection("kubejs:moon_3")
        .notConsumable("ad_astra:moon_stone")
        .circuit(3)
        .itemOutputs(Item.of("gtceu:raw_bauxite", 8), 
            Item.of("gtceu:raw_uraninite", 8), Item.of("gtceu:raw_aluminium", 4))
        .EUt(GTValues.VA[GTValues.MV])
        .duration(200)

    gtceu.world_collection("kubejs:mars_1")
        .notConsumable("ad_astra:mars_stone")
        .circuit(1)
        .itemOutputs(Item.of("gtceu:raw_scheelite", 12),
            Item.of("gtceu:raw_tungstate", 8), Item.of("gtceu:raw_lithium", 4))
        .EUt(GTValues.VA[GTValues.EV])
        .duration(300)

    gtceu.world_collection("kubejs:mars_2")
        .notConsumable("ad_astra:mars_stone")
        .circuit(2)
        .itemOutputs(Item.of("gtceu:raw_wulfenite", 12), Item.of("gtceu:raw_molybdenite", 8),
            Item.of("gtceu:raw_molybdenum", 4), Item.of("gtceu:raw_powellite", 4))
        .EUt(GTValues.VA[GTValues.EV])
        .duration(300)

    gtceu.world_collection("kubejs:mars_3")
        .notConsumable("ad_astra:mars_stone")
        .circuit(3)
        .itemOutputs(Item.of("gtceu:raw_bastnasite", 12),
            Item.of("gtceu:raw_monazite", 4), Item.of("gtceu:raw_neodymium", 4))
        .EUt(GTValues.VA[GTValues.EV])
        .duration(250)

    gtceu.world_collection("kubejs:mars_4")
        .notConsumable("ad_astra:mars_stone")
        .circuit(4)
        .itemOutputs(Item.of("gtceu:raw_bornite", 12), Item.of("gtceu:raw_cooperite", 8),
            Item.of("gtceu:raw_platinum", 4), Item.of("gtceu:raw_palladium", 4))
        .EUt(GTValues.VA[GTValues.EV])
        .duration(400)



    gtceu.matter_forge_mk1("kubejs:dark_matter")
        .notConsumable("#gtceu:circuits/ulv")
        .itemInputs(Item.of("projecte:aeternalis_fuel", 64), Item.of("kubejs:compressed_diamond_block", 64))
        .itemOutputs("projecte:dark_matter")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
})