<script setup>
    import {ref} from 'vue';

    const count = ref(0)
    const step = ref(1);
    const his = ref([])

    function increment(){
        saveHis()
        count.value += step.value;
        if(count.value > 100){
            count.value = 100
        }
    }

    function decrement(){
        if (count.value > 0) {
            saveHis() 
            count.value -= step.value
            if(count.value < 0) count.value = 0
        }
    }

    function reset(){
        saveHis()
        count.value = 0
    }

    function saveHis(){
        his.value.push(count.value)
    }

    function undo(){
        if(his.value.length > 0){
            count.value = his.value.pop()
        }
    }

</script>

<template>
    <div class="container">
        <div class="card">
            <h1>COUNTER APP</h1>
            <div class="line"></div>
            <p>Click buttons to change the number.</p>
            <div class="count">{{ count }}</div>
            <div class="row-btn">
                    <button class="btn inc" @click="increment">+ Increase</button>
                    <button class="btn dec" @click="decrement" :disabled="count <= 0" >- Decrease</button>
                    <button class="btn reset" @click="reset">Reset</button>
                    <button class="btn undo" @click="undo" :disabled="his.length <= 0">Undo</button>
            </div>
            <div class="hint">
                Step: <input type="number" min="1" v-model.number="step">
            </div> 
        </div>
    </div>
</template>

<style scoped>
:global(body) {
  background: #050545;
  background: linear-gradient(90deg, rgba(5, 5, 69, 1) 13%, rgba(9, 9, 121, 1) 42%, rgba(0, 212, 255, 1) 100%);
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.container {
    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card {
    width: min(600px, 92vw);
    background-color: rgb(255, 255, 255,0.7);
    border: 2px solid rgb(255, 255, 255,0.7);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.line {
    width: 90%;
    height: 2px;
    background-color: rgb(82, 82, 82);
    border-radius: 2px;
    margin-bottom: 20px;
}

.row-btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    gap: 15px;               
    width: 100%;
    max-width: 300px;       
    margin: 20px 0;         
}

.btn {
    width: calc(50% - 10px); 
    min-width: 120px;  
    border: 0;
    border-radius: 12px;
    padding: 12px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    transition: transform 0.1s, background-color 0.2s;
}

h1 {
    margin: 0 0 6px;
    text-align: center;
    font-size: 36px;
}

input {
    border: none;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
}

.count {
    width: 50%;
    height: 20px;
    text-align: center;
    font-weight: bold;
    border-radius: 14px;
    background-color: white;
}
.btn {
    max-width: 100px;
    width: 100%;
    border: 0;
    border-radius: 14px;
    padding: 10px ;
    margin: 0 10px 5px 0;
    cursor: pointer;
    color: white;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}

.inc {
    background-color: rgb(1, 250, 1);
}
.inc:hover{
    background-color: rgb(0, 187, 0);
}

.dec {
    background-color: red;
}
.dec:hover {
    background-color: rgb(179, 0, 0);
}

.reset {
    background-color: rgb(156, 156, 156);
}
.reset:hover {
    background-color: rgb(109, 109, 109);
}

.undo {
    background-color: rgb(156, 156, 156);
}
.undo:hover {
    background-color: rgb(109, 109, 109);
}
.undo:disabled {
    cursor: not-allowed;
    background-color: rgb(218, 218, 218);
}
</style>
