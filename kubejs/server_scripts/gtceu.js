ServerEvents.recipes(event => {
    const gtceu = event.recipes.gtceu

    gtceu.matter_forge("kubejs:dark_matter")
        .notConsumable("#gtceu:circuits/ulv")
        .itemInputs("64x projecte:aeternalis_fuel", "64x kubejs:compressed_diamond_block")
        .itemOutputs("projecte:dark_matter")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(200)
})