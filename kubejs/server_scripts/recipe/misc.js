ServerEvents.recipes(event => {
    event.remove({id: "functionalstorage:custom_compacting/glowstone"})
    event.remove({id: "projecte:dark_matter"})
    event.remove({id: "projecte:red_matter"})
    event.remove({id: "projecte:philosophers_stone"})
    event.remove({id: "projecte:philosophers_stone_alt"})
    event.remove({id: "gtceu:shapeless/dust_bronze"})
    event.remove({id: "gtceu:compressor/clay"})
    event.remove({id: "gtceu:extractor/clay_extraction"})
    
    event.replaceInput({input: "gtceu:certus_quartz_gem"}, "gtceu:certus_quartz_gem", "ae2:certus_quartz_crystal")
    event.replaceOutput({output: "gtceu:certus_quartz_gem"}, "gtceu:certus_quartz_gem", "ae2:certus_quartz_crystal")

    event.shapeless(
        Item.of("gtceu:bronze_dust", 3), 
        ["projecte:philosophers_stone", "gtceu:copper_dust", "gtceu:copper_dust", "gtceu:copper_dust", "gtceu:tin_dust"]
    )

    event.shapeless(
        Item.of("minecraft:clay_ball", 4),
        "minecraft:clay"
    )

    event.shapeless(
        "minecraft:clay",
        ["minecraft:clay_ball", "minecraft:clay_ball", "minecraft:clay_ball", "minecraft:clay_ball"]
    )

    event.shaped(
        Item.of("gtceu:ulv_world_collector", 2), 
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A: "kubejs:world_fragment_overworld",
            B: "gtceu:ulv_world_collector"
        }
    )

    event.shaped(
        "projecte:philosophers_stone",
        [
            "ABA",
            "BCB",
            "ABA"
        ],
        {
            A: "gtceu:silver_dust",
            B: "minecraft:redstone",
            C: "minecraft:diamond"
        }
    )

    event.shaped(
        "projecte:philosophers_stone",
        [
            "BAB",
            "ACA",
            "BAB"
        ],
        {
            A: "gtceu:silver_dust",
            B: "minecraft:redstone",
            C: "minecraft:diamond"
        }
    )
})
BlockEvents.rightClicked("kubejs:dimensional_teleporter", event => {
    if (event.player.getHeldItem("main_hand") == null && event.player.getHeldItem("off_hand") == null){
        let name = event.player.getName().getString()
        let dim = event.getLevel().getDimension()
        if (dim != "kubejs:flat"){
            event.player.persistentData.putDouble("y_f", event.player.y+1)
            event.player.persistentData.putString("dim_f", dim)
            event.getServer().runCommandSilent(`execute in kubejs:flat as ${name} run tp ${event.block.x*10} 64 ${event.block.z*10}`)
            event.getServer().runCommandSilent(`execute in kubejs:flat run fill ${event.block.x*10} 63 ${event.block.z*10} ${event.block.x*10} 63 ${event.block.z*10} kubejs:dimensional_teleporter`)
        }
        else{
            let original = event.player.persistentData.getString("dim_f")
            event.getServer().runCommandSilent(`execute in ${original} as ${name} run tp ${event.block.x/10} ${event.player.persistentData.getDouble("y_f")} ${event.block.z/10}`)
        }
    }
})