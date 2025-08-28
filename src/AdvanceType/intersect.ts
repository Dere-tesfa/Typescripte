//intersection type  combines the number of two or more type
interface Knife {
    cut(): any
}
interface BottleOpener {
    openBottel(): any;
}
interface Screwdriver {
    turnScrew(): any;
}
type SwissArmyKnife = Knife & BottleOpener & Screwdriver// intersection type


function use(tool: SwissArmyKnife) {
    console.log("I can do anything!!");
    tool.cut();
    tool.openBottel();

}