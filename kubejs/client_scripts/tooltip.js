ItemEvents.tooltip(event => {
    event.add("kubejs:dimensional_teleporter", "右键传送超平坦维度")

    event.addAdvanced("kubejs:supracausal_mainframe", (item, advanced, text) => {
        text.add(1, Text.of("§7宇宙的过去，在眼前展开"))
        text.add(2, Text.white("MAX级电路"))
    })
    event.addAdvanced("kubejs:supracausal_computer", (item, advanced, text) => {
        text.add(1, Text.of("§7整个宇宙将为你闪烁"))
        text.add(2, Text.white("OpV级电路"))
    })
    event.addAdvanced("kubejs:supracausal_assembly", (item, advanced, text) => {
        text.add(1, Text.of("§7重现原初的世界"))
        text.add(2, Text.white("UXV级电路"))
    })
    event.addAdvanced("kubejs:supracausal_processor", (item, advanced, text) => {
        text.add(1, Text.of("§7涌现宇宙的法则"))
        text.add(2, Text.white("UIV级电路"))
    })
    event.addAdvanced("kubejs:cosmic_mainframe", (item, advanced, text) => {
        text.add(1, Text.of("§7演算银河"))
        text.add(2, Text.darkPurple("OpV级电路"))
    })
    event.addAdvanced("kubejs:cosmic_computer", (item, advanced, text) => {
        text.add(1, Text.of("§7密度趋近于奇点"))
        text.add(2, Text.darkPurple("UXV级电路"))
    })
    event.addAdvanced("kubejs:cosmic_processor", (item, advanced, text) => {
        text.add(1, Text.of("§7手握星辰"))
        text.add(2, Text.darkPurple("UEV级电路"))
    })
    event.addAdvanced("kubejs:exotic_mainframe", (item, advanced, text) => {
        text.add(1, Text.of("§7虚拟现实"))
        text.add(2, Text.lightPurple("UXV级电路"))
    })
    event.addAdvanced("kubejs:exotic_computer", (item, advanced, text) => {
        text.add(1, Text.of("§7矩阵计算"))
        text.add(2, Text.lightPurple("UIV级电路"))
    })
    event.addAdvanced("kubejs:exotic_assembly", (item, advanced, text) => {
        text.add(1, Text.of("§7随机游走"))
        text.add(2, Text.lightPurple("UEV级电路"))
    })
    event.addAdvanced("kubejs:exotic_processor", (item, advanced, text) => {
        text.add(1, Text.of("§7强磁体半导体电路"))
        text.add(2, Text.lightPurple("UHV级电路"))
    })
    event.addAdvanced("kubejs:optical_mainframe", (item, advanced, text) => {
        text.add(1, Text.of("§7计算速度趋近光速"))
        text.add(2, Text.gold("UIV级电路"))
    })
    event.addAdvanced("kubejs:optical_computer", (item, advanced, text) => {
        text.add(1, Text.of("§7超大规模计算机"))
        text.add(2, Text.gold("UEV级电路"))
    })
    event.addAdvanced("kubejs:optical_assembly", (item, advanced, text) => {
        text.add(1, Text.of("§7光子涌流"))
        text.add(2, Text.gold("UHV级电路"))
    })
    event.addAdvanced("kubejs:optical_processor", (item, advanced, text) => {
        text.add(1, Text.of("§7超高效光子载运"))
        text.add(2, Text.gold("UV级电路"))
    })
})