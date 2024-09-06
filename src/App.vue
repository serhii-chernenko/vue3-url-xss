<script setup lang="ts">
import { ref } from 'vue'
import { useSanitizer } from '@/composables/useSanitizer'

const { sanitizeUrl } = useSanitizer()

const links = ref([
    {
        label: 'Certificates.dev',
        url: 'https://certificates.dev/',
    },
    {
        label: 'Vue Docs',
        url: 'https://vuejs.org/',
    },
    {
        label: 'Vue School',
        url: 'https://vueschool.io/',
    },
    {
        label: 'Unsafe Link from Untrusted User',
        url: "javascript: alert('script kitties attack!! 🐱⚔️')",
    },
])
</script>
<template>
    <div class="page">
        <ul class="menu bg-base-200 rounded-box">
            <li v-for="link in links" :key="link.url">
                <a :href="sanitizeUrl(link.url)">
                    {{ link.label }}
                </a>
            </li>
        </ul>
    </div>
</template>
