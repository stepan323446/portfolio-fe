<template>
    <SharedContainerManager has-separate title="contact-form">
        <template #sidebar>
            <SharedManagerSelect hide-top-border title="contacts">
                <FeatureManagerSocialLinks />
            </SharedManagerSelect>
        </template>
        <template #left>
            <h1 class="text-white text-2xl mb-3 text-center"># Let's talk #</h1>

            <div>
                    <form v-if="!isSuccessSent && !error" method="post" class="space-y-3 max-w-md mx-auto" @submit="submitForm">
                    <div class="input-area">
                        <label>_name:</label>
                        <input v-model="name" type="text" />
                    </div>
                    <div class="input-area">
                        <label>_email:</label>
                        <input v-model="email" type="email" />
                    </div>
                    <div class="input-area">
                        <label>_message:</label>
                        <textarea v-model="message" class="min-h-[150px]"></textarea>
                    </div>

                    <SharedBaseButton type="submit" variant="primary" :loading="isPending">send-message</SharedBaseButton>
                </form>
                <SharedInfoPanel 
                v-else-if="isSuccessSent"
                :icon="faEnvelopeOpenText" 
                icon-color="#aaff9c" 
                title="Thank You!" 
                text="Your message has been accepted. You will recieve answer really soon!"
                class="h-[405px]" />

                <SharedInfoPanel
                v-if="error"
                :icon="faCircleXmark" 
                icon-color="#ff9c9c" 
                title="Error" 
                text="An unexpected error has occurred. Try again."
                class="h-[405px]" />
            </div>
            
        </template>
        <template #right>
            <SharedPanel class="p-4 overflow-hidden scrollbar overflow-x-auto">
                <SharedCode :code="code" />
            </SharedPanel>
        </template>
    </SharedContainerManager>
</template>

<script setup lang="ts">
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { useFeedbackRequest } from '~/entities/feedback';

const name = ref('');
const email = ref('');
const message = ref('');
const isSuccessSent = ref(false);
const { execute, isPending, error } = useFeedbackRequest();

const code = computed(() => {
    return `const button = document.querySelector('#sendBtn');

const message = {
    name: "${name.value}",
    email: "${email.value}",
    message: "${message.value}",
    date: "20.02.2026"
    
}
            
button.addEventListener('click', () => {
    form.send(message));
}`
});

const submitForm = async (e: SubmitEvent) => {
    e.preventDefault();

    await execute({
        name: name.value,
        email: email.value,
        message: message.value
    }, {
        onSuccess: () => {
            isSuccessSent.value = true;
        }
    });
}
</script>

<style scoped>

</style>