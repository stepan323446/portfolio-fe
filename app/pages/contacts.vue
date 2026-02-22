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
            <div>
                <SharedPanel class="p-4 overflow-hidden scrollbar overflow-x-auto mb-4">
                    <SharedCode :code="code" />
                </SharedPanel>

                <div class="space-y-4">
                    <FeatureSocialLink
                        v-for="(soc, i) in socialLinks" 
                        :key="i"
                        :icon="soc.icon"
                        :name="soc.name"
                        :description="soc.description"
                        :link="soc.link"
                        :color-hue="soc.colorHue" />
                </div>
            </div>
        </template>
    </SharedContainerManager>
</template>

<script setup lang="ts">
import { faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
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

const socialLinks = [
    {
        icon: faLinkedin,
        name: 'LinkedIn',
        description: 'LinkedIn is a professional social networking platform where users connect with colleagues, showcase their experience, share industry insights, and explore job and business opportunities.',
        link: 'https://www.linkedin.com/in/stepan-turitsin/',
        colorHue: 220
    },
    {
        icon: faTelegram,
        name: 'Telegram',
        description: 'Telegram is a cloud-based messaging platform focused on speed, security, and large-scale communities. It supports private chats, public channels, and bots, and is especially popular in Russia and several CIS countries.',
        link: 'https://t.me/SteveDekart',
        colorHue: 190
    }
]

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