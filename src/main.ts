import * as PIXI from 'pixi.js';
import createArrow from 'util/createArrow';
import drawEllipse from 'util/drawEllipse';
import createRect from 'util/createRect';
import app from 'app'
import enableDragOnApp from 'traits/drag';
import enableZoomAndPan from 'traits/zoomAndPan';
import loadDotFile from 'util/loadDotFile2';

enableDragOnApp(app)
enableZoomAndPan(app)


// @ts-expect-error
document.body.appendChild(app.view);

// Scale mode for pixelation
// texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

// zoom out a lot
app.stage.scale.set(0.5);


loadDotFile()

const rects = [
    createRect(600, 600, 'ABCD'),

    createRect(600, 800, 'B'),
    createRect(900, 600, 'C'),
    createRect(300, 600, 'D'),
    createRect(600, 400, 'E'),

    createRect(900, 800, 'F'),
    createRect(900, 400, 'G'),
    createRect(300, 800, 'H'),
    createRect(300, 400, 'I'),
    drawEllipse(600, 600, 200, 200)

]

const arrows = [
    createArrow(rects[0], rects[1]),
    createArrow(rects[0], rects[2]),
    createArrow(rects[0], rects[3]),
    createArrow(rects[0], rects[4]),

    createArrow(rects[0], rects[5]),
    createArrow(rects[0], rects[6]),
    createArrow(rects[0], rects[7]),
    createArrow(rects[0], rects[8]),

]




/** Text performance checks */

// function createText() {

//     const text = new PIXI.Text('Hello', {
//         fontSize: 36,
//         fill: 0xffffff,
//     });

//     // Generate random positions for the text
//     const randomX = Math.random() * (app.screen.width - text.width) * 10;
//     const randomY = Math.random() * (app.screen.height - text.height) * 10;

//     // Set the text's position
//     text.x = randomX;
//     text.y = randomY;

//     // Add the text to the stage
//     app.stage.addChild(text);
// }


// for (let i = 0; i < 1000; i++) {
//     createText()
// }