import { adze, createShed } from "adze";
adze().label("powerplantOperations").warn("Please refrain from smoking.");
adze().namespace("chernobyl").alert("The plant is melting down!");
adze()
    .ns(["chernobyl", "ukraine"])
    .info("Please do not enter the exclusion zone.");
adze().meta("powerplantId", "1337").log("Where am I?");
// -- Threads / MDC
adze({ use_emoji: true }).label("satelliteOperations").thread("clockedIn", {
    employee: "Boris Grishenko",
    time: "1995-01-01T04:32:29Z",
    accessLevel: "Goldeneye",
});
const cfg = { use_emoji: true };
adze(cfg).label("satelliteOperations").thread("weaponsArmed", {
    officer1: "Dmitry Abramov",
    officer2: "Vladamir Yelchin",
    time: "1995-01-01T04:49:17Z",
});
adze(cfg).label("satelliteOperations").dump.log("Hourly operations events");
adze(cfg).label("satelliteOperations").close();
// -- Sealing (repeating labels and config is annoying!)
const goldeneye = adze(cfg)
    .label("satelliteOperations")
    .meta("location", "Severnaya, Siberia")
    .seal();
goldeneye().log("Arkady Ourumov has arrived.");
const shed = createShed();
goldeneye().time.warn("Weapons initiated...");
goldeneye().timeEnd.alert("Weapons fired at Severnaya!");
// We'll make a honeybadger level for Ray
const base = "font-size: 10px; font-weight: bold; border-radius: 0 10px 10px 0; border-width: 1px; border-style: solid;";
const style = `${base}background: linear-gradient(to right, #fff, #ffdfa8); color: #715100; border-color: #e3d696; padding-right: 34px;`;
const log = adze({
    use_emoji: true,
    log_levels: {
        info: {
            method: "log",
        },
    },
    custom_levels: {
        honeybadger: {
            level: 0,
            method: "warn",
            emoji: "🦡",
            terminal: ["gray", "bgYellow"],
            style,
        },
    },
})
    .label("dontCare")
    .count.seal();
log().custom("honeybadger", "Ew! Eats snakes! 🐍");
log().custom("honeybadger", "And mice! Disgusting! 🐁");
log().custom("honeybadger", "All of the other animals just eat his scraps.");
