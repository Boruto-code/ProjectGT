GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("insanitium")
        .fluid().ingot()
        .color(0x39d88f)
        .secondaryColor(0x398282)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD
        )
        .element(GTElements.get("insanitium"))
        .cableProperties(GTValues.V[GTValues.UIV], 4, 1, false)

    event.create("sunium")
        .fluid().ingot()
        .color(0xffd54a)
        .secondaryColor(0xffffaa)
        .iconSet(GTMaterialIconSet.SHINY)
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD
        )
        .element(GTElements.get("sunium"))
        .cableProperties(GTValues.V[GTValues.MAX], 1073741824, 0, false)
        .fluidPipeProperties(2147483647, 67108864, true, true, true, true)
})