<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const apkUrl = '#download'
</script>

<template>
    <header
        class="fixed top-0 inset-x-0 z-50 bg-kinetic-darkBg/80 backdrop-blur-xl border-b border-kinetic-neutralBg/60 text-white font-body antialiased">
        <nav class="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="#" class="flex items-center gap-2.5 group">
                <span
                    class="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-kinetic-primary to-kinetic-tertiary shadow-lg shadow-kinetic-primary/20 transition-transform duration-300 group-hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3.92443 18.6073L5.39271 20.0756C6.08487 20.7677 6.43095 21.1138 6.861 21.1138C7.29105 21.1138 7.63713 20.7677 8.32928 20.0756L8.69636 19.7085L9.06343 20.0756L9.79757 20.8097C10.4837 21.4959 10.8268 21.8389 11.2299 21.9469C11.4939 22.0177 11.7719 22.0177 12.036 21.9469C12.4391 21.8389 12.7821 21.4959 13.4683 20.8097C14.1544 20.1236 14.4975 19.7805 14.6055 19.3774C14.6763 19.1134 14.6763 18.8353 14.6055 18.5713C14.4975 18.1682 14.1544 17.8251 13.4683 17.139L12.3671 16.0378L16.0378 12.3671L17.139 13.4683C17.8251 14.1544 18.1682 14.4975 18.5713 14.6055C18.8353 14.6763 19.1134 14.6763 19.3774 14.6055C19.7805 14.4975 20.1236 14.1544 20.8097 13.4683C21.4959 12.7821 21.8389 12.4391 21.9469 12.036C22.0177 11.7719 22.0177 11.4939 21.9469 11.2299C21.8389 10.8268 21.4959 10.4837 20.8097 9.79757L20.0756 9.06343L19.7046 8.70027L20.0756 8.32928C20.7677 7.63713 21.1138 7.29105 21.1138 6.861C21.1138 6.43095 20.7677 6.08487 20.0756 5.39271L18.6073 3.92442C17.9151 3.23227 17.5691 2.88619 17.139 2.88619C16.709 2.88619 16.3629 3.23227 15.6707 3.92442L15.3036 4.2915L14.2024 3.19028C13.5163 2.50414 13.1732 2.16107 12.7701 2.05307C12.5061 1.98231 12.2281 1.98231 11.964 2.05307C11.5609 2.16107 11.2179 2.50414 10.5317 3.19028C9.84557 3.87642 9.5025 4.21949 9.3945 4.62257C9.32374 4.88662 9.32374 5.16465 9.3945 5.42871C9.5025 5.83178 9.84557 6.17486 10.5317 6.861L11.6329 7.96221L7.96221 11.6329L6.861 10.5317C6.17486 9.84557 5.83179 9.5025 5.42871 9.3945C5.16466 9.32374 4.88662 9.32374 4.62257 9.3945C4.21949 9.5025 3.87642 9.84557 3.19028 10.5317C2.50414 11.2179 2.16107 11.5609 2.05306 11.964C1.98231 12.2281 1.98231 12.5061 2.05306 12.7701C2.16107 13.1732 2.50414 13.5163 3.19028 14.2024L4.2915 15.3036L3.92443 15.6707C3.23227 16.3629 2.88619 16.709 2.88619 17.139C2.88619 17.5691 3.23227 17.9151 3.92443 18.6073Z"
                            fill="#1C274C" />
                    </svg>
                </span>
                <span class="font-headline font-black tracking-tight text-lg uppercase">
                    Kinetic<span class="text-kinetic-tertiary">.</span>
                </span>
            </a>

            <div class="hidden md:flex items-center gap-10 font-body text-sm font-medium text-white/70">
                <a href="#features" class="hover:text-white transition-colors duration-300">Características</a>
                <a href="#team" class="hover:text-white transition-colors duration-300">Equipo</a>
                <a href="#screenshots" class="hover:text-white transition-colors duration-300">Interfaz</a>
                <a href="#docs" class="hover:text-white transition-colors duration-300">Documentación</a>
            </div>

            <div class="flex items-center gap-3">
                <a :href="apkUrl"
                    class="hidden sm:inline-flex items-center gap-2 rounded-full bg-kinetic-primary px-5 py-2.5 font-headline text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-kinetic-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-kinetic-tertiary hover:shadow-kinetic-tertiary/30 hover:text-kinetic-darkBg">
                    <svg viewBox="0 0 24 24" fill="none" class="h-4 w-4">
                        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Descargar APK
                </a>

                <button @click="mobileMenuOpen = !mobileMenuOpen"
                    class="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-kinetic-neutralBg text-white/80 transition-colors duration-300 hover:border-kinetic-primary"
                    aria-label="Abrir menú">
                    <svg v-if="!mobileMenuOpen" viewBox="0 0 24 24" fill="none" class="h-5 w-5">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" fill="none" class="h-5 w-5">
                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </nav>

        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen"
            class="md:hidden border-t border-kinetic-neutralBg/60 bg-kinetic-darkBg/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5 font-body text-sm font-medium text-white/80">
            <a @click="mobileMenuOpen = false" href="#features"
                class="hover:text-white transition-colors duration-300">Características</a>
            <a @click="mobileMenuOpen = false" href="#team"
                class="hover:text-white transition-colors duration-300">Equipo</a>
            <a @click="mobileMenuOpen = false" href="#screenshots"
                class="hover:text-white transition-colors duration-300">Interfaz</a>
            <a @click="mobileMenuOpen = false" href="#docs"
                class="hover:text-white transition-colors duration-300">Documentación</a>
            <a :href="apkUrl"
                class="inline-flex items-center justify-center gap-2 rounded-full bg-kinetic-primary px-5 py-3 font-headline text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-kinetic-tertiary hover:text-kinetic-darkBg">
                Descargar APK
            </a>
        </div>
    </header>
</template>