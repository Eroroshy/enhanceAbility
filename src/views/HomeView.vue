<script setup>
import Layout from '@/layout/Layout.vue';

</script>

<template>
    <Layout>
        <div
            class="min-h-screen bg-kinetic-darkBg text-gray-200 font-body selection:bg-kinetic-primary selection:text-white overflow-x-hidden">


            <!-- Hero Section -->
            <section
                class="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                <div class="flex-1 text-center lg:text-left z-10">
                    <div
                        class="inline-flex items-center space-x-2 bg-kinetic-secondary px-4 py-2 rounded-full border border-kinetic-neutralBg mb-6">
                        <span class="w-2 h-2 rounded-full bg-kinetic-tertiary animate-pulse"></span>
                        <span class="text-xs font-headline tracking-widest text-gray-400 uppercase">The Precision
                            Standard v1.0</span>
                    </div>
                    <h1
                        class="font-headline text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none mb-6 border-none p-0">
                        START YOUR <br />
                        <span
                            class="bg-gradient-to-r from-kinetic-primary via-kinetic-tertiary to-white bg-clip-text text-transparent">JOURNEY</span>
                    </h1>
                    <p
                        class="text-gray-400 max-w-lg text-base sm:text-lg mb-10 mx-auto lg:mx-0 font-light leading-relaxed">
                        Lleva tu entrenamiento al siguiente nivel con precisión quirúrgica. Monitorea tus rutinas de
                        hipertrofia, calcula tus RM estimadas mediante fórmulas de alta precisión y desbloquea tu
                        verdadero potencial físico.
                    </p>
                    <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a href="#download"
                            class="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-kinetic-primary hover:bg-kinetic-primary/90 text-white font-headline font-bold text-sm tracking-wide shadow-xl shadow-kinetic-primary/20 transition-all duration-300 transform hover:-translate-y-0.5">
                            Descargar APK Activo
                        </a>
                        <a href="#features"
                            class="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-kinetic-secondary hover:bg-kinetic-neutralBg border border-kinetic-neutralBg text-gray-300 font-headline font-semibold text-sm transition-all">
                            Explorar Funciones
                        </a>
                    </div>
                </div>

                <!-- Smartphone Premium Mockup -->
                <div class="flex-1 relative flex justify-center w-full max-w-md lg:max-w-full">
                    <div
                        class="absolute -inset-4 bg-gradient-to-tr from-kinetic-primary/10 to-kinetic-tertiary/10 rounded-full blur-3xl opacity-60">
                    </div>
                    <div
                        class="relative border-[6px] border-kinetic-neutralBg bg-kinetic-secondary rounded-[40px] shadow-2xl p-3 w-72 h-[580px] overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                        <div
                            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-kinetic-neutralBg rounded-b-2xl z-30">
                        </div>
                        <!-- Contenido Simulado App -->
                        <div class="h-full overflow-y-auto space-y-4 pt-6 px-3 bg-[#0b0c10]">
                            <div class="flex justify-between items-center border-b border-kinetic-neutralBg/40 pb-2">
                                <span class="text-xs font-headline font-bold text-kinetic-tertiary">HYPERTROPHY A</span>
                                <span class="text-[10px] text-gray-500">00:42:15</span>
                            </div>
                            <div class="bg-kinetic-secondary border border-kinetic-neutralBg p-3 rounded-xl">
                                <p class="text-xs font-bold text-white mb-1 m-0">Barbell Bench Press</p>
                                <div class="flex justify-between text-[10px] text-gray-400">
                                    <span>Set 1: 85kg x 8</span>
                                    <span class="text-kinetic-tertiary">+12% Vol</span>
                                </div>
                            </div>
                            <div
                                class="w-full h-24 bg-gradient-to-t from-kinetic-primary/20 to-transparent rounded-xl border border-kinetic-primary/30 flex items-end p-2">
                                <span class="text-[18px] font-headline font-black text-white">225 <span
                                        class="text-xs font-light text-gray-400">KG 1RM</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Seccion de Beneficios / Tarjetas Tecnologicas -->
            <section id="features" class="py-20 bg-gradient-to-b from-kinetic-darkBg to-kinetic-secondary/30 px-6">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center max-w-xl mx-auto mb-16">
                        <h2
                            class="text-2xl sm:text-3xl font-headline font-black text-white uppercase inline-block border-none p-0">
                            Diseñado Para Atletas de Élite</h2>
                        <p class="text-gray-400 text-sm mt-3">Ningún dato al azar. Cada métrica cuenta en tu camino a la
                            progresión óptima.</p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Card 1 -->
                        <div
                            class="bg-kinetic-secondary/80 border border-kinetic-neutralBg p-8 rounded-2xl hover:border-kinetic-primary/50 transition-all group">
                            <div
                                class="w-12 h-12 bg-kinetic-neutralBg rounded-xl flex items-center justify-center mb-6 text-kinetic-primary group-hover:bg-kinetic-primary group-hover:text-white transition-colors">
                                📊
                            </div>
                            <h3 class="text-lg font-headline font-bold text-white mb-3">Cálculo de 1RM Pro</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">Aplica la fórmula matemática 1RM = w \cdot
                                (1 + rac{r}{30}) para evaluar tu fuerza máxima en tiempo real de forma segura y sin
                                fallos fatigosos.</p>
                        </div>
                        <!-- Card 2 -->
                        <div
                            class="bg-kinetic-secondary/80 border border-kinetic-neutralBg p-8 rounded-2xl hover:border-kinetic-tertiary/50 transition-all group">
                            <div
                                class="w-12 h-12 bg-kinetic-neutralBg rounded-xl flex items-center justify-center mb-6 text-kinetic-tertiary group-hover:bg-kinetic-tertiary group-hover:text-black transition-colors">
                                ⚡
                            </div>
                            <h3 class="text-lg font-headline font-bold text-white mb-3">Volumen & Rutina Log</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">Registra series, repeticiones previas e
                                incrementos de volumen de manera ultra fluida, optimizada exclusivamente para pantallas
                                táctiles de smartphone.</p>
                        </div>
                        <!-- Card 3 -->
                        <div
                            class="bg-kinetic-secondary/80 border border-kinetic-neutralBg p-8 rounded-2xl hover:border-kinetic-primary/50 transition-all group">
                            <div
                                class="w-12 h-12 bg-kinetic-neutralBg rounded-xl flex items-center justify-center mb-6 text-kinetic-primary group-hover:bg-kinetic-primary group-hover:text-white transition-colors">
                                🧠
                            </div>
                            <h3 class="text-lg font-headline font-bold text-white mb-3">Coach Insights Intuitivos</h3>
                            <p class="text-gray-400 text-sm leading-relaxed">Analiza las tendencias de crecimiento de tu
                                tonelaje semanal con gráficos limpios que exponen tus áreas de estancamiento y aceleran
                                la hipertrofia.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Sección de Screenshots Dinámicos -->
            <section class="py-20 px-6 max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-2xl font-headline font-bold text-white uppercase border-none p-0">Interfaz de
                        Precisión Impecable</h2>
                </div>
                <div
                    class="flex flex-nowrap overflow-x-auto gap-6 pb-6 scrollbar-thin scrollbar-thumb-kinetic-neutralBg">
                    <div v-for="i in 4" :key="i"
                        class="flex-shrink-0 w-64 h-[450px] bg-kinetic-secondary border border-kinetic-neutralBg rounded-2xl p-4 flex flex-col justify-between">
                        <div
                            class="w-full h-3/4 bg-kinetic-darkBg rounded-xl border border-kinetic-neutralBg flex items-center justify-center text-xs text-gray-500">
                            [ Screenshot Móvil Vista {{ i }} ]
                        </div>
                        <div class="pt-2">
                            <h4 class="text-sm font-headline font-bold text-white m-0">{{ i === 1 ? 'Módulo Perfil' : i
                                === 2 ? 'Rutina Log' : i === 3 ? 'Calculadora 1RM' : 'Librería de Ejercicios' }}</h4>
                            <p class="text-xs text-gray-400 mt-1 m-0">Control absoluto de tus métricas críticas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Final de Conversión / Descarga APK -->
            <section id="download"
                class="py-24 px-6 bg-gradient-to-t from-kinetic-secondary to-kinetic-darkBg text-center border-t border-kinetic-neutralBg/40 relative overflow-hidden">
                <div
                    class="absolute -top-24 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-kinetic-primary/10 rounded-full blur-3xl">
                </div>
                <div class="max-w-2xl mx-auto relative z-10">
                    <h2 class="text-3xl sm:text-5xl font-headline font-black text-white mb-6 border-none p-0">READY TO
                        BREAK <br /><span class="text-kinetic-tertiary">YOUR LIMITS?</span></h2>
                    <p class="text-gray-400 text-base mb-10 font-light">
                        Descarga la última versión de Kinetic de forma directa y segura e instálala en tu dispositivo
                        Android al instante.
                    </p>
                    <div class="inline-flex flex-col items-center gap-4 w-full sm:w-auto">
                        <a href="/downloads/kinetic-latest.apk" download
                            class="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-kinetic-primary to-kinetic-tertiary text-black font-headline font-black text-base rounded-xl shadow-xl shadow-kinetic-primary/20 hover:opacity-95 transform hover:-translate-y-1 transition-all duration-300">
                            🚀 DESCARGAR ARCHIVO APK
                        </a>
                        <span class="text-xs text-gray-500 font-mono">Compatible con Android 10.0+ | SHA-256
                            Verificado</span>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
</template>
