GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("world_collector", "simple")
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
                .recipeType("gtceu:world_collection")
                .workableTieredHullModel("kubejs:block/machines/world_collector")
        })
})