import *as PIXI from 'pixi.js';
import { Application, Sprite, Texture, Container } from 'pixi.js'
const Spritedata:any = [
    {
        position: { x: 0, y: 0 },
        url: './images/bg.jpg',
        name:'bg',
    },
    {
        position: { x: 584, y: 31 },
        url: './images/xing1.png',
        name:'xing1',
    },
    {
        position: { x: 164, y: 372 },
        url: './images/1-biaoti.png',
        name:'1-biaoti',
    },
];
const sprites:any = {};
export function initSprite(app:any,container:any) {
    for (let i = 0; i < Spritedata.length; i++) {
        let name = Spritedata[i].name
        console.log(name)
        sprites[Spritedata[i].name] = Sprite.from(Spritedata[i].url);
        sprites[Spritedata[i].name].position.set(Spritedata[i].position.x, Spritedata[i].position.y);
        container.addChild(sprites[Spritedata[i].name])
    }
} 