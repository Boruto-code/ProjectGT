GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("matter_forging_machine_mk1", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .recipeTypes(["kubejs:matter_forge"])
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
                    "W", Predicates.blocks("kubejs:matter_forging_machine_casing_mk1")
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                )
                .build()
        )
        .workableCasingModel(
            "kubejs:block/matter_forging_machine_casing_mk1",
            "kubejs:block/multiblock/matter_forging_machine/mk1"
        )
})