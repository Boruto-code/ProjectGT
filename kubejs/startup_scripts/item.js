StartupEvents.registry("item", event => {
    event.create("kubejs:copper_coin")
    event.create("kubejs:iron_coin")
    event.create("kubejs:gold_coin")
    event.create("kubejs:diamond_coin")

    event.create("kubejs:world_fragment_overworld")
    event.create("kubejs:world_fragment_nether")
    event.create("kubejs:world_fragment_moon")
    event.create("kubejs:world_fragment_mars")

    
    const circuits = ["optical", "exotic", "cosmic", "supracausal"]

    circuits.forEach((circuit) => {
        event.create(circuit + "_processor")
        event.create(circuit + "_assembly")
        event.create(circuit + "_computer")
        event.create(circuit + "_mainframe")
        event.create(circuit + "_circuit_board")
        event.create(circuit + "_printed_circuit_board")
        event.create("smd_capacitor_" + circuit)
        event.create("smd_diode_" + circuit)
        event.create("smd_resistor_" + circuit)
        event.create("smd_transistor_" + circuit)
        event.create("smd_inductor_" + circuit)
    })
})