<script setup>
import Layout from '@/layout/Layout.vue'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const apkUrl = '/kinetic.apk'
const repoUrl = 'https://github.com/Eroroshy/kinetic' // Reemplaza con el enlace real de tu repositorio
const docUrl = '/memoria-kinetic.pdf'          // Reemplaza con la ruta real de tu documento

const features = [
    {
        title: 'Cálculo 1RM de Precisión',
        description: 'Estima tu una-repetición-máxima con la fórmula de Epley, calibrada para cargas reales de entrenamiento de fuerza.',
        formula: true,
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
        title: 'Registro de Volumen',
        description: 'Cada serie, cada repetición, cada kilo. Un log estructurado que convierte tu entrenamiento en datos accionables.',
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
        title: 'Librería de Ejercicios',
        description: 'Catálogo curado con biomecánica correcta para los movimientos base: sentadilla, peso muerto, press de banca y más.',
        icon: 'M4 6h16M4 12h16M4 18h7',
    },
]

const team = [
    { name: 'Aaron Gallardo Malpica', role: 'Product Owner', initials: 'AG' },
    { name: 'Diego Blanco Rodriguez', role: 'Scrum Master', initials: 'DB' },
    { name: 'Erick Daniel Vargas Corona', role: 'Líder de Desarrollo', initials: 'EV' }
]

const screenshots = [
    { id: 1, label: 'Módulo Perfil' },
    { id: 2, label: 'Rutina Log' },
    { id: 3, label: 'Calculadora 1RM' },
    { id: 4, label: 'Librería de Ejercicios' },
]
</script>

<template>
    <Layout>
        <div
            class="min-h-screen bg-kinetic-darkBg text-white font-body antialiased selection:bg-kinetic-tertiary selection:text-kinetic-darkBg">

            <main class="pt-20">

                <!-- ============================= -->
                <!-- HERO SECTION -->
                <!-- ============================= -->
                <section class="relative overflow-hidden">
                    <!-- ambient glow -->
                    <div
                        class="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-kinetic-primary/20 blur-[120px]">
                    </div>
                    <div
                        class="pointer-events-none absolute top-40 -right-40 h-96 w-96 rounded-full bg-kinetic-tertiary/10 blur-[120px]">
                    </div>

                    <div
                        class="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">

                        <!-- Left: copy -->
                        <div class="relative z-10">
                            <div
                                class="inline-flex items-center gap-2 rounded-full border border-kinetic-neutralBg bg-kinetic-secondary/60 px-4 py-1.5 mb-8">
                                <span class="h-1.5 w-1.5 rounded-full bg-kinetic-tertiary animate-pulse"></span>
                                <span
                                    class="font-body text-xs font-semibold uppercase tracking-widest text-white/60">Entrenamiento
                                    de precisión</span>
                            </div>

                            <h1
                                class="font-headline font-black uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl">
                                <span class="block text-white">Explota tu</span>
                                <span
                                    class="block bg-gradient-to-r from-kinetic-primary via-kinetic-tertiary to-kinetic-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_6s_ease_infinite]">
                                    potencial
                                </span>
                            </h1>

                            <p class="mt-8 max-w-md font-body text-base sm:text-lg text-white/60 leading-relaxed">
                                La aplicación de entrenamiento diseñada para atletas de élite. Rastrea tu volumen,
                                calcula tu fuerza máxima y perfecciona cada repetición.
                            </p>

                            <div class="mt-10 flex flex-col sm:flex-row gap-4">
                                <a :href="apkUrl"
                                    class="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-kinetic-primary to-kinetic-tertiary px-8 py-4 font-headline font-bold uppercase tracking-wide text-kinetic-darkBg shadow-xl shadow-kinetic-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-kinetic-tertiary/30">
                                    <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5">
                                        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Descargar APK
                                </a>
                                <a href="#features"
                                    class="inline-flex items-center justify-center gap-2 rounded-xl border border-kinetic-neutralBg bg-kinetic-secondary/40 px-8 py-4 font-headline font-bold uppercase tracking-wide text-sm text-white/80 transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-primary hover:text-white">
                                    Ver Características
                                </a>
                            </div>

                            <div
                                class="mt-12 flex items-center gap-8 text-white/40 font-body text-xs uppercase tracking-widest">
                                <span>Android 8.0+</span>
                                <span class="h-3 w-px bg-kinetic-neutralBg"></span>
                                <span>Sin anuncios</span>
                                <span class="h-3 w-px bg-kinetic-neutralBg"></span>
                                <span>Offline-ready</span>
                            </div>
                        </div>

                        <!-- Right: phone mockup -->
                        <div class="relative z-10 flex justify-center lg:justify-end">
                            <div class="relative w-[280px] sm:w-[320px]">
                                <!-- glow behind phone -->
                                <div
                                    class="absolute inset-0 -z-10 rounded-[3rem] bg-kinetic-primary/20 blur-3xl scale-90">
                                </div>

                                <!-- phone chassis -->
                                <div
                                    class="relative rounded-[2.5rem] border-[6px] border-kinetic-secondary bg-kinetic-darkBg shadow-2xl shadow-black/60 overflow-hidden">
                                    <!-- notch -->
                                    <div class="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                                        <div class="h-5 w-24 rounded-b-2xl bg-kinetic-secondary"></div>
                                    </div>

                                    <!-- screen content -->
                                    <div
                                        class="aspect-[9/19.5] bg-gradient-to-b from-[#101215] to-kinetic-darkBg p-4 pt-9 flex flex-col gap-4">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p
                                                    class="font-body text-[10px] uppercase tracking-widest text-white/40">
                                                    Bienvenido</p>
                                                <p class="font-headline font-bold text-sm text-white">Alex Mercer</p>
                                            </div>
                                            <div
                                                class="h-8 w-8 rounded-full bg-gradient-to-br from-kinetic-primary to-kinetic-tertiary">
                                            </div>
                                        </div>

                                        <div
                                            class="rounded-2xl bg-kinetic-secondary border border-kinetic-neutralBg p-4">
                                            <p
                                                class="font-body text-[10px] uppercase tracking-widest text-kinetic-tertiary mb-1">
                                                1RM Actual</p>
                                            <p class="font-headline font-black text-3xl text-white">225 <span
                                                    class="text-base text-white/50">KG</span></p>
                                            <p class="font-body text-[10px] text-white/40 mt-1">Sentadilla trasera</p>
                                        </div>

                                        <div
                                            class="rounded-2xl bg-kinetic-secondary border border-kinetic-neutralBg p-4 flex-1">
                                            <p
                                                class="font-body text-[10px] uppercase tracking-widest text-white/40 mb-3">
                                                Volumen semanal</p>
                                            <div class="flex items-end gap-1.5 h-20">
                                                <div class="flex-1 rounded-t bg-kinetic-primary/40" style="height: 40%">
                                                </div>
                                                <div class="flex-1 rounded-t bg-kinetic-primary/60" style="height: 65%">
                                                </div>
                                                <div class="flex-1 rounded-t bg-kinetic-tertiary" style="height: 90%">
                                                </div>
                                                <div class="flex-1 rounded-t bg-kinetic-primary/50" style="height: 55%">
                                                </div>
                                                <div class="flex-1 rounded-t bg-kinetic-primary/70" style="height: 75%">
                                                </div>
                                                <div class="flex-1 rounded-t bg-kinetic-primary/30" style="height: 30%">
                                                </div>
                                                <div class="flex-1 rounded-t bg-kinetic-tertiary/70"
                                                    style="height: 85%"></div>
                                            </div>
                                        </div>

                                        <div
                                            class="rounded-2xl bg-gradient-to-r from-kinetic-primary to-kinetic-tertiary p-3 text-center">
                                            <p
                                                class="font-headline font-bold text-xs uppercase tracking-wide text-kinetic-darkBg">
                                                Registrar serie</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ============================= -->
                <!-- FEATURES SECTION -->
                <!-- ============================= -->
                <section id="features" class="relative py-24 lg:py-32 border-t border-kinetic-neutralBg/60">
                    <div class="max-w-7xl mx-auto px-6 lg:px-8">
                        <div class="max-w-2xl mb-16">
                            <p class="font-body text-xs font-bold uppercase tracking-widest text-kinetic-tertiary mb-4">
                                Características</p>
                            <h2
                                class="font-headline font-black uppercase text-4xl sm:text-5xl leading-tight tracking-tight">
                                Herramientas de precisión<br class="hidden sm:block" /> para atletas serios
                            </h2>
                        </div>

                        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="feature in features" :key="feature.title"
                                class="group relative rounded-2xl border border-kinetic-neutralBg bg-kinetic-secondary p-8 transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-primary">
                                <div
                                    class="flex h-12 w-12 items-center justify-center rounded-xl bg-kinetic-neutralBg/60 text-kinetic-tertiary mb-6 transition-colors duration-300 group-hover:bg-kinetic-primary/10">
                                    <svg viewBox="0 0 24 24" fill="none" class="h-6 w-6">
                                        <path :d="feature.icon" stroke="currentColor" stroke-width="1.8"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <h3 class="font-headline font-bold uppercase text-lg tracking-tight mb-3">{{
                                    feature.title }}</h3>
                                <p class="font-body text-sm text-white/55 leading-relaxed">{{ feature.description }}</p>

                                <div v-if="feature.formula"
                                    class="mt-6 rounded-lg border border-kinetic-neutralBg bg-kinetic-darkBg/60 px-4 py-3">
                                    <p class="font-body text-sm text-kinetic-tertiary tracking-wide">
                                        1RM = W &times; (1 + R &frasl; 30)
                                    </p>
                                    <p class="font-body text-[11px] text-white/35 mt-1">W = peso levantado · R =
                                        repeticiones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ============================= -->
                <!-- TEAM SECTION -->
                <!-- ============================= -->
                <section id="team"
                    class="relative py-24 lg:py-32 border-t border-kinetic-neutralBg/60 bg-kinetic-secondary/20">
                    <div class="max-w-7xl mx-auto px-6 lg:px-8">
                        <div class="max-w-2xl mb-16">
                            <p class="font-body text-xs font-bold uppercase tracking-widest text-kinetic-primary mb-4">
                                Acerca de nosotros</p>
                            <h2
                                class="font-headline font-black uppercase text-4xl sm:text-5xl leading-tight tracking-tight">
                                Ingeniería detrás<br class="hidden sm:block" /> del rendimiento
                            </h2>
                        </div>

                        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="member in team" :key="member.name"
                                class="group relative rounded-2xl border border-kinetic-neutralBg bg-kinetic-secondary overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-tertiary">
                                <!-- top pattern strip -->
                                <div class="h-1.5 w-full bg-gradient-to-r from-kinetic-primary to-kinetic-tertiary">
                                </div>

                                <div class="p-8">
                                    <!-- abstract tech avatar -->
                                    <div class="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                                        <div
                                            class="absolute inset-0 rounded-2xl border border-kinetic-tertiary/40 rotate-45 transition-transform duration-500 group-hover:rotate-[55deg]">
                                        </div>
                                        <div
                                            class="absolute inset-2 rounded-2xl border border-kinetic-primary/40 rotate-12 transition-transform duration-500 group-hover:rotate-[22deg]">
                                        </div>
                                        <div
                                            class="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-kinetic-primary to-kinetic-tertiary">
                                            <span class="font-headline font-black text-kinetic-darkBg text-sm">{{
                                                member.initials }}</span>
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <h3 class="font-headline font-bold text-base text-white mb-2 leading-snug">{{
                                            member.name }}</h3>
                                        <p
                                            class="inline-block font-mono text-[11px] uppercase tracking-widest text-kinetic-tertiary border border-kinetic-neutralBg rounded-full px-3 py-1">
                                            {{ member.role }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ============================= -->
                <!-- SCREENSHOTS SECTION -->
                <!-- ============================= -->
                <section id="screenshots" class="relative py-24 lg:py-32 border-t border-kinetic-neutralBg/60">
                    <div class="max-w-7xl mx-auto px-6 lg:px-8">
                        <div class="max-w-2xl mb-16">
                            <p class="font-body text-xs font-bold uppercase tracking-widest text-kinetic-tertiary mb-4">
                                Interfaz de precisión</p>
                            <h2
                                class="font-headline font-black uppercase text-4xl sm:text-5xl leading-tight tracking-tight">
                                Diseñada para verse<br class="hidden sm:block" /> tan bien como funciona
                            </h2>
                        </div>

                        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            <!-- Vista 1: Módulo Perfil -->
                            <div
                                class="rounded-2xl border border-kinetic-neutralBg bg-kinetic-secondary overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-primary">
                                <div
                                    class="aspect-[9/16] p-4 flex flex-col gap-3 bg-gradient-to-b from-[#101215] to-kinetic-darkBg">
                                    <div class="flex flex-col items-center gap-2 mt-2">
                                        <div
                                            class="h-14 w-14 rounded-full bg-gradient-to-br from-kinetic-primary to-kinetic-tertiary">
                                        </div>
                                        <p class="font-headline font-bold text-xs text-white">Alex Mercer</p>
                                        <span
                                            class="font-mono text-[9px] uppercase tracking-widest text-kinetic-darkBg bg-kinetic-tertiary rounded-full px-2 py-0.5">Rango
                                            Elite</span>
                                    </div>
                                    <div class="grid grid-cols-3 gap-1.5 mt-2">
                                        <div class="rounded-lg bg-kinetic-neutralBg/50 p-2 text-center">
                                            <p class="font-headline font-black text-xs text-white">225</p>
                                            <p class="font-body text-[7px] uppercase text-white/40">Squat</p>
                                        </div>
                                        <div class="rounded-lg bg-kinetic-neutralBg/50 p-2 text-center">
                                            <p class="font-headline font-black text-xs text-white">140</p>
                                            <p class="font-body text-[7px] uppercase text-white/40">Bench</p>
                                        </div>
                                        <div class="rounded-lg bg-kinetic-neutralBg/50 p-2 text-center">
                                            <p class="font-headline font-black text-xs text-white">260</p>
                                            <p class="font-body text-[7px] uppercase text-white/40">Dead</p>
                                        </div>
                                    </div>
                                    <div class="flex-1 rounded-lg border border-dashed border-kinetic-neutralBg mt-1">
                                    </div>
                                </div>
                                <p
                                    class="font-body text-xs uppercase tracking-widest text-white/50 text-center py-4 border-t border-kinetic-neutralBg">
                                    {{ screenshots[0].label }}</p>
                            </div>

                            <!-- Vista 2: Rutina Log -->
                            <div
                                class="rounded-2xl border border-kinetic-neutralBg bg-kinetic-secondary overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-primary">
                                <div
                                    class="aspect-[9/16] p-4 flex flex-col gap-2 bg-gradient-to-b from-[#101215] to-kinetic-darkBg">
                                    <p class="font-body text-[9px] uppercase tracking-widest text-white/40 mb-1">
                                        Hypertrophy · Día 3</p>
                                    <div v-for="i in 4" :key="i"
                                        class="rounded-lg bg-kinetic-neutralBg/40 border border-kinetic-neutralBg p-2 flex items-center justify-between">
                                        <span class="font-body text-[9px] text-white/70">Serie {{ i }}</span>
                                        <div class="flex gap-1">
                                            <span class="h-1.5 w-6 rounded-full"
                                                :class="i <= 2 ? 'bg-kinetic-tertiary' : 'bg-kinetic-neutralBg'"></span>
                                            <span class="h-1.5 w-6 rounded-full"
                                                :class="i <= 3 ? 'bg-kinetic-primary' : 'bg-kinetic-neutralBg'"></span>
                                        </div>
                                    </div>
                                    <div class="flex-1"></div>
                                    <div
                                        class="rounded-lg bg-kinetic-primary/10 border border-kinetic-primary/30 p-2 text-center">
                                        <p class="font-body text-[9px] text-kinetic-tertiary">+12% volumen vs. semana
                                            pasada</p>
                                    </div>
                                </div>
                                <p
                                    class="font-body text-xs uppercase tracking-widest text-white/50 text-center py-4 border-t border-kinetic-neutralBg">
                                    {{ screenshots[1].label }}</p>
                            </div>

                            <!-- Vista 3: Calculadora 1RM -->
                            <div
                                class="rounded-2xl border border-kinetic-neutralBg bg-kinetic-secondary overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-primary">
                                <div
                                    class="aspect-[9/16] p-4 flex flex-col gap-3 bg-gradient-to-b from-[#101215] to-kinetic-darkBg">
                                    <p class="font-body text-[9px] uppercase tracking-widest text-white/40">Calculadora
                                        1RM</p>
                                    <div
                                        class="rounded-lg bg-kinetic-neutralBg/40 border border-kinetic-neutralBg px-3 py-2">
                                        <p class="font-body text-[8px] text-white/40">Peso (kg)</p>
                                        <p class="font-headline font-bold text-sm text-white">180</p>
                                    </div>
                                    <div
                                        class="rounded-lg bg-kinetic-neutralBg/40 border border-kinetic-neutralBg px-3 py-2">
                                        <p class="font-body text-[8px] text-white/40">Repeticiones</p>
                                        <p class="font-headline font-bold text-sm text-white">5</p>
                                    </div>
                                    <div
                                        class="rounded-lg bg-gradient-to-r from-kinetic-primary to-kinetic-tertiary py-2 text-center mt-1">
                                        <p class="font-headline font-bold text-[10px] uppercase text-kinetic-darkBg">
                                            Calcular</p>
                                    </div>
                                    <div class="flex-1 flex items-center justify-center">
                                        <p class="font-headline font-black text-2xl text-kinetic-tertiary">210<span
                                                class="text-xs text-white/40 ml-1">KG</span></p>
                                    </div>
                                </div>
                                <p
                                    class="font-body text-xs uppercase tracking-widest text-white/50 text-center py-4 border-t border-kinetic-neutralBg">
                                    {{ screenshots[2].label }}</p>
                            </div>

                            <!-- Vista 4: Librería de Ejercicios -->
                            <div
                                class="rounded-2xl border border-kinetic-neutralBg bg-kinetic-secondary overflow-hidden transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-primary">
                                <div
                                    class="aspect-[9/16] p-4 flex flex-col gap-2 bg-gradient-to-b from-[#101215] to-kinetic-darkBg">
                                    <p class="font-body text-[9px] uppercase tracking-widest text-white/40 mb-1">
                                        Librería</p>
                                    <div
                                        class="rounded-lg bg-kinetic-neutralBg/40 border border-kinetic-neutralBg p-2.5">
                                        <p class="font-body text-[10px] font-semibold text-white">Barbell Deadlift</p>
                                        <p class="font-body text-[8px] text-white/40 mt-0.5">Posterior chain</p>
                                    </div>
                                    <div
                                        class="rounded-lg bg-kinetic-neutralBg/40 border border-kinetic-neutralBg p-2.5">
                                        <p class="font-body text-[10px] font-semibold text-white">Bench Press</p>
                                        <p class="font-body text-[8px] text-white/40 mt-0.5">Push · Pecho</p>
                                    </div>
                                    <div
                                        class="rounded-lg bg-kinetic-neutralBg/40 border border-kinetic-neutralBg p-2.5">
                                        <p class="font-body text-[10px] font-semibold text-white">Back Squat</p>
                                        <p class="font-body text-[8px] text-white/40 mt-0.5">Legs · Core</p>
                                    </div>
                                    <div
                                        class="rounded-lg border border-dashed border-kinetic-neutralBg flex-1 flex items-center justify-center">
                                        <p class="font-body text-[8px] text-white/25">+ 42 ejercicios más</p>
                                    </div>
                                </div>
                                <p
                                    class="font-body text-xs uppercase tracking-widest text-white/50 text-center py-4 border-t border-kinetic-neutralBg">
                                    {{ screenshots[3].label }}</p>
                            </div>

                        </div>
                    </div>
                </section>

                <!-- ============================= -->
                <!-- DOCUMENTATION SECTION (#docs) -->
                <!-- ============================= -->
                <section id="docs"
                    class="relative py-24 lg:py-32 border-t border-kinetic-neutralBg/60 bg-kinetic-secondary/20 overflow-hidden">
                    <!-- ambient glow for docs section -->
                    <div
                        class="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-kinetic-tertiary/10 blur-[100px]">
                    </div>

                    <div class="max-w-7xl mx-auto px-6 lg:px-8">
                        <div class="max-w-2xl mb-16">
                            <p class="font-body text-xs font-bold uppercase tracking-widest text-kinetic-primary mb-4">
                                Documentación</p>
                            <h2
                                class="font-headline font-black uppercase text-4xl sm:text-5xl leading-tight tracking-tight">
                                Transparencia y<br class="hidden sm:block" /> código abierto
                            </h2>
                        </div>

                        <div class="grid md:grid-cols-2 gap-8">
                            <!-- Card 1: Repository -->
                            <div
                                class="group relative rounded-2xl border border-kinetic-neutralBg bg-kinetic-secondary p-8 transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-primary flex flex-col justify-between">
                                <div>
                                    <div
                                        class="flex h-12 w-12 items-center justify-center rounded-xl bg-kinetic-neutralBg/60 text-kinetic-primary mb-6 transition-colors duration-300 group-hover:bg-kinetic-primary/10">
                                        <!-- GitHub Icon -->
                                        <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48.000-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.068.069-.068 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                        </svg>
                                    </div>
                                    <h3 class="font-headline font-bold uppercase text-lg tracking-tight mb-3">
                                        Repositorio del Proyecto</h3>
                                    <p class="font-body text-sm text-white/55 leading-relaxed mb-6">
                                        Explora la arquitectura limpia del software, el historial de confirmaciones de
                                        Git y las métricas de desarrollo implementadas en Kinetic.
                                    </p>
                                </div>
                                <a :href="repoUrl" target="_blank"
                                    class="inline-flex items-center justify-center gap-2 rounded-xl border border-kinetic-neutralBg bg-kinetic-darkBg/50 px-6 py-3.5 font-headline font-bold uppercase tracking-wide text-sm text-white/80 transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-primary hover:text-white mt-auto">
                                    Ver Código Fuente
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                        class="h-4 w-4">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </div>

                            <!-- Card 2: Memory / Document -->
                            <div
                                class="group relative rounded-2xl border border-kinetic-neutralBg bg-kinetic-secondary p-8 transition-all duration-300 transform hover:-translate-y-0.5 hover:border-kinetic-tertiary flex flex-col justify-between">
                                <div>
                                    <div
                                        class="flex h-12 w-12 items-center justify-center rounded-xl bg-kinetic-neutralBg/60 text-kinetic-tertiary mb-6 transition-colors duration-300 group-hover:bg-kinetic-tertiary/10">
                                        <!-- File/Doc Icon -->
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                                            class="h-6 w-6">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 class="font-headline font-bold uppercase text-lg tracking-tight mb-3">Memoria
                                        Técnica</h3>
                                    <p class="font-body text-sm text-white/55 leading-relaxed mb-6">
                                        Consulta la documentación oficial del sistema. Incluye los requisitos, diagramas
                                        de arquitectura, justificación del stack tecnológico y metodologías ágiles
                                        aplicadas.
                                    </p>
                                </div>
                                <a :href="docUrl" download
                                    class="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-kinetic-primary to-kinetic-tertiary px-6 py-3.5 font-headline font-bold uppercase tracking-wide text-sm text-kinetic-darkBg shadow-xl shadow-kinetic-primary/15 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-kinetic-tertiary/20 mt-auto">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                                        class="h-4 w-4">
                                        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Descargar Memoria
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ============================= -->
                <!-- CTA FINAL -->
                <!-- ============================= -->
                <section id="download" class="relative py-24 lg:py-32 border-t border-kinetic-neutralBg/60">
                    <div class="max-w-7xl mx-auto px-6 lg:px-8">
                        <div
                            class="relative overflow-hidden rounded-3xl border border-kinetic-neutralBg bg-gradient-to-br from-kinetic-primary/10 via-kinetic-secondary to-kinetic-tertiary/5 px-8 py-16 sm:px-16 sm:py-20 text-center">
                            <div
                                class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-kinetic-primary/20 blur-[100px]">
                            </div>

                            <p
                                class="relative font-body text-xs font-bold uppercase tracking-widest text-kinetic-tertiary mb-5">
                                Disponible ahora</p>
                            <h2
                                class="relative font-headline font-black uppercase text-4xl sm:text-6xl leading-tight tracking-tight max-w-3xl mx-auto">
                                Tu próximo récord empieza con un descarga
                            </h2>
                            <p class="relative mt-6 max-w-lg mx-auto font-body text-white/55">
                                Instala Kinetic Precision y empieza a entrenar con datos reales desde tu primera sesión.
                            </p>

                            <div class="relative mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <a :href="apkUrl"
                                    class="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-kinetic-primary to-kinetic-tertiary px-10 py-5 font-headline font-black uppercase tracking-wide text-kinetic-darkBg shadow-2xl shadow-kinetic-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-kinetic-tertiary/40">
                                    <svg viewBox="0 0 24 24" fill="none" class="h-5 w-5">
                                        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" stroke="currentColor"
                                            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Descargar APK
                                </a>
                            </div>
                            <p class="relative mt-6 font-body text-[11px] uppercase tracking-widest text-white/30">
                                Android 8.0+ · 24 MB · v1.0</p>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    </Layout>
</template>