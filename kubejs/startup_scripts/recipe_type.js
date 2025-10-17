GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("kubejs:matter_forge")
        .category("kubejs:matter_make")
        .setEUIO("in")
        .setMaxIOSize(6, 1, 2, 0)
        .setProgressBar(
            GuiTextures.PROGRESS_BAR_ARROW,
            FillDirection.LEFT_TO_RIGHT
        )
        .setSlotOverlay(
            false,
            false,
            GuiTextures.SOLIDIFIER_OVERLAY
        )
        .setSound(GTSoundEntries.MIXER)
})