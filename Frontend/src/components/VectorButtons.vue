<template>
  <div class="row items-center q-gutter-x-md">
    <span class="text-h6 text-grey-8 col-5">{{ vectorButtons.name }}:</span>
    <q-btn-toggle
      v-model="vec_model"
      :options="vectorButtons.buttons"
      toggle-color="primary"
      unelevated
      outline
      no-caps
      class="q-ma-none"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { VectorButtonsType } from './types';

const props = defineProps<{
  vectorButtons: VectorButtonsType;
}>();

// Value can not be undefined
const vec_model = ref(props.vectorButtons.buttons[0]!.value);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
watch(vec_model, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
