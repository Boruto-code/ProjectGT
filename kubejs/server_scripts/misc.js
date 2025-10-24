ServerEvents.recipes(event => {
    event.remove({id: "projecte:dark_matter"})
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