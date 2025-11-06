GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("metamorphosis_machine", "multiblock")
        .rotationState(RotationState.ALL)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
        .recipeTypes([
            GTRecipeTypes.FURNACE_RECIPES, 
            GTRecipeTypes.VACUUM_RECIPES, 
            GTRecipeTypes.get("gtceu:metamorphosis")
        ])
        .pattern(
            definition => FactoryBlockPattern.start()
                .aisle("WWWWWWWWWWWWWWW", "WWWWWWWWWWWWWWW", "WWWWWWWWWWWWWWW", "WWWWWWWWWWWWWWW")
                .aisle("WWWWWWWWWWWWWWW", "WAAAGGBBBGGCCCW", "WAAAGGBBBGGCCCW", "WAAAGGBBBGGCCCW", "WWWWWWWWWWWWWWW")
                .aisle("WWWWWWWWWWWWWWW", "WAAAGGBBBGGCCCW", "WA#AGGB#BGGC#CW", "WAAAGGBBBGGCCCW", "WWWWWWWWWWWWWWW")
                .aisle("WWWWWWWWWWWWWWW", "WAAAGGBBBGGCCCW", "WAAAGGBBBGGCCCW", "WAAAGGBBBGGCCCW", "WWWWWWWWWWWWWWW")
                .aisle("WWWWWWWWWWWWWWW", "WWWWWWW$WWWWWWW", "WWWWWWWWWWWWWWW", "WWWWWWWWWWWWWWW")
                .where("$", Predicates.controller(Predicates.blocks(definition.get())))
                .where("#", Predicates.air())
                .where("W", Predicates.blocks("gtceu:robust_machine_casing")
                        .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where("A", Predicates.blocks("gtceu:heatproof_machine_casing"))
                .where("B", Predicates.blocks("avaritia:crystal_matrix"))
                .where("C", Predicates.blocks("gtceu:frostproof_machine_casing"))
                .build()
        )
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
            "kubejs:block/multiblock/metamorphosis_machine"
        )
    
    event.create("matter_forging_machine_mk1", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .recipeTypes(["gtceu:matter_forge_mk1"])
        .pattern(
            definition => FactoryBlockPattern.start()
                .aisle("WWWWW", "WWWWW", "WWWWW", "WWWWW", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "WWCWW", "WWWWW", "WWWWW", "WWWWW")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("#", Predicates.air())
                .where("W", Predicates.blocks("kubejs:dark_matter_casing")
                        .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .build()
        )
        .workableCasingModel(
            "kubejs:block/dark_matter_casing",
            "kubejs:block/multiblock/matter_forging_machine/mk1"
        )

    /* event.create("matter_forging_machine_mk2", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .recipeTypes(["gtceu:matter_forge_mk2"])
        .pattern(
            definition => FactoryBlockPattern.start()
                .aisle("WWWWW", "WWWWW", "WWWWW", "WWWWW", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "WWCWW", "WWWWW", "WWWWW", "WWWWW")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("#", Predicates.air())
                .where(
                    "W", Predicates.blocks("kubejs:red_matter_casing")
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                )
                .build()
        )
        .workableCasingModel(
            "kubejs:block/red_matter_casing",
            "kubejs:block/multiblock/matter_forging_machine/mk2"
        ) */
})