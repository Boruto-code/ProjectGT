GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:mica_vein")
    event.remove("gtceu:beryllium_vein")
    event.remove("gtceu:monazite_vein")
    event.remove("gtceu:sheldonite_vein")
    event.remove("gtceu:molybdenum_vein")
    event.remove("gtceu:bauxite_vein_end")
    event.remove("gtceu:pitchblende_vein_end")
    

    event.add("bauxite_vein_moon", vein => {
        vein.weight(40)
        vein.clusterSize(40)
        vein.density(0.3)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )
    })

    event.add("beryllium_vein_moon", vein => {
        vein.weight(30)
        vein.clusterSize(50)
        vein.density(0.75)
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

    event.add("pitchblende_vein_moon", vein => {
        vein.weight(30)
        vein.clusterSize(40)
        vein.density(0.25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-30, 0)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Pitchblende).size(2, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Pitchblende).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Uraninite).size(1, 1))
            )
        )
    })

    event.add("sheldonite_vein_mars", vein => {
        vein.weight(10)
        vein.clusterSize(30)
        vein.density(0.2)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-30, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bornite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Platinum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
            )
        )
    })

    event.add("monazite_vein_mars", vein => {
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-20, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Monazite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
            )
        )
    })

    event.add("molybdenum_vein_mars", vein => {
        vein.weight(20)
        vein.clusterSize(25)
        vein.density(0.25)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(10, 40)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Wulfenite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Molybdenite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Molybdenum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Powellite).size(1, 1))
            )
        )
    })

    event.add("scheelite_vein_mars", vein => {
        vein.weight(20)
        vein.clusterSize(50)
        vein.density(0.7)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(10, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Scheelite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Tungstate).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Lithium).size(1, 1))
            )
        )
    })
})