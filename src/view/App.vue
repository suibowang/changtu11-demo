<template>
  <div>

  </div>
</template>
<script setup lang='ts'>
import { reactive, onMounted } from 'vue';
import { Application, Assets, Container, Sprite } from 'pixi.js';
import * as PIXI from 'pixi.js';
import aa from './assets/imgs/boy.png'
onMounted(() => {
  let w: number = document.body.clientWidth;
  let h: number = document.body.clientHeight;
  const app: any = new Application({
    width: w,
    height: h,
    backgroundColor: 0x1099bb,
  });
  const scale =w/750 
  document.body.appendChild(app.view);
  //创建一个容器
  const container: any = new Container();
  app.stage.addChild(container);
  //创建一个纹理
  const texture: PIXI.Texture = PIXI.Texture.from(aa);
  for (let i = 0; i < 1; i++) {
    const bunny: Sprite = new Sprite(texture)
    //旋转中心锚点
    bunny.anchor.set(0);
    bunny.width = 45;
    bunny.height = 84;
    bunny.x = (i % 5) * 60;
    bunny.y = Math.floor(i / 5) * 100;
    container.addChild(bunny);
  }
  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;
  console.log(container.x, container.y);
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;
  // container.anchor.set(0.5);容器没有这个属性锚点属性
  app.ticker.add((delta:any) => {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
});

})
</script>

<style scoped lang='less'></style>