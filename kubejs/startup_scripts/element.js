GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("infinity")
        .protons(1073741824)
        .neutrons(1073741824)
        .halfLifeSeconds(-1)
        .decayTo(null)
        .symbol("Inf")
        .isIsotope(false)
})