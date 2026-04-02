<script setup>
    const information = [
        {
            status: 'New',
            text: 'Reusable',
            title: 'Basic Card',
            description: 'A simple reusable card for general content blocks in a dashboard or landing page.'
        },
        {
            status: 'Profile',
            text: 'Reusable',
            title: 'Student Profile Card',
            description: 'A profile summary card showing student status, program, and quick information.'
        },
        {
            status: 'Event',
            text: 'Reusable',
            title: 'Event Card',
            description: 'A reusable event component for workshops, seminars, or hackathon activities.'
        }
    ]
</script>

<template>
    <div class="card">
        <h1>5. Cards</h1>
        <p class="text-gray-600 text-xs">Responsive card layout for reusable content blocks such as event, profile, or product cards.</p>
        <div class="flex gap-3">
            <div v-for="info in information" :key="info.title" class="content-card">
                <div>
                    <div>
                        <p class="bage-neutral bg-blue-200 text-blue-500 text-xs font-bold py-1 px-2">{{ info.status }}</p>
                        <p class="text-xs">{{ info.text }}</p>
                    </div>
                    <h2>{{ info.title }}</h2>
                    <p>{{ info.description }}</p>
                    <button class="btn btn-outline w-fit border-gray-500 text-gray-600 hover:bg-gray-200">View Details</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
