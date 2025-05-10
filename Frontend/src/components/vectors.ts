import type { VectorCategoryType, ModelMapType } from './types.ts';

export function ModelMapType2Vector(model: ModelMapType): string {
  return Object.entries(model)
    .map(([value]) => `${value}`)
    .join('/');
}

/* Base Metrics */
export const exploitability_metrics: VectorCategoryType = {
  categoryName: 'Exploitability Metrics',
  buttons: [
    {
      name: 'Attack Vector',
      buttons: [
        { label: 'Network', value: 'AV:N' },
        { label: 'Adjacent Network', value: 'AV:A' },
        { label: 'Local', value: 'AV:L' },
        { label: 'Physical', value: 'AV:P' },
      ],
    },
    {
      name: 'Attack Complexity',
      buttons: [
        { label: 'Low', value: 'AC:L' },
        { label: 'High', value: 'AC:H' },
      ],
    },
    {
      name: 'Attack Requirements',
      buttons: [
        { label: 'None', value: 'AT:N' },
        { label: 'Present', value: 'AT:P' },
      ],
    },
    {
      name: 'Privileges Required',
      buttons: [
        { label: 'None', value: 'PR:N' },
        { label: 'Low', value: 'PR:L' },
        { label: 'High', value: 'PR:H' },
      ],
    },
    {
      name: 'User Interaction',
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
      buttons: [
        { label: 'None', value: 'VC:N' },
        { label: 'Low', value: 'VC:L' },
        { label: 'High', value: 'VC:H' },
      ],
    },
    {
      name: 'Integrity',
      buttons: [
        { label: 'None', value: 'VI:N' },
        { label: 'Low', value: 'VI:L' },
        { label: 'High', value: 'VI:H' },
      ],
    },
    {
      name: 'Availability',
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
      buttons: [
        { label: 'None', value: 'SC:N' },
        { label: 'Low', value: 'SC:L' },
        { label: 'High', value: 'SC:H' },
      ],
    },
    {
      name: 'Integrity',
      buttons: [
        { label: 'None', value: 'SI:N' },
        { label: 'Low', value: 'SI:L' },
        { label: 'High', value: 'SI:H' },
      ],
    },
    {
      name: 'Availability',
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
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Negligible', value: 'S:N' },
        { label: 'Present', value: 'S:P' },
      ],
    },
    {
      name: 'Automatable',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'No', value: 'AU:N' },
        { label: 'Yes', value: 'AU:Y' },
      ],
    },
    {
      name: 'Recovery',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Automatic', value: 'R:A' },
        { label: 'User', value: 'R:U' },
        { label: 'Irrecoverable', value: 'R:I' },
      ],
    },
    {
      name: 'Value Density',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Diffuse', value: 'V:D' },
        { label: 'Concentrated', value: 'V:C' },
      ],
    },
    {
      name: 'Vulnerability Response Effort',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'RE:L' },
        { label: 'Moderate', value: 'RE:M' },
        { label: 'High', value: 'RE:H' },
      ],
    },
    {
      name: 'Provider Urgency',
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
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'MAC:L' },
        { label: 'High', value: 'MAC:H' },
      ],
    },
    {
      name: 'Attack Requirements',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MAT:N' },
        { label: 'Present', value: 'MAT:P' },
      ],
    },
    {
      name: 'Privileges Required',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MPR:N' },
        { label: 'Low', value: 'MPR:L' },
        { label: 'High', value: 'MPR:H' },
      ],
    },
    {
      name: 'User Interaction',
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
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MVC:N' },
        { label: 'Low', value: 'MVC:L' },
        { label: 'High', value: 'MVC:H' },
      ],
    },
    {
      name: 'Integrity',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'None', value: 'MVI:N' },
        { label: 'Low', value: 'MVI:L' },
        { label: 'High', value: 'MVI:H' },
      ],
    },
    {
      name: 'Availability',
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
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'High', value: 'MSC:H' },
        { label: 'Low', value: 'MSC:L' },
        { label: 'Negligible', value: 'MSC:N' },
      ],
    },
    {
      name: 'Integrity',
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
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'CR:L' },
        { label: 'Medium', value: 'CR:M' },
        { label: 'High', value: 'CR:H' },
      ],
    },
    {
      name: 'Integrity Requirement',
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Low', value: 'IR:L' },
        { label: 'Medium', value: 'IR:M' },
        { label: 'High', value: 'IR:H' },
      ],
    },
    {
      name: 'Availability Requirement',
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
      buttons: [
        { label: 'Not Defined', value: 'X' },
        { label: 'Attacked', value: 'E:A' },
        { label: 'POC', value: 'E:P' },
        { label: 'Unreported', value: 'E:U' },
      ],
    },
  ],
};
