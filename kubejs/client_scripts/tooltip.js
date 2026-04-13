ItemEvents.tooltip(event => {
    event.add("kubejs:dimensional_teleporter", "右键传送超平坦维度")
    event.addAdvanced("kubejs:supracausal_mainframe", (item, advanced, text) => {
        text.add(1, Text.of("§7万物归一者，原初的神迹"))
        text.add(2, Text.red("MAX级电路"))
    })
})