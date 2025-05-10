<template>
  <q-page class="row justify-center">
    <div class="q-pa-md col-6">
      {{ vector }}
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
import { watch } from 'vue';
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

defineProps<{
  vector: string;
}>();

const router = useRouter();

// Extract vectors from the user
const vectors = ref<string[]>([]);

function createVector(): string {
  // Create a vector string from the selected values
  return 'CVSS:4.0/' + vectors.value.filter((val) => val !== '').join('/');
}

// Save vectors to url /calculator/:vectors
function saveVectorsToUrl() {
  const url = '/calculator/' + encodeURIComponent(createVector());
  // Update the URL without reloading the page
  router.replace(url).catch((error) => {
    console.error('Failed to update URL:', error);
  });
}
watch(
  vectors,
  () => {
    // Emit the new value to the parent component
    saveVectorsToUrl();
  },
  { deep: true },
);
</script>

<style lang="css" scoped></style>
