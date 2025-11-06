GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("world_collector", "simple")
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder.recipeType("gtceu:world_collection")
                .workableTieredHullModel("kubejs:block/machines/world_collector")
        })

    event.create("matter_annihilation_machine", "generator")
        .tiers(GTValues.EV, GTValues.IV, GTValues.LuV)
        .definition((tier, builder) => {
            builder.recipeType("gtceu:matter_annihilation")
                .workableTieredHullModel("kubejs:block/machines/matter_annihilation_machine")
        })
})