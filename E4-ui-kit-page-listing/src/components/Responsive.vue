<script setup></script>

<template>
    <div class="card">
        <h1>6. Responsive Layout Example</h1>
        <p class="text-gray-600 text-xs">A reusable section layout with content on the left and summary panel on the right.</p>
        <div class="flex gap-5 mt-3">
            <div class="content-main">
                <h2>Main Content Area</h2>
                <p>This area can be used for dashboard content, a feature section, course details, or product descriptions.It demonstrates a simple reusable container pattern with consistent padding, rounded corners, and spacing.</p>
            </div>
            <div class="content-summary">
                <h2>Summary Panel</h2>
                <p>This panel can be reused for quick stats, announcements, or call-to-action content.</p>
                <button>Learn More</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
