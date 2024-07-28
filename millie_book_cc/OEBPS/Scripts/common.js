alert('common.js load check!')
var canvas,
stage,
exportRoot,
anim_container,
dom_overlay_container,
fnStartAnimation;
function init() {
canvas = document.getElementById("canvas");
anim_container = document.getElementById("animation_container");
dom_overlay_container = document.getElementById(
    "dom_overlay_container"
);
var comp = AdobeAn.getComposition("644EC21BBF5AF44180C31791CAABC6AE");
var lib = comp.getLibrary();
var loader = new createjs.LoadQueue(false);
loader.installPlugin(createjs.Sound);
loader.addEventListener("fileload", function (evt) {
    handleFileLoad(evt, comp);
});
loader.addEventListener("complete", function (evt) {
    handleComplete(evt, comp);
});
var lib = comp.getLibrary();
loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
var images = comp.getImages();
if (evt && evt.item.type == "image") {
    images[evt.item.id] = evt.result;
}
}
function handleComplete(evt, comp) {
var lib = comp.getLibrary();
var ss = comp.getSpriteSheet();
var queue = evt.target;
var ssMetadata = lib.ssMetadata;
for (i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
    images: [queue.getResult(ssMetadata[i].name)],
    frames: ssMetadata[i].frames,
    });
}
exportRoot = new lib.eng_day3_touchBook();
stage = new lib.Stage(canvas);
stage.enableMouseOver();
createjs.Touch.enable(stage);
fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
};
AdobeAn.makeResponsive(false, "both", false, 1, [
    canvas,
    anim_container,
    dom_overlay_container,
]);
AdobeAn.compositionLoaded(lib.properties.id);
fnStartAnimation();
}
var playInstance;
function playSound(id, loop, offset) {
playInstance = createjs.Sound.play(id, {
    interrupt: createjs.Sound.INTERRUPT_EARLY,
    loop: loop,
    offset: offset,
});
return playInstance;
}
function javaFunPauseSound() {
return (playInstance.paused = true);
}
function javaFunEventEnd() {
alert("end")
}
function onReceiveMessageFromHost(event) {
    if (event.data == "run") { run() }
    else if (event.data == "pause") { pause() }
    else if (event.data == "resume") { resume() }
    else if (event.data == "close") { close() }
}
function run() {
    exportRoot.play();
}
function pause() {
    console.log("pause");
}
function resume() {
    console.log("resume");
}
function close() {
    console.log("close");
    window.parent.postMessage("onActivityClosed", "*");
    window.removeEventListener("message", onReceiveMessageFromHost);
}
function ended() {
    window.parent.postMessage("onActivityCompleted", "*");
}