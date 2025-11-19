ServerEvents.tags("item", event => {
    event.add("gtceu:circuits/uv", "kubejs:optical_processor")
    event.add("gtceu:circuits/uhv", ["kubejs:exotic_processor", "kubejs:optical_assembly"])
    event.add("gtceu:circuits/uev", ["kubejs:cosmic_processor", "kubejs:exotic_assembly", "kubejs:optical_computer"])
    event.add("gtceu:circuits/uiv", ["kubejs:supracausal_processor", "kubejs:cosmic_assembly", "kubejs:exotic_computer"])
    event.add("gtceu:circuits/uxv", ["kubejs:supracausal_assembly", "kubejs:cosmic_computer", "kubejs:exotic_mainframe"])
    event.add("gtceu:circuits/opv", ["kubejs:supracausal_computer", "kubejs:cosmic_mainframe"])
    event.add("gtceu:circuits/max", "kubejs:supracausal_mainframe")
})