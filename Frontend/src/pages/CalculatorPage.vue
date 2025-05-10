<template>
  <q-page class="row justify-center">
    <div class="q-pa-md col-6">
      <q-card>
        <!-- Base Metrics -->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Base Metrics</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory :vector-category="exploitability_metrics" />
          <VectorCategory :vector-category="vulnerable_system_impact_metrics" />
          <VectorCategory :vector-category="subsequent_system_impact_metrics" />
        </q-card-section>
        <!-- Supplemental Metrics -->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Supplemental Metrics</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory :vector-category="supplemental_metrics" />
        </q-card-section>
        <!-- Environmental (Modified Base Metrics)-->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Environmental (Modified Base Metrics)</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory :vector-category="exploitability_metrics_env" />
          <VectorCategory :vector-category="vulnerable_system_impact_metrics_env" />
          <VectorCategory :vector-category="subsequent_system_impact_metrics_env" />
        </q-card-section>
        <!-- Environmental (Security Requirements)-->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Environmental (Security Requirements)</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory :vector-category="environmental_security_requirements" />
        </q-card-section>
        <!-- Threat Metrics-->
        <q-card-section class="bg-grey text-center text-white">
          <div class="text-h6">Threat Metrics</div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <VectorCategory :vector-category="threat_metrics" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
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
</script>

<style lang="css" scoped></style>
