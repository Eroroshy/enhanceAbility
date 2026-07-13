<script setup lang="ts">
// @ts-ignore
import Navbar from '@/components/Navbar.vue';
// @ts-ignore
import Footer from '@/components/Footer.vue'

</script>

<template>
    <div>
        <Navbar />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>