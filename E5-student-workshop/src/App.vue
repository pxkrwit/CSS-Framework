<script setup>
import { computed, reactive, ref } from "vue";
import BaseInput from "./components/BaseInput.vue";
import BaseSelect from "./components/BaseSelect.vue";
import BaseTextarea from "./components/BaseTextarea.vue";
import BaseRadioGroup from "./components/BaseRadioGroup.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";

const form = reactive({
  fullName: "",
  studentId: "",
  email: "",
  password: "",
  program: "",
  yearLevel: "",
  bio: "",
  track: "",
  agree: false,
})

const submitted = ref(false)
const showModal = ref(false)

const programOptions = [
  { label: "Computer Science", value: "CS" },
  { label: "Digital Service Innovation", value: "DSI" },
  { label: "Information Technology", value: "IT" },
  { label: "Software Engineering", value: "SE" },
]

const trackOptions = [
  { label: "Frontend UI Development", value: "frontend" },
  { label: "Backend API Design", value: "backend" },
  { label: "UX/UI Design", value: "ux" },
  { label: "AI for Productivity", value: "ai" },
]

const yearOptions = [
  { label: "Year 1", value: "1", description: "Beginner student level" },
  { label: "Year 2", value: "2", description: "Intermediate foundation" },
  { label: "Year 3", value: "3", description: "Project-focused stage" },
  { label: "Year 4", value: "4", description: "Internship or capstone stage" },
]

const errors = computed(() => {
  const e = {}

  if (!form.fullName.trim()) e.fullName = "Full name is required."

  if (!form.studentId.trim()) {
    e.studentId = "Student ID is required."
  } else if (!/^\d{11}$/.test(form.studentId)) {
    e.studentId = "Student ID must be 13 digits."
  }

  if (!form.email.trim()) {
    e.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    e.email = "Please enter a valid email address."
  }

  if (!form.password.trim()) {
    e.password = "Password is required."
  } else if (form.password.length < 8) {
    e.password = "Password must be at least 8 characters."
  }

  if (!form.program) e.program = "Please select your program."
  if (!form.yearLevel) e.yearLevel = "Please select your year level."
  if (!form.track) e.track = "Please choose a workshop track."
  if (!form.agree) e.agree = "You must accept the terms before submitting."

  return e
})

const isFormValid = computed(() => Object.keys(errors.value).length === 0)

function resetForm() {
  Object.assign(form, {
    fullName: "",
    studentId: "",
    email: "",
    password: "",
    program: "",
    yearLevel: "",
    bio: "",
    track: "",
    agree: false,
  })
  submitted.value = false
}

function handleSubmit() {
  submitted.value = true

  if (!isFormValid.value) return

  showModal.value = true
  resetForm()
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 py-10 px-4">
    <div class="mx-auto max-w-4xl">
      <div class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">

        <!-- Header -->
        <div class="border-b border-slate-200 bg-slate-50 px-6 py-5">
          <p class="text-sm font-medium text-blue-600">Hands-on Lab</p>
          <h1 class="mt-1 text-2xl font-bold text-slate-900">Student Workshop Registration Form</h1>
          <p class="text-sm text-slate-600">Practice styling form controls, focus states, and validation feedback with Vue.js and Tailwind CSS.</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="p-6 md:p-8 flex flex-col gap-6">

          <!-- Row 1: Full Name + Student ID -->
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <BaseInput
              label="Full Name"
              :required="true"
              placeholder="Enter your full name"
              v-model="form.fullName"
              :error="submitted ? errors.fullName : ''"
            />
            <BaseInput
              label="Student ID"
              :required="true"
              placeholder="e.g. 66012345671"
              v-model="form.studentId"
              :error="submitted ? errors.studentId : ''"
            />
          </div>

          <!-- Row 2: Email + Password -->
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <BaseInput
              label="Email"
              :required="true"
              type="email"
              placeholder="yourname@example.com"
              v-model="form.email"
              :error="submitted ? errors.email : ''"
            />
            <BaseInput
              label="Password"
              :required="true"
              type="password"
              placeholder="At least 8 characters"
              v-model="form.password"
              :error="submitted ? errors.password : ''"
            />
          </div>

          <!-- Row 3: Program + Track -->
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <BaseSelect
              label="Program / Major"
              :required="true"
              placeholder="Select your program"
              :options="programOptions"
              v-model="form.program"
              :error="submitted ? errors.program : ''"
            />
            <BaseSelect
              label="Workshop Track"
              :required="true"
              placeholder="Select a track"
              :options="trackOptions"
              v-model="form.track"
              :error="submitted ? errors.track : ''"
            />
          </div>

          <!-- Row 4: Year Level (Radio Cards) -->
          <BaseRadioGroup
            label="Year Level"
            :required="true"
            :options="yearOptions"
            v-model="form.yearLevel"
            :error="submitted ? errors.yearLevel : ''"
          />

          <!-- Row 5: Short Bio (Textarea with counter) -->
          <BaseTextarea
            label="Short Bio"
            placeholder="Tell us about your interests..."
            hint="Optional: briefly describe your interests or previous experience."
            :maxLength="200"
            v-model="form.bio"
          />

          <!-- Row 6: Agree Checkbox -->
          <BaseCheckbox
            label="I confirm that the information provided is correct and I agree to participate in the workshop activities."
            v-model="form.agree"
            :error="submitted ? errors.agree : ''"
          />

          <!-- Footer: Tip + Reset + Submit -->
          <div class="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-sm text-slate-500">
              <span class="font-medium">Tip:</span> Try submitting with empty fields to test validation feedback.
            </p>
            <div class="flex gap-3">
              <button
                type="button"
                @click="resetForm"
                class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 active:scale-[0.99]"
              >
                Reset Form
              </button>
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Submit Registration
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>

    <!-- Success Modal -->
    <Transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      >
        <div class="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl text-center">
          <!-- Green check icon -->
          <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <svg class="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-slate-900 mb-2">Registration Submitted</h2>
          <p class="text-sm text-slate-500 mb-6">Your workshop registration has been recorded successfully.</p>
          <button
            @click="showModal = false"
            class="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Close
          </button>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>