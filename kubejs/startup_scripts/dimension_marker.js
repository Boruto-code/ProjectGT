GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {
    event.create("ad_astra:moon")
        .iconSupplier(() => Item.of("ad_astra:moon_globe").getItem())
        .overrideName("月球")
        .tier(0)
    
    event.create("ad_astra:mars")
        .iconSupplier(() => Item.of("ad_astra:mars_globe").getItem())
        .overrideName("火星")
        .tier(0)
})