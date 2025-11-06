GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:mica_vein")
    event.remove("gtceu:beryllium_vein")
    event.remove("gtceu:bauxite_vein_end")
    event.remove("gtceu:sheldonite_vein")


    event.add("bauxite_vein_moon", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )
    })

    event.add("beryllium_vein_moon", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-30, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Beryllium).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Emerald).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Thorium).size(1, 1))
            )
        )
    })

    event.add("sheldonite_vein_mars", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.4)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-30, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bornite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Platinum).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
            )
        )
    })
})