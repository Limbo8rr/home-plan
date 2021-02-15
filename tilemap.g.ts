// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100014141414131313131313131313131313140406060606060606060606060602131405121516121b1b0a1717181919081314051d16121e12120a1e12121216081313051d12121212120a12121e1e12081313051d1612121c1c0a12121e1e12081313051d12121612120a0f11121216081313051d121e121e12031010090909081313051d1612121e12121e121e1e160813130512121e1212161212070f110a081313050f11071e1e1e1e1e0710100a081313051010071e1e161e1e0712160a081313051212071e1e1e1e1e070c0e0a08131305161a07161e1e1e16070b0d0a08131303090909090909090909090909011313131313131313131313131313131313`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . 2 . . . . . 2 . 
. 2 . . . . . . 2 . . . . . 2 . 
. 2 . . . . . . 2 . . . . . 2 . 
. 2 . . . . . . 2 . . . . . 2 . 
. 2 . . . . . . 2 . . 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . 2 . . 2 2 . 
. 2 . . 2 . . . . . 2 . . 2 2 . 
. 2 . . 2 . . . . . 2 . . 2 2 . 
. 2 . . 2 . . . . . 2 . 2 2 2 . 
. 2 . 2 2 . . . . . 2 . 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterWest1,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,sprites.dungeon.floorLight0,myTiles.tile8,myTiles.tile10,sprites.dungeon.floorLight4,sprites.dungeon.floorLight3,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile13":
            case "tile15":return tile15;
            case "myTile16":
            case "tile18":return tile18;
            case "myTile12":
            case "tile14":return tile14;
            case "myTile14":
            case "tile16":return tile16;
            case "myTile15":
            case "tile17":return tile17;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
