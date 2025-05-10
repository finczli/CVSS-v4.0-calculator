<template>
  <q-page class="row justify-center">
    <q-page-sticky position="top-left" :offset="[20, 20]">
      <q-card class="q-pa-md">
        <div class="text-h5 text-bold">
          CVSS 4.0: <span :class="[severityColor]">{{ score }} {{ cvssSeverity() }}</span>
        </div>
      </q-card>
    </q-page-sticky>
    <div class="q-pa-md col-6">
      <q-card>
        <!-- Base Metrics -->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Base Metrics</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory
            :vector-category="exploitability_metrics"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[0] = newValue)"
          />
          <VectorCategory
            :vector-category="vulnerable_system_impact_metrics"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[1] = newValue)"
          />
          <VectorCategory
            :vector-category="subsequent_system_impact_metrics"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[2] = newValue)"
          />
        </q-card-section>
        <!-- Supplemental Metrics -->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Supplemental Metrics</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory
            :vector-category="supplemental_metrics"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[3] = newValue)"
          />
        </q-card-section>
        <!-- Environmental (Modified Base Metrics)-->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Environmental (Modified Base Metrics)</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory
            :vector-category="exploitability_metrics_env"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[4] = newValue)"
          />
          <VectorCategory
            :vector-category="vulnerable_system_impact_metrics_env"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[5] = newValue)"
          />
          <VectorCategory
            :vector-category="subsequent_system_impact_metrics_env"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[6] = newValue)"
          />
        </q-card-section>
        <!-- Environmental (Security Requirements)-->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Environmental (Security Requirements)</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory
            :vector-category="environmental_security_requirements"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[7] = newValue)"
          />
        </q-card-section>
        <!-- Threat Metrics-->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Threat Metrics</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory
            :vector-category="threat_metrics"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[8] = newValue)"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import VectorCategory from 'src/components/VectorCategory.vue';
// Base Metrics
import {
  exploitability_metrics,
  vulnerable_system_impact_metrics,
  subsequent_system_impact_metrics,
} from 'src/components/vectors';

// Supplemental Metrics
import { supplemental_metrics } from 'src/components/vectors';

// Environmental (Modified Base Metrics)
import {
  exploitability_metrics_env,
  vulnerable_system_impact_metrics_env,
  subsequent_system_impact_metrics_env,
} from 'src/components/vectors';

// Environmental (Security Requirements)
import { environmental_security_requirements } from 'src/components/vectors';

// Threat Metrics
import { threat_metrics } from 'src/components/vectors';
import { ref } from 'vue';

import { useQuasar } from 'quasar';

// Import calculator
import { CVSS40 } from '@pandatix/js-cvss';

defineProps<{
  vector: string;
}>();

const router = useRouter();
const $q = useQuasar();

// Extract vectors from the user
const vectors = ref<string[]>([]);

function createVector(): string {
  // Create a vector string from the selected values
  return 'CVSS:4.0/' + vectors.value.filter((val) => val !== '').join('/');
}

// Save vectors to url /calculator/:vectors
function saveVectorsToUrl() {
  // Update the URL without reloading the page
  router.replace({ path: '/calculator', query: { vector: createVector() } }).catch((error) => {
    console.error('Failed to update URL:', error);
  });
}

const score = ref(0);

function cvssSeverity(): string {
  // Calculate the CVSS severity based on the score
  if (score.value >= 9) {
    return 'Critical';
  } else if (score.value >= 7) {
    return 'High';
  } else if (score.value >= 4) {
    return 'Medium';
  } else if (score.value > 0) {
    return 'Low';
  }
  return 'None';
}

const severityColor = computed(() => {
  // Return the color based on the severity
  if (score.value >= 9) {
    return 'text-red-14';
  } else if (score.value >= 7) {
    return 'text-deep-orange-7';
  } else if (score.value >= 4) {
    return 'text-amber-6';
  } else if (score.value > 0) {
    return 'text-green';
  }
  return 'text-grey';
});

watch(
  vectors,
  () => {
    // Emit the new value to the parent component
    saveVectorsToUrl();
    try {
      const vec = new CVSS40(createVector());
      score.value = vec.Score();
    } catch (error) {
      $q.notify({
        type: 'negative',
        message: 'Invalid CVSS vector format.',
      });
      console.error('Error creating CVSS vector:', error);
      return;
    }
  },
  { deep: true },
);
</script>

<style lang="css" scoped></style>
