GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("infinity")
        .color(0xffff9B)
        .secondaryColor(0xff00ff)
        .element(GTElements.get("infinity"))
        .cableProperties(GTValues.V[GTValues.MAX], 1073741824, 0, false)
})