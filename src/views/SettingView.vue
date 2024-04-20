<template>
    <div class="flex justify-center items-center h-full bg-[#0F172A] gap-20">
        <h1 class="text-5xl bg-gradient-to-r from-[#6C63FF] via-green-400 to-emerald-500
                        bg-clip-text text-transparent font-sans font-bold">Contact Me</h1>
        <div class=" border border-[#6C63FF] rounded-lg p-4">
            <form action="" ref="form" @submit.prevent="sendEmail">
                <div class="flex flex-col gap-8">
                    <div class="flex space-x-4">
                        <span class="relative  ">
                            <i
                                class="pi pi-user absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                            <InputText v-model="value1" placeholder="UserName" name="userName"
                                class="pl-10 md:w-60 w-full  " />
                        </span>
                        <span class="relative ">
                            <i
                                class="pi pi-whatsapp  absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                            <InputText v-model="value2" placeholder="Number" name="Number" class="pl-10 w-full " />
                        </span>
                    </div>
                    <span class="relative ">
                        <i class="pi pi-at absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600" />
                        <InputText v-model="value3" placeholder="Email" name="to" class=" pl-10 w-full " />
                    </span>
                    <span>
                        <InputText v-model="value4" placeholder="Subject" name="Subject" class=" w-full" />
                    </span>
                    <span>
                        <Textareas v-model="value5" rows="5" cols="30" name="message" placeholder="message"
                            class="w-full" />

                    </span>
                    <span>
                        <Toast />
                        <Buttons icon="pi pi-arrow-right" label="Send" type="submit"  
                            class="bg-[#6C63FF]" />
                    </span>

                </div>

            </form>

        </div>

    </div>
</template>
<script>
import emailjs from '@emailjs/browser';
import InputText from 'primevue/inputtext';
import Textareas from 'primevue/textarea';
import Buttons from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
export default {
    components: {
     
        InputText,
        Textareas,
        Buttons,
        Toast
    },
    data() {
        return {

            toast: useToast(), value1: "", value2: "", value3: "", value4: "", value5: ""


        }
    },
    methods: {
        removeContent() {
            this.value1 = ""
            this.value2 = ""
            this.value3 = ""
            this.value4 = ""
            this.value5 = ""

        },
        showSuccess() {
            this.toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
        },
        showError() {
            this.toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
        },
        sendEmail() {
            emailjs
                .sendForm('service_4d0ljtz', 'template_fcnom08', this.$refs.form, {
                    publicKey: 'tGHxG-tBZcZz4LASv',

                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        this.removeContent()
                        this.showSuccess()


                    },
                    (error) => {
                        this.removeContent()
                        this.showError()

                        console.log('FAILED...', error.text);

                    },
                );
        },


    },
};



</script>