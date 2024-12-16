<script setup>
const props = defineProps(
    {
        label: String,
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: true,
        },
        values: {
            type: Object,
            default: {},
        }
    }
);
const model = defineModel();
</script>

<template>
    <div v-if="props.type == 'radio'" class="radio-group">
        <label>{{ label }} :</label>
        <div class="group">
            <label v-for="(option, name) in props.values" :key="props.label">
                <input type="radio" :value="option" v-model="model" /> {{ name }}
            </label>
        </div>
    </div>
    <div v-else class="input-group">
        <label>{{ label }} :</label>
        <input :type="props.type" :placeholder="props.placeholder" :disabled="props.disabled" :required="props.required" v-model="model" />
    </div>
</template>

<style scoped>
input[type="text"],input[type="date"],input[type="email"],input[type="password"],input[type="number"] {
    width: 30vw;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}

.input-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

label {
    text-align: justify;
    font-weight: bold;
    text-transform: capitalize;
}

.radio-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.group {
    width: 30vw;
    display: flex;
    justify-content: space-evenly;
}

@media screen and (max-width: 600px) {
    input[type="text"],input[type="date"],input[type="email"],input[type="password"],input[type="number"] {
        width: 50vw;
    }
    .group {
        width: 50vw;
    }
}
</style>