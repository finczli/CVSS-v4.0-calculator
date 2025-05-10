import type { VectorCategoryType, ModelMapType } from './types.ts';

export function ModelMapType2Vector(model: ModelMapType): string {
  return Object.values(model)
    .filter((value) => value !== 'X')
    .map((value) => value)
    .join('/');
}

/* Base Metrics */
export const exploitability_metrics: VectorCategoryType = {
  categoryName: 'Exploitability Metrics',
  buttons: [
    {
      name: 'Attack Vector',
      vector: 'AV',
      buttons: [
        { label: 'Network', value: 'AV:N' },
        { label: 'Adjacent Network', value: 'AV:A' },
        { label: 'Local', value: 'AV:L' },
        { label: 'Physical', value: 'AV:P' },
      ],
    },
    {
      name: 'Attack Complexity',
      vector: 'AC',
      buttons: [
        { label: 'Low', value: 'AC:L' },
        { label: 'High', value: 'AC:H' },
      ],
    },
    {
      name: 'Attack Requirements',
      vector: 'AT',
      buttons: [
        { label: 'None', value: 'AT:N' },
        { label: 'Present', value: 'AT:P' },
      ],
    },
    {
      name: 'Privileges Required',
      vector: 'PR',
      buttons: [
        { label: 'None', value: 'PR:N' },
        { label: 'Low', value: 'PR:L' },
        { label: 'High', value: 'PR:H' },
      ],
    },
    {
      name: 'User Interaction',
      vector: 'UI',
      buttons: [
        { label: 'None', value: 'UI:N' },
        { label: 'Passive', value: 'UI:P' },
        { label: 'Active', value: 'UI:A' },
      ],
    },
  ],
};

export const vulnerable_system_impact_metrics: VectorCategoryType = {
  categoryName: 'Vulnerable System Impact Metrics',
  buttons: [
    {
      name: 'Confidentiality',
      vector: 'VC',
      buttons: [
        { label: 'None', value: 'VC:N' },
        { label: 'Low', value: 'VC:L' },
        { label: 'High', value: 'VC:H' },
      ],
    },
    {
      name: 'Integrity',
      vector: 'VI',
      buttons: [
        { label: 'None', value: 'VI:N' },
        { label: 'Low', value: 'VI:L' },
        { label: 'High', value: 'VI:H' },
      ],
    },
    {
      name: 'Availability',
      vector: 'VA',
      buttons: [
        { label: 'None', value: 'VA:N' },
        { label: 'Low', value: 'VA:L' },
        { label: 'High', value: 'VA:H' },
      ],
    },
  ],
};

export const subsequent_system_impact_metrics: VectorCategoryType = {
  categoryName: 'Subsequent System Impact Metrics',
  buttons: [
    {
      name: 'Confidentiality',
      vector: 'SC',
      buttons: [
        { label: 'None', value: 'SC:N' },
        { label: 'Low', value: 'SC:L' },
        { label: 'High', value: 'SC:H' },
      ],
    },
    {
      name: 'Integrity',
      vector: 'SI',
      buttons: [
        { label: 'None', value: 'SI:N' },
        { label: 'Low', value: 'SI:L' },
        { label: 'High', value: 'SI:H' },
      ],
    },
    {
      name: 'Availability',
      vector: 'SA',
      buttons: [
        { label: 'None', value: 'SA:N' },
        { label: 'Low', value: 'SA:L' },
        { label: 'High', value: 'SA:H' },
      ],
    },
  ],
};

/* Supplemental Metrics */
export const supplemental_metrics: VectorCategoryType = {
  categoryName: '', // No name because Supplemental Metrics do not have subcategories
  buttons: [
    {
      name: 'Safety',
      vector: 'S',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Negligible', value: 'S:N' },
        { label: 'Present', value: 'S:P' },
      ],
    },
    {
      name: 'Automatable',
      vector: 'AU',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'No', value: 'AU:N' },
        { label: 'Yes', value: 'AU:Y' },
      ],
    },
    {
      name: 'Recovery',
      vector: 'R',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Automatic', value: 'R:A' },
        { label: 'User', value: 'R:U' },
        { label: 'Irrecoverable', value: 'R:I' },
      ],
    },
    {
      name: 'Value Density',
      vector: 'V',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Diffuse', value: 'V:D' },
        { label: 'Concentrated', value: 'V:C' },
      ],
    },
    {
      name: 'Vulnerability Response Effort',
      vector: 'RE',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'RE:L' },
        { label: 'Moderate', value: 'RE:M' },
        { label: 'High', value: 'RE:H' },
      ],
    },
    {
      name: 'Provider Urgency',
      vector: 'U',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Clear', value: 'U:Clear' },
        { label: 'Green', value: 'U:Green' },
        { label: 'Amber', value: 'U:Amber' },
        { label: 'Red', value: 'U:Red' },
      ],
    },
  ],
};

/* Environmental (Modified Base Metrics) */
export const exploitability_metrics_env: VectorCategoryType = {
  categoryName: 'Exploitability Metrics',
  buttons: [
    {
      name: 'Attack Vector',
      vector: 'MAV',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Network', value: 'MAV:N' },
        { label: 'Adjacent', value: 'MAV:A' },
        { label: 'Local', value: 'MAV:L' },
        { label: 'Physical', value: 'MAV:P' },
      ],
    },
    {
      name: 'Attack Complexity',
      vector: 'MAC',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'MAC:L' },
        { label: 'High', value: 'MAC:H' },
      ],
    },
    {
      name: 'Attack Requirements',
      vector: 'MAT',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MAT:N' },
        { label: 'Present', value: 'MAT:P' },
      ],
    },
    {
      name: 'Privileges Required',
      vector: 'MPR',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MPR:N' },
        { label: 'Low', value: 'MPR:L' },
        { label: 'High', value: 'MPR:H' },
      ],
    },
    {
      name: 'User Interaction',
      vector: 'MUI',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MUI:N' },
        { label: 'Passive', value: 'MUI:P' },
        { label: 'Active', value: 'MUI:A' },
      ],
    },
  ],
};

export const vulnerable_system_impact_metrics_env: VectorCategoryType = {
  categoryName: 'Vulnerable System Impact Metrics',
  buttons: [
    {
      name: 'Confidentiality',
      vector: 'MVC',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MVC:N' },
        { label: 'Low', value: 'MVC:L' },
        { label: 'High', value: 'MVC:H' },
      ],
    },
    {
      name: 'Integrity',
      vector: 'MVI',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MVI:N' },
        { label: 'Low', value: 'MVI:L' },
        { label: 'High', value: 'MVI:H' },
      ],
    },
    {
      name: 'Availability',
      vector: 'MVA',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MVA:N' },
        { label: 'Low', value: 'MVA:L' },
        { label: 'High', value: 'MVA:H' },
      ],
    },
  ],
};

export const subsequent_system_impact_metrics_env: VectorCategoryType = {
  categoryName: 'Subsequent System Impact Metrics',
  buttons: [
    {
      name: 'Confidentiality',
      vector: 'MSC',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'High', value: 'MSC:H' },
        { label: 'Low', value: 'MSC:L' },
        { label: 'Negligible', value: 'MSC:N' },
      ],
    },
    {
      name: 'Integrity',
      vector: 'MSI',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Safety', value: 'MSI:S' },
        { label: 'High', value: 'MSI:H' },
        { label: 'Low', value: 'MSI:L' },
        { label: 'Negligible', value: 'MSI:N' },
      ],
    },
    {
      name: 'Availability',
      vector: 'MSA',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Safety', value: 'MSA:S' },
        { label: 'High', value: 'MSA:H' },
        { label: 'Low', value: 'MSA:L' },
        { label: 'Negligible', value: 'MSA:N' },
      ],
    },
  ],
};
/* Environmental (Security Requirements) */
export const environmental_security_requirements: VectorCategoryType = {
  categoryName: '', // No name because Environmental Security Requirements do not have subcategories
  buttons: [
    {
      name: 'Confidentiality Requirement',
      vector: 'CR',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'CR:L' },
        { label: 'Medium', value: 'CR:M' },
        { label: 'High', value: 'CR:H' },
      ],
    },
    {
      name: 'Integrity Requirement',
      vector: 'IR',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'IR:L' },
        { label: 'Medium', value: 'IR:M' },
        { label: 'High', value: 'IR:H' },
      ],
    },
    {
      name: 'Availability Requirement',
      vector: 'AR',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'AR:L' },
        { label: 'Medium', value: 'AR:M' },
        { label: 'High', value: 'AR:H' },
      ],
    },
  ],
};

/* Threat Metrics */
export const threat_metrics: VectorCategoryType = {
  categoryName: '', // No name because Threat Metrics do not have subcategories
  buttons: [
    {
      name: 'Exploit Maturity',
      vector: 'E',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Attacked', value: 'E:A' },
        { label: 'POC', value: 'E:P' },
        { label: 'Unreported', value: 'E:U' },
      ],
    },
  ],
};
