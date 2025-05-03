<template>
    <div class="vp-file-card">
        <div class="file-card-left">
            <Icon name="bxs:file" color="currentColor"/>
            <div class="file-details">
                <span class="file-name">{{ fileName }}</span>
                <span class="file-size">{{ fileSize }}</span>
            </div>
        </div>
        <div class="file-card-right">
            <button class="download-button" @click="downloadFile">
                <Icon name="material-symbols:download-rounded" color="currentColor"/>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from "@vue/runtime-core";

const props = defineProps<{
    fileName: string
    fileSize: string
    fileUrl: string
}>()

function downloadFile() {
    const a = document.createElement('a');
    a.href = props.fileUrl;
    a.download = props.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
</script>

<style scoped>
.vp-file-card {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    margin: 8px 0;
    border: solid 1px var(--vp-c-divider);
    border-radius: 8px;
    transition: border-color var(--vp-t-color);
}

.vp-file-card .file-card-left {
    display: flex;
    align-items: start;
    font-size: 4em;
    color: var(--vp-c-text-2);
}

.vp-file-card .file-details {
    margin-top: 8px;
    display: flex;
    flex-direction: column;
}

.vp-file-card .file-name {
    display: flex;
    gap: 0 8px;
    align-items: center;
    max-width: 100%;
    font-size: 16px;
    font-weight: 600;
    color: var(--vp-c-brand-1);
    text-decoration: none;
    transition: color var(--vp-t-color);
}

.vp-file-card .file-size {
    font-size: 12px;
    color: var(--vp-c-text-3);
}

.vp-file-card .file-card-right {
    color: var(--vp-c-text-2);
    transition: color var(--vp-t-color);
}

.vp-file-card .download-button {
    font-size: 2.5em;
    padding: 10px;
    border-radius: 2px;
    margin: 0 16px;
    color: var(--vp-c-text-3);
}

.vp-file-card .download-button:hover {
    background-color: var(--vp-c-bg-soft);
    border: solid 1px var(--vp-c-divider);
    border-radius: 8px;
    transition: border-color var(--vp-t-color);
    box-shadow: var(--vp-shadow-2);
}

</style>