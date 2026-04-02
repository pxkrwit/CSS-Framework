<script setup>
import { ref, computed } from 'vue';

const name = ref('');
const email = ref('');
const role = ref('');
const message = ref('');

const touched = ref({
    name: false,
    email: false,
    role: false,
    message: false,
});

const nameError = computed(() => {
    if (!name.value.trim()) return 'Full name is required.';
    return '';
});

const emailError = computed(() => {
    if (!email.value.trim()) return 'Email is required.';
    if (!/^[^\s@]+@mail\.kmutt\.ac\.th$/.test(email.value)) return 'Please use your valid @mail.kmutt.ac.th email.';
    return '';
});

const roleError = computed(() => {
    if (!role.value) return 'Please select a role.';
    return '';
});

const messageError = computed(() => {
    if (!message.value.trim()) return 'Message is required.';
    return '';
});

const isFormValid = computed(() => {
    return !nameError.value && !emailError.value && !roleError.value && !messageError.value;
});

const touch = (field) => { touched.value[field] = true; };

const fieldState = (field, error) => {
    if (!touched.value[field]) return 'idle';
    return error ? 'error' : 'success';
};

const submitForm = () => {
    Object.keys(touched.value).forEach(f => touched.value[f] = true);
    if (isFormValid.value) {
        alert('Form submitted successfully!');
    }
};

const inputClass = (state) => [
    'form-input border-2 rounded-lg py-2 px-4 focus:outline-none w-full transition-colors',
    {
        'border-gray-300 focus:border-blue-500': state === 'idle',
        'border-red-500 bg-red-50 focus:border-red-500': state === 'error',
        'border-green-500 bg-green-50 focus:border-green-500': state === 'success',
    }
];
</script>

<template>
    <div class="card">
        <h1>4. Form Controls</h1>
        <p class="text-gray-600 text-xs">Consistent form patterns with labels, helper text, and validation style.</p>
        <form @submit.prevent="submitForm">
            <div class="flex flex-col gap-5 mt-3">
                <div class="flex gap-5">
                    <div class="flex flex-col gap-2 w-full">
                        <label for="name" class="font-semibold text-sm">Full Name</label>
                        <input
                            v-model="name"
                            @blur="touch('name')"
                            type="text" id="name"
                            :class="inputClass(fieldState('name', nameError))"
                            placeholder="Enter your full name"
                        />
                        <p v-if="touched.name && nameError" class="text-red-500 text-xs">{{ nameError }}</p>
                        <p v-else-if="touched.name && !nameError" class="text-green-600 text-xs">Looks good!</p>
                        <p v-else class="text-gray-600 text-xs">Use a clear and complete student name.</p>
                    </div>
                    <div class="flex flex-col gap-2 w-full">
                        <label for="email" class="font-semibold text-sm">Email Address</label>
                        <input
                            v-model="email"
                            @blur="touch('email')"
                            type="email" id="email"
                            :class="inputClass(fieldState('email', emailError))"
                            placeholder="Enter your email"
                        />
                        <p v-if="touched.email && emailError" class="text-red-500 text-xs">{{ emailError }}</p>
                        <p v-else-if="touched.email && !emailError" class="text-green-600 text-xs">Looks good!</p>
                        <p v-else class="text-gray-600 text-xs">Example: student@mail.kmutt.ac.th</p>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="role" class="font-semibold text-sm">Role</label>
                    <select
                        v-model="role"
                        @blur="touch('role')"
                        id="role"
                        :class="inputClass(fieldState('role', roleError))"
                    >
                        <option value="">Select a role</option>
                        <option value="student">Student</option>
                        <option value="instructor">Instructor</option>
                    </select>
                    <p v-if="touched.role && roleError" class="text-red-500 text-xs">{{ roleError }}</p>
                    <p v-else-if="touched.role && !roleError" class="text-green-600 text-xs">Looks good!</p>
                </div>

                <div class="flex flex-col gap-2">
                    <label for="message" class="font-semibold text-sm">Message</label>
                    <textarea
                        v-model="message"
                        @blur="touch('message')"
                        id="message"
                        :class="inputClass(fieldState('message', messageError))"
                        placeholder="Write your message here"
                    />
                    <p v-if="touched.message && messageError" class="text-red-500 text-xs">{{ messageError }}</p>
                    <p v-else-if="touched.message && !messageError" class="text-green-600 text-xs">Looks good!</p>
                </div>

                <button type="submit" class="btn btn-primary w-fit">
                    Submit Form
                </button>
            </div>
        </form>
    </div>
</template>