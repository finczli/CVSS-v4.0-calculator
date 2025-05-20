<template>
  <q-page class="row justify-center">
    <q-page-sticky position="top-left" :offset="[20, 20]">
      <q-card class="q-pa-md">
        <div class="text-h5 text-bold">
          CVSS 4.0: <span :class="[severityColor]">{{ score }} {{ cvssSeverity() }}</span>
        </div>
        <q-separator />
        <div class="text-h6 text-bold q-pt-xs q-pb-xs">
          <span v-if="vector"
            >{{ vector.length > 35 ? vector.substring(0, 30) + '...' : vector }}
            <q-tooltip
              anchor="top right"
              self="bottom right"
              :offset="[0, 10]"
              style="font-size: 1em"
            >
              {{ vector }}
            </q-tooltip>
          </span>
          <span v-else>CVSS:4.0/</span>
          <q-btn
            outline
            class="q-ml-sm q-pa-sm"
            color="primary"
            icon="content_copy"
            @click="copyToClipboard"
          />
        </div>
        <q-separator />
        <q-btn
          no-caps
          class="q-mt-sm"
          color="primary"
          label="Export to PDF"
          icon="download"
          @click="ExportToPDF"
        />
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
            @update:model-value="(newValue) => (vectors[8] = newValue)"
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
            @update:model-value="(newValue) => (vectors[5] = newValue)"
          />
          <VectorCategory
            :vector-category="vulnerable_system_impact_metrics_env"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[6] = newValue)"
          />
          <VectorCategory
            :vector-category="subsequent_system_impact_metrics_env"
            :vector="vector"
            @update:model-value="(newValue) => (vectors[7] = newValue)"
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
            @update:model-value="(newValue) => (vectors[4] = newValue)"
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
            @update:model-value="(newValue) => (vectors[3] = newValue)"
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
  subsequent_system_impact_metrics
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
import { merged_metrics } from 'src/components/vectors';
import { ref } from 'vue';

import { useQuasar } from 'quasar';

// Import calculator
import { CVSS40 } from '@pandatix/js-cvss';

import * as pdfmake from 'pdfmake/build/pdfmake';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';


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

async function copyToClipboard() {
  // Copy the vector to the clipboard
  await navigator.clipboard.writeText(createVector()).then(() => {
    $q.notify({
      type: 'positive',
      message: 'Copied to clipboard!',
    });
  });
}

function ExportToPDF() {
  $q.notify({
    type: 'positive',
    message: 'Exporting to PDF...',
  });
  const description: Record<string, { name: string; value: string, description: string }[]> = {};
  const preparedVectors = vectors.value.filter((val) => val !== '').flatMap((x => x.split('/')));
  //Find metrics that start with M and replace the values
  preparedVectors.filter((x => x.startsWith("M"))).forEach((v) => {
    console.log(v);
    console.log(v.substring(1))
    console.log(v.substring(1).split(':'))
      const tmp = v.substring(1).split(':')[0];
      const toReplace = preparedVectors.find((x) => x.startsWith(tmp!));
      if(toReplace === undefined) {
        preparedVectors.push(v.substring(1));
      }
      else{
        preparedVectors.splice(preparedVectors.indexOf(toReplace), 1);
        preparedVectors.push(v.substring(1));
      }
      preparedVectors.splice(preparedVectors.indexOf(v), 1);
  });
  preparedVectors.forEach((v => {
    console.log("Search for metric with id: ", v);
    const desc = merged_metrics.find((m) => m.id === v);
    if (desc) {
      if (description[desc.category] === undefined) {
        description[desc.category] = [];
      }
      description[desc.category]!.push({ name: desc.name, value: desc.value, description: desc.description });
    }
  }));
  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        text: 'CVSS 4.0 Vector',
        style: 'header',
        margin: [0, 0, 0, 10],
      },
      {
        text: createVector(),
        style: 'subheader',
        margin: [0, 0, 0, 10],
      },
      {
        text: `Score: ${score.value} (${cvssSeverity()})`,
        style: 'subheader',
        margin: [0, 0, 0, 10],
      },
      { text: 'Selected metrics:', style: 'subheader' },
      {
        table: {
          widths: ['auto', 'auto', 'auto'],
          body: [
            [
              { text: 'Category', style: 'header' },
              { text: 'Value', style: 'header' },
              { text: 'Description', style: 'header' },
            ],
            ...Object.entries(description).flatMap(([category, metrics]) => [
              [{ text: category, colSpan: 3, style: 'tableHeader' }, {}],
              ...metrics.map((metric) => [metric.name, metric.value, {text: metric.description, style: 'justify'}]),
            ]),
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
        bold: true,
      },
      tableHeader: {
        fontSize: 18,
        bold: true,
        alignment: "center"
      },
      justify: {
        alignment: 'justify'
      },
    },
  };

  // Create the PDF and download it
  pdfmake.createPdf(docDefinition, undefined, {
    Roboto: {
      normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
      bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
      italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
      bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
    }
  }).download("cvss-report.pdf");
}
</script>

<style lang="css" scoped></style>
