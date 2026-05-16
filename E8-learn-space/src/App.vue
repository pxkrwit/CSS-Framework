<template>
  <div class="min-h-screen bg-slate-50">
    <NavBar :active="activePage" @navigate="activePage = $event" />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      <!-- ===== DASHBOARD ===== -->
      <template v-if="activePage === 'Dashboard'">

        <!-- Hero Banner -->
        <HeroBanner @view-courses="activePage = 'Courses'" />

        <!-- Stat Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Active Courses" :value="courses.length" />
          <StatCard label="Pending Assignments" :value="pendingCount" />
          <StatCard label="Completed Tasks" :value="completedCount" />
          <StatCard label="Overall Progress" :value="overallProgress + '%'" />
        </div>

      </template>

      <!-- ===== MY COURSES ===== -->
      <template v-if="activePage === 'Courses'">

        <div>
          <h2 class="font-bold text-slate-900 text-2xl">My Courses</h2>
          <p class="text-slate-400 text-sm mt-1">Review your course progress and assignment status.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <CourseCard
            v-for="course in courses"
            :key="course.id"
            :course="course"
            @view-detail="openDetail(course)"
            @submit="openSubmit(course)"
          />
        </div>

      </template>

    </main>

    <!-- Course Detail Modal -->
    <Transition name="modal">
      <div v-if="detailCourse" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" @click="detailCourse = null"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-up">
          <div class="flex items-start justify-between mb-4">
            <div>
              <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-violet-100 text-violet-600">
                {{ detailCourse.code }}
              </span>
              <h3 class="font-bold text-slate-900 text-xl mt-2">{{ detailCourse.title }}</h3>
              <p class="text-slate-500 text-sm mt-1 leading-relaxed">{{ detailCourse.description }}</p>
            </div>
            <button @click="detailCourse = null" class="text-slate-400 hover:text-slate-600 ml-2 flex-shrink-0 cursor-pointer">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="mb-4">
            <div class="flex justify-between text-sm mb-1.5">
              <span class="text-slate-500">Progress</span>
              <span class="font-bold text-violet-700">{{ detailCourse.progress }}%</span>
            </div>
            <div class="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full bg-violet-600 rounded-full" :style="{ width: detailCourse.progress + '%' }"></div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
            <div class="text-center">
              <p class="text-2xl font-bold text-slate-900">{{ detailCourse.lecturesDone }}</p>
              <p class="text-xs text-slate-400 mt-0.5">Lectures Done</p>
            </div>
            <div class="text-center border-x border-slate-100">
              <p class="text-2xl font-bold text-slate-900">{{ detailCourse.lecturesTotal }}</p>
              <p class="text-xs text-slate-400 mt-0.5">Total Lectures</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-slate-900">{{ detailCourse.assignments.filter(a => a.submitted).length }}</p>
              <p class="text-xs text-slate-400 mt-0.5">Submitted</p>
            </div>
          </div>

          <div class="mt-4 space-y-2">
            <p class="text-sm font-semibold text-slate-700">Assignments</p>
            <div v-for="a in detailCourse.assignments" :key="a.id"
              class="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50">
              <span class="text-sm text-slate-700">{{ a.title }}</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                :class="a.submitted ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-600'">
                {{ a.submitted ? 'Submitted' : 'Pending' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Submit Assignment Modal -->
    <Transition name="modal">
      <div v-if="submitCourse" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" @click="closeSubmit"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-fade-up">

          <div v-if="!submitDone">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-900">Submit Assignment</h3>
                <p class="text-sm text-slate-500">{{ submitCourse.code }} — {{ submitCourse.title }}</p>
              </div>
            </div>

            <!-- File drop zone -->
            <div class="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-violet-300 transition-colors cursor-pointer mb-4"
              @click="fileInput.click()" @dragover.prevent @drop.prevent="handleDrop">
              <svg class="w-8 h-8 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
              <p class="text-sm text-slate-400">{{ fileName || 'Click to upload or drag & drop' }}</p>
              <p class="text-xs text-slate-300 mt-1">PDF, ZIP, DOCX up to 50MB</p>
              <input ref="fileInput" type="file" class="hidden" @change="handleFile" />
            </div>

            <textarea v-model="notes" rows="3" placeholder="Notes for instructor (optional)..."
              class="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-300 resize-none mb-4">
            </textarea>

            <div class="flex gap-2">
              <button @click="closeSubmit"
                class="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer">
                Cancel
              </button>
              <button @click="doSubmit" :disabled="submitting"
                class="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-sm font-semibold text-white transition-all active:scale-95 cursor-pointer disabled:opacity-70">
                <span v-if="!submitting">Submit Now</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Submitting...
                </span>
              </button>
            </div>
          </div>

          <!-- Success -->
          <div v-else class="text-center py-4">
            <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h4 class="font-bold text-slate-900">Submitted!</h4>
            <p class="text-sm text-slate-500 mt-1">Your assignment has been submitted successfully.</p>
            <button @click="closeSubmit"
              class="mt-4 px-6 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-all cursor-pointer">
              Done
            </button>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import StatCard from './components/StatCard.vue'
import CourseCard from './components/CourseCard.vue'

const activePage = ref('Dashboard')

const courses = ref([
  {
    id: 1,
    code: 'INT250',
    title: 'CSS Framework',
    description: 'Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.',
    progress: 72,
    status: 'In Progress',
    lecturesDone: 9,
    lecturesTotal: 12,
    assignments: [
      { id: 1, title: 'Lab 1: Tailwind Setup', submitted: true },
      { id: 2, title: 'Lab 2: Responsive Grid', submitted: true },
      { id: 3, title: 'Lab 3: Vue Components', submitted: false },
      { id: 4, title: 'Final Project', submitted: false },
    ]
  },
  {
    id: 2,
    code: 'INT161',
    title: 'Object-Oriented Programming',
    description: 'Practice Java programming, object-oriented design, and software development principles.',
    progress: 58,
    status: 'In Progress',
    lecturesDone: 8,
    lecturesTotal: 14,
    assignments: [
      { id: 5, title: 'Assignment 1: Classes & Objects', submitted: true },
      { id: 6, title: 'Assignment 2: Inheritance', submitted: true },
      { id: 7, title: 'Assignment 3: Polymorphism', submitted: false },
      { id: 8, title: 'Final Exam Prep', submitted: false },
    ]
  },
])

const pendingCount = computed(() =>
  courses.value.flatMap(c => c.assignments).filter(a => !a.submitted).length
)
const completedCount = computed(() =>
  courses.value.flatMap(c => c.assignments).filter(a => a.submitted).length
)
const overallProgress = computed(() =>
  Math.round(courses.value.reduce((s, c) => s + c.progress, 0) / courses.value.length)
)

// Detail modal
const detailCourse = ref(null)
function openDetail(course) { detailCourse.value = course }

// Submit modal
const submitCourse = ref(null)
const fileName = ref('')
const notes = ref('')
const submitting = ref(false)
const submitDone = ref(false)
const fileInput = ref(null)

function openSubmit(course) {
  submitCourse.value = course
  fileName.value = ''
  notes.value = ''
  submitDone.value = false
}

function closeSubmit() { submitCourse.value = null }

function handleFile(e) { fileName.value = e.target.files[0]?.name || '' }
function handleDrop(e) { fileName.value = e.dataTransfer.files[0]?.name || '' }

async function doSubmit() {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  submitting.value = false
  submitDone.value = true
  // อัปเดต progress ของ course นั้น
  const c = courses.value.find(c => c.id === submitCourse.value.id)
  if (c) c.progress = Math.min(100, c.progress + 5)
}
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>