<template>
  <q-card flat>
    <q-card-section class="text-center" v-if="vectorCategory.categoryName !== ''">
      <div class="text-h6 text-grey-8">{{ vectorCategory.categoryName }}</div>
    </q-card-section>
    <q-card-section class="column q-gutter-y-xs">
      <VectorButtons
        v-for="(vectorButtons, index) in vectorCategory.buttons"
        :key="index"
        :vectorButtons="vectorButtons"
        @update:modelValue="
          (newValue) => {
            modelMap[vectorButtons.name] = newValue;
          }
        "
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { VectorCategoryType } from './types';
import { ModelMapType2Vector } from './vectors';
import VectorButtons from './VectorButtons.vue';
import type { ModelMapType } from './types';
import { ref } from 'vue';
import { watch } from 'vue';

const props = defineProps<{
  vectorCategory: VectorCategoryType;
}>();

// Create model for each button
const modelMap = ref<ModelMapType>(
  Object.fromEntries(
    props.vectorCategory.buttons.map((buttons_cat) => [
      // We only need the beginning of the vector
      buttons_cat.buttons[0]!.value.split(':')[0],
      buttons_cat.buttons[0]!.value,
    ]),
  ),
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

watch(
  modelMap,
  (newValue) => {
    // Emit the new value to the parent component
    emit('update:modelValue', ModelMapType2Vector(newValue));
  },
  { deep: true },
);
</script>
