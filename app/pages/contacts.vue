<template>
    <SharedContainerManager has-separate title="contact-form">
        <template #sidebar>
            <SharedManagerSelect hide-top-border title="contacts">
                <FeatureManagerSocialLinks />
            </SharedManagerSelect>
        </template>
        <template #left>
            <h1 class="text-white text-2xl"># Let's talk</h1>
        </template>
        <template #right>
            Hello
        </template>
    </SharedContainerManager>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>