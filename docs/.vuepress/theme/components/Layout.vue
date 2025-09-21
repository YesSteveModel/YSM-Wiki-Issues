<script setup lang="ts">
import {Layout} from 'vuepress-theme-plume/client'
import {debounce} from 'lodash'
import {Clock} from 'three'
import {onMounted, onUnmounted, ref, useTemplateRef} from 'vue'
import {KanbanGirl} from 'wine-fox'
import {urls} from 'wine-fox/assets'
import {withFrameRateLimit} from 'wine-fox/tools'

const container = useTemplateRef('container')

const mouse = {
    x: 0,
    y: 0,
}

let dispose = () => {
}

let model: KanbanGirl

function onMouseMove(e: MouseEvent) {
    mouse.x = e.screenX
    mouse.y = e.screenY
}

window.addEventListener('mousemove', onMouseMove)

onMounted(async () => {
    const clock = new Clock()
    model = new KanbanGirl(container.value!)
    await model.load(urls)

    const limit = withFrameRateLimit(60)(() => {
        model.update(clock.getDelta())
        model.lookAt(mouse)
    })
    limit.start()

    const onResize = debounce(() => {
        model.resize()
    }, 500)
    window.addEventListener('resize', onResize)

    dispose = () => {
        limit.stop()
        model.dispose()
        window.removeEventListener('resize', onResize)
    }
})

onUnmounted(() => {
    dispose()
    window.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
    <Layout>
        <template #aside-outline-after>
            <div ref="container" style="width: 100%; height: 20rem;"/>
        </template>
    </Layout>
</template>

<style scoped>
:root {
    --bg-color: #ffffff;
    --text-color: #213547;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s,
    color 0.3s;
}
</style>
