<template>

<div></div>

</template>
<script setup lang='ts'>
import { reactive,onMounted } from 'vue';
import  *as PIXI from 'pixi.js';
//import {OutlineFilter,GlowFilter} from 'pixi-filters'
import {  Application,Sprite,Texture,Container } from 'pixi.js'
//创建一个画布
onMounted(() => {
  let w:number =document.body.clientWidth;
let  h:number =document.body.clientHeight;
const app:any = new Application({
  width: w,
  height:h ,
  backgroundColor: 0xfffffb
});
const scale:number = w/750
document.body.appendChild(app.view);
app.stage.scale.set(scale)
//创建一个容器
const container:Container = new Container();
container.width =3000;
container.height =750;
container.x =0;
// container.y =0;

app.stage.addChild(container);
//创建一个纹理
const texture:Texture = Texture.from('./imgs/balloon.png');
const sprite:Sprite = new Sprite(texture);
const bg:Sprite = Sprite.from('./images/bg.png');
container.addChild(bg)
sprite.x =0;
sprite.y =0;
container.addChild(sprite);
app.stage.rotation=1.5708;
app.stage.angle = 90
app.stage.pivot.set(0.5);
app.stage.x = w;
//自动播放事件
app.ticker.add((delta:number) => {
    // rotate the container!
    // use delta to create frame-independent transform
    app.stage.position.y=(app.stage.position.y-1)
});
})


</script>
<style scoped lang='less'>
</style>