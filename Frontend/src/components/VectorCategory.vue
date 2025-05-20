<template>
  <q-card flat>
    <q-card-section class="text-center" v-if="vectorCategory.categoryName !== '' && vectorCategory.displayCategoryName !== false">
      <div class="text-h6 text-grey-8">{{ vectorCategory.categoryName }}</div>
    </q-card-section>
    <q-card-section class="column q-gutter-y-xs">
      <VectorButtons
        v-for="(vectorButtons, index) in vectorCategory.buttons"
        :key="index"
        :vectorButtons="vectorButtons"
        @update:modelValue="
          (newValue) => {
            modelMap[vectorButtons.vector] = newValue;
          }
        "
        :modelValue="modelMap[vectorButtons.vector]!"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { VectorCategoryType } from './types';
import { ModelMapType2Vector } from './vectors';
import VectorButtons from './VectorButtons.vue';
import type { ModelMapType } from './types';
import { ref, watch } from 'vue';

const props = defineProps<{
  vectorCategory: VectorCategoryType;
  vector?: string;
}>();

// Create model for each button
const modelMap = ref<ModelMapType>(
  Object.fromEntries(
    props.vectorCategory.buttons.map((buttons_cat) => [
      // We only need the beginning of the vector
      buttons_cat.vector,
      loadVectorValues(buttons_cat.vector) === null
        ? buttons_cat.buttons[0]!.value
        : loadVectorValues(buttons_cat.vector)!,
    ]),
  ),
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// Emit the initial value to the parent component
emit('update:modelValue', ModelMapType2Vector(modelMap.value));

// Load vector values from url
function loadVectorValues(vector_name: string): string | null {
  if (props.vector === undefined) {
    return null;
  }
  const vectorParts = props.vector.split('/');
  // Remove the first part (CVSS:4.0)
  vectorParts.shift();

  // Find the index of the vector name
  const index = vectorParts.findIndex((part) => part.split(':')[0] === vector_name);
  if (index === -1 || vectorParts[index] === undefined) {
    return null;
  }

  // Get the value of the vector
  return vectorParts[index];
}

watch(
  modelMap,
  (newValue) => {
    // Emit the new value to the parent component
    emit('update:modelValue', ModelMapType2Vector(newValue));
  },
  { deep: true },
);
</script>
