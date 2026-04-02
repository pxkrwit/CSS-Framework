<script setup></script>

<template>
    <div class="card">
        <h1>3. Alerts</h1>
        <p class="text-gray-600 text-xs">Reusable feedback messages for success, warning, and error states.</p>
        <div class="flex flex-col gap-2">
            <div class="alert alert-success">
                <h3>Success</h3>
                <p>Your profile has been updated successfully.</p>
            </div>
            <div class="alert alert-warning">
                <h3>Warning</h3>
                <p>Please review the form before submitting.</p>
            </div>
            <div class="alert alert-error">
                <h3>Error</h3>
                <p class="text-xs">Something went wrong. Please try again later.</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
