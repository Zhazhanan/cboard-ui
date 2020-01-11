<template>
    <div id="app">
        <main-header></main-header>
        <main-sidebar></main-sidebar>
        <main-content></main-content>
        <main-footer></main-footer>

        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style>
</style>
