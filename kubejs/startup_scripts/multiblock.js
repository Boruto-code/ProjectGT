GTCEuStartupEvents.registry("gtceu:machine", event => {
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
                .where(
                    "W", Predicates.blocks("kubejs:dark_matter_casing")
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                )
                .build()
        )
        .workableCasingModel(
            "kubejs:block/dark_matter_casing",
            "kubejs:block/multiblock/matter_forging_machine/mk1"
        )
})