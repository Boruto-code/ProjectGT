const $SteamMultiblock = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.steam.SteamParallelMultiblockMachine")

GTCEuStartupEvents.registry("gtceu:machine", event => {
    /*
    DIMENSIONALLY_TRANSCENDENT_DIRT_FORGE = GTRegistration.REGISTRATE.multiblock("dimensionally_transcendent_dirt_forge", (x$0) -> new NoEnergyMultiblockMachine(x$0, new Object[0])).rotationState(RotationState.ALL).recipeType(GTRecipeTypes.PRIMITIVE_BLAST_FURNACE_RECIPES).tooltips(new Component[]{Component.m_237115_("gtceu.machine.dimensionally_transcendent_dirt_forge.tooltip.0")}).tooltips(new Component[]{Component.m_237110_("gtceu.machine.available_recipe_map_1.tooltip", new Object[]{Component.m_237115_("gtceu.primitive_blast_furnace")})}).tooltipBuilder(GTLMachines.GTL_ADD).recipeModifier((machine, recipe, params, result) -> {
            GTRecipe recipe1 = recipe.copy();
            recipe1.duration = 0;
            recipe1 = (GTRecipe)GTRecipeModifiers.fastParallel(machine, recipe1, 524288, false).getFirst();
            return recipe1;
        }).appearanceBlock(GTBlocks.CASING_PRIMITIVE_BRICKS).pattern((definition) -> GTLMachines.DTPF.where("a", Predicates.controller(Predicates.blocks(new IMachineBlock[]{definition.get()}))).where("e", Predicates.blocks(new Block[]{(Block)GTBlocks.CASING_PRIMITIVE_BRICKS.get()}).or(Predicates.abilities(new PartAbility[]{PartAbility.EXPORT_ITEMS}).setMaxGlobalLimited(2)).or(Predicates.abilities(new PartAbility[]{PartAbility.IMPORT_ITEMS}).setMaxGlobalLimited(2))).where("b", Predicates.blocks(new Block[]{Blocks.f_50076_})).where("C", Predicates.blocks(new Block[]{Blocks.f_50493_})).where("d", Predicates.blocks(new Block[]{Blocks.f_50222_})).where("s", Predicates.blocks(new Block[]{(Block)GTBlocks.CASING_PRIMITIVE_BRICKS.get()})).where(" ", Predicates.any()).build()).additionalDisplay((controller, components) -> {
            if (controller.isFormed()) {
                components.add(Component.m_237110_("gtceu.multiblock.parallel", new Object[]{Component.m_237113_("524288").m_130940_(ChatFormatting.DARK_PURPLE)}).m_130940_(ChatFormatting.GRAY));
            }

        }).workableCasingRenderer(GTCEu.id("block/casings/solid/machine_primitive_bricks"), GTCEu.id("block/multiblock/primitive_blast_furnace")).register();
    */

    event.create("dark_matter_oven", "multiblock")
        .machine(holder => new $SteamMultiblock(holder, 4))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifier((machine, recipe, params, result) => {
            recipe1 = recipe.copy()
            recipe1.duration = 0
            GTRecipeModifiers.fastParallel(machine, recipe1, 32, false).getFirst()
        })
        .recipeType(GTRecipeTypes.FURNACE_RECIPES)
        .pattern(
            definition => FactoryBlockPattern.start()
                .aisle("WWW", "WWW", "WWW")
                .aisle("WWW", "W#W", "WWW")
                .aisle("WWW", "WCW", "WWW")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where(
                    "W", Predicates.blocks("kubejs:dark_matter_casing")
                        .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where("#", Predicates.air())
                .build()
        )

    event.create("matter_forging_machine_mk1", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeModifiers([
            GTRecipeModifiers.PARALLEL_HATCH,
            GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)
        ])
        .recipeTypes(["gtceu:matter_forge_mk1"])
        .pattern(
            definition => FactoryBlockPattern.start()
                .aisle("WWWWW", "WWWWW", "WWWWW", "WWWWW", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "W###W", "W###W", "W###W", "WWWWW")
                .aisle("WWWWW", "WWCWW", "WWWWW", "WWWWW", "WWWWW")
                .where("C", Predicates.controller(Predicates.blocks(definition.get())))
                .where("#", Predicates.air())
                .where(
                    "W", Predicates.blocks("kubejs:dark_matter_casing")
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                )
                .build()
        )
        .workableCasingModel(
            "kubejs:block/dark_matter_casing",
            "kubejs:block/multiblock/matter_forging_machine/mk1"
        )
})