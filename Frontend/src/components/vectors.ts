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
        { label: 'Network', value: 'AV:N', description: 'The vulnerable system is bound to the network stack and the set of possible attackers extends beyond the other options listed below, up to and including the entire Internet. Such a vulnerability is often termed “remotely exploitable” and can be thought of as an attack being exploitable at the protocol level one or more network hops away (e.g., across one or more routers). An example of a network attack is an attacker causing a denial of service (DoS) by sending a specially crafted TCP packet across a wide area network (e.g., CVE-2004-0230).' },
        { label: 'Adjacent Network', value: 'AV:A', description: 'The vulnerable system is bound to a protocol stack, but the attack is limited at the protocol level to a logically adjacent topology. This can mean an attack must be launched from the same shared proximity (e.g., Bluetooth, NFC, or IEEE 802.11) or logical network (e.g., local IP subnet), or from within a secure or otherwise limited administrative domain (e.g., MPLS, secure VPN within an administrative network zone). One example of an Adjacent attack would be an ARP (IPv4) or neighbor discovery (IPv6) flood leading to a denial of service on the local LAN segment (e.g., CVE-2013-6014).' },
        { label: 'Local', value: 'AV:L', description: 'The vulnerable system is not bound to the network stack and the attacker’s path is via read/write/execute capabilities. Either:\n' +
            '\n' +
            'the attacker exploits the vulnerability by accessing the target system locally (e.g., keyboard, console), or through terminal emulation (e.g., SSH); or\n' +
            '\n' +
            'the attacker relies on User Interaction by another person to perform actions required to exploit the vulnerability (e.g., using social engineering techniques to trick a legitimate user into opening a malicious document).' },
        { label: 'Physical', value: 'AV:P', description: 'The attack requires the attacker to physically touch or manipulate the vulnerable system. Physical interaction may be brief (e.g., evil maid attack1) or persistent. An example of such an attack is a cold boot attack in which an attacker gains access to disk encryption keys after physically accessing the target system. Other examples include peripheral attacks via FireWire/USB Direct Memory Access (DMA).' },
      ],
    },
    {
      name: 'Attack Complexity',
      vector: 'AC',
      buttons: [
        { label: 'Low', value: 'AC:L', description: 'The attacker must take no measurable action to exploit the vulnerability. The attack requires no target-specific circumvention to exploit the vulnerability. An attacker can expect repeatable success against the vulnerable system.' },
        { label: 'High', value: 'AC:H', description: 'The successful attack depends on the evasion or circumvention of security-enhancing techniques in place that would otherwise hinder the attack. These include:\n' +
            '\n' +
            'Evasion of exploit mitigation techniques. The attacker must have additional methods available to bypass security measures in place. For example, circumvention of address space randomization (ASLR) or data execution prevention (DEP) must be performed for the attack to be successful.\n' +
            '\n' +
            'Obtaining target-specific secrets. The attacker must gather some target-specific secret before the attack can be successful. A secret is any piece of information that cannot be obtained through any amount of reconnaissance. To obtain the secret the attacker must perform additional attacks or break otherwise secure measures (e.g. knowledge of a secret key may be needed to break a crypto channel). This operation must be performed for each attacked target.' },
      ],
    },
    {
      name: 'Attack Requirements',
      vector: 'AT',
      buttons: [
        { label: 'None', value: 'AT:N', description: 'The successful attack does not depend on the deployment and execution conditions of the vulnerable system. The attacker can expect to be able to reach the vulnerability and execute the exploit under all or most instances of the vulnerability.' },
        { label: 'Present', value: 'AT:P', description: 'The successful attack depends on the presence of specific deployment and execution conditions of the vulnerable system that enable the attack. These include:\n' +
            '\n' +
            'A race condition must be won to successfully exploit the vulnerability. The successfulness of the attack is conditioned on execution conditions that are not under full control of the attacker. The attack may need to be launched multiple times against a single target before being successful.\n' +
            '\n' +
            'Network injection. The attacker must inject themselves into the logical network path between the target and the resource requested by the victim (e.g. vulnerabilities requiring an on-path attacker).' },
      ],
    },
    {
      name: 'Privileges Required',
      vector: 'PR',
      buttons: [
        { label: 'None', value: 'PR:N', description: 'The attacker is unauthenticated prior to attack, and therefore does not require any access to settings or files of the vulnerable system to carry out an attack.' },
        { label: 'Low', value: 'PR:L', description: 'The attacker requires privileges that provide basic capabilities that are typically limited to settings and resources owned by a single low-privileged user. Alternatively, an attacker with Low privileges has the ability to access only non-sensitive resources.' },
        { label: 'High', value: 'PR:H', description: 'The attacker requires privileges that provide significant (e.g., administrative) control over the vulnerable system allowing full access to the vulnerable system’s settings and files.' },
      ],
    },
    {
      name: 'User Interaction',
      vector: 'UI',
      buttons: [
        { label: 'None', value: 'UI:N', description: 'The vulnerable system can be exploited without interaction from any human user, other than the attacker. Examples include: a remote attacker is able to send packets to a target system a locally authenticated attacker executes code to elevate privileges' },
        { label: 'Passive', value: 'UI:P', description: 'Successful exploitation of this vulnerability requires limited interaction by the targeted user with the vulnerable system and the attacker’s payload. These interactions would be considered involuntary and do not require that the user actively subvert protections built into the vulnerable system. Examples include:\n' +
            '\n' +
            'utilizing a website that has been modified to display malicious content when the page is rendered (most stored XSS or CSRF)\n' +
            '\n' +
            'running an application that calls a malicious binary that has been planted on the system\n' +
            '\n' +
            'using an application which generates traffic over an untrusted or compromised network (vulnerabilities requiring an on-path attacker)' },
        { label: 'Active', value: 'UI:A', description: 'Successful exploitation of this vulnerability requires a targeted user to perform specific, conscious interactions with the vulnerable system and the attacker’s payload, or the user’s interactions would actively subvert protection mechanisms which would lead to exploitation of the vulnerability. Examples include:\n' +
            '\n' +
            'importing a file into a vulnerable system in a specific manner\n' +
            '\n' +
            'placing files into a specific directory prior to executing code\n' +
            '\n' +
            'submitting a specific string into a web application (e.g. reflected or self XSS) dismiss or accept prompts or security warnings prior to taking an action (e.g. opening/editing a file, connecting a device).' },
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
        { label: 'None', value: 'VC:N', description: 'There is no loss of confidentiality within the Vulnerable System.' },
        { label: 'Low', value: 'VC:L', description: 'There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the Vulnerable System.' },
        { label: 'High', value: 'VC:H', description: 'There is a total loss of confidentiality, resulting in all information within the Vulnerable System being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact. For example, an attacker steals the administrator\'s password, or private encryption keys of a web server.' },
      ],
    },
    {
      name: 'Integrity',
      vector: 'VI',
      buttons: [
        { label: 'None', value: 'VI:N', description: 'There is no loss of integrity within the Vulnerable System.' },
        { label: 'Low', value: 'VI:L', description: 'Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact to the Vulnerable System.' },
        { label: 'High', value: 'VI:H', description: 'There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the Vulnerable System. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the Vulnerable System.' },
      ],
    },
    {
      name: 'Availability',
      vector: 'VA',
      buttons: [
        { label: 'None', value: 'VA:N', description: 'There is no impact to availability within the Vulnerable System.' },
        { label: 'Low', value: 'VA:L', description: 'Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the Vulnerable System are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the Vulnerable System.' },
        { label: 'High', value: 'VA:H', description: 'There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the Vulnerable System; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the Vulnerable System (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable).' },
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
        { label: 'None', value: 'SC:N', description: 'There is no loss of confidentiality within the Subsequent System or all confidentiality impact is constrained to the Vulnerable System.' },
        { label: 'Low', value: 'SC:L', description: 'There is some loss of confidentiality. Access to some restricted information is obtained, but the attacker does not have control over what information is obtained, or the amount or kind of loss is limited. The information disclosure does not cause a direct, serious loss to the Subsequent System.' },
        { label: 'High', value: 'SC:H', description: 'There is a total loss of confidentiality, resulting in all resources within the Subsequent System being divulged to the attacker. Alternatively, access to only some restricted information is obtained, but the disclosed information presents a direct, serious impact. For example, an attacker steals the administrator\'s password, or private encryption keys of a web server.' },
      ],
    },
    {
      name: 'Integrity',
      vector: 'SI',
      buttons: [
        { label: 'None', value: 'SI:N', description: 'There is no loss of integrity within the Subsequent System or all integrity impact is constrained to the Vulnerable System.' },
        { label: 'Low', value: 'SI:L', description: 'Modification of data is possible, but the attacker does not have control over the consequence of a modification, or the amount of modification is limited. The data modification does not have a direct, serious impact to the Subsequent System.' },
        { label: 'High', value: 'SI:H', description: 'There is a total loss of integrity, or a complete loss of protection. For example, the attacker is able to modify any/all files protected by the Subsequent System. Alternatively, only some files can be modified, but malicious modification would present a direct, serious consequence to the Subsequent System.' },
      ],
    },
    {
      name: 'Availability',
      vector: 'SA',
      buttons: [
        { label: 'None', value: 'SA:N', description: 'There is no impact to availability within the Subsequent System or all availability impact is constrained to the Vulnerable System.' },
        { label: 'Low', value: 'SA:L', description: 'Performance is reduced or there are interruptions in resource availability. Even if repeated exploitation of the vulnerability is possible, the attacker does not have the ability to completely deny service to legitimate users. The resources in the Subsequent System are either partially available all of the time, or fully available only some of the time, but overall there is no direct, serious consequence to the Subsequent System.' },
        { label: 'High', value: 'SA:H', description: 'There is a total loss of availability, resulting in the attacker being able to fully deny access to resources in the Subsequent System; this loss is either sustained (while the attacker continues to deliver the attack) or persistent (the condition persists even after the attack has completed). Alternatively, the attacker has the ability to deny some availability, but the loss of availability presents a direct, serious consequence to the Subsequent System (e.g., the attacker cannot disrupt existing connections, but can prevent new connections; the attacker can repeatedly exploit a vulnerability that, in each instance of a successful attack, leaks a only small amount of memory, but after repeated exploitation causes a service to become completely unavailable).' },
      ],
    },
  ],
};

/* Supplemental Metrics */
export const supplemental_metrics: VectorCategoryType = {
  categoryName: 'Supplemental Metrics', // No name because Supplemental Metrics do not have subcategories
  displayCategoryName: false,
  buttons: [
    {
      name: 'Safety',
      vector: 'S',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Negligible', value: 'S:N', description: 'Consequences of the vulnerability meet definition of IEC 61508 consequence categories of "marginal," "critical," or "catastrophic."' },
        { label: 'Present', value: 'S:P', description: 'Consequences of the vulnerability meet definition of IEC 61508 consequence category "negligible."' },
      ],
    },
    {
      name: 'Automatable',
      vector: 'AU',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'No', value: 'AU:N', description: 'Attackers cannot reliably automate all 4 steps of the kill chain for this vulnerability for some reason. These steps are reconnaissance, weaponization, delivery, and exploitation.' },
        { label: 'Yes', value: 'AU:Y', description: 'Attackers can reliably automate all 4 steps of the kill chain. These steps are reconnaissance, weaponization, delivery, and exploitation (e.g., the vulnerability is “wormable”).' },
      ],
    },
    {
      name: 'Recovery',
      vector: 'R',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Automatic', value: 'R:A', description: 'The system recovers services automatically after an attack has been performed.' },
        { label: 'User', value: 'R:U', description: 'The system requires manual intervention by the user to recover services, after an attack has been performed.' },
        { label: 'Irrecoverable', value: 'R:I', description: 'The system services are irrecoverable by the user, after an attack has been performed.' },
      ],
    },
    {
      name: 'Value Density',
      vector: 'V',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Diffuse', value: 'V:D', description: 'The vulnerable system has limited resources. That is, the resources that the attacker will gain control over with a single exploitation event are relatively small. An example of Diffuse (think: limited) Value Density would be an attack on a single email client vulnerability.' },
        { label: 'Concentrated', value: 'V:C', description: 'The vulnerable system is rich in resources. Heuristically, such systems are often the direct responsibility of “system operators” rather than users. An example of Concentrated (think: broad) Value Density would be an attack on a central email server.' },
      ],
    },
    {
      name: 'Vulnerability Response Effort',
      vector: 'RE',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Low', value: 'RE:L', description: 'The effort required to respond to a vulnerability is low/trivial. Examples include: communication on better documentation, configuration workarounds, or guidance from the vendor that does not require an immediate update, upgrade, or replacement by the consuming entity, such as firewall filter configuration.' },
        { label: 'Moderate', value: 'RE:M', description: 'The actions required to respond to a vulnerability require some effort on behalf of the consumer and could cause minimal service impact to implement. Examples include: simple remote update, disabling of a subsystem, or a low-touch software upgrade such as a driver update.' },
        { label: 'High', value: 'RE:H', description: 'The actions required to respond to a vulnerability are significant and/or difficult, and may possibly lead to an extended, scheduled service impact. This would need to be considered for scheduling purposes including honoring any embargo on deployment of the selected response. Alternatively, response to the vulnerability in the field is not possible remotely. The only resolution to the vulnerability involves physical replacement (e.g. units deployed would have to be recalled for a depot level repair or replacement). Examples include: a highly privileged driver update, microcode or UEFI BIOS updates, or software upgrades requiring careful analysis and understanding of any potential infrastructure impact before implementation. A UEFI BIOS update that impacts Trusted Platform Module (TPM) attestation without impacting disk encryption software such as Bit locker is a good recent example. Irreparable failures such as non-bootable flash subsystems, failed disks or solid-state drives (SSD), bad memory modules, network devices, or other non-recoverable under warranty hardware, should also be scored as having a High effort.' },
      ],
    },
    {
      name: 'Provider Urgency',
      vector: 'U',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Clear', value: 'U:Clear', description: 'Provider has assessed the impact of this vulnerability as having no urgency (Informational).' },
        { label: 'Green', value: 'U:Green', description: 'Provider has assessed the impact of this vulnerability as having a reduced urgency.' },
        { label: 'Amber', value: 'U:Amber', description: 'Provider has assessed the impact of this vulnerability as having a moderate urgency.' },
        { label: 'Red', value: 'U:Red', description: 'Provider has assessed the impact of this vulnerability as having the highest urgency.' },
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
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Network', value: 'MAV:N', description: '' },
        { label: 'Adjacent', value: 'MAV:A', description: '' },
        { label: 'Local', value: 'MAV:L', description: '' },
        { label: 'Physical', value: 'MAV:P', description: '' },
      ],
    },
    {
      name: 'Attack Complexity',
      vector: 'MAC',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Low', value: 'MAC:L', description: '' },
        { label: 'High', value: 'MAC:H', description: '' },
      ],
    },
    {
      name: 'Attack Requirements',
      vector: 'MAT',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'None', value: 'MAT:N', description: '' },
        { label: 'Present', value: 'MAT:P', description: '' },
      ],
    },
    {
      name: 'Privileges Required',
      vector: 'MPR',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'None', value: 'MPR:N', description: '' },
        { label: 'Low', value: 'MPR:L', description: '' },
        { label: 'High', value: 'MPR:H', description: '' },
      ],
    },
    {
      name: 'User Interaction',
      vector: 'MUI',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'None', value: 'MUI:N', description: '' },
        { label: 'Passive', value: 'MUI:P', description: '' },
        { label: 'Active', value: 'MUI:A', description: '' },
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
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'None', value: 'MVC:N', description: '' },
        { label: 'Low', value: 'MVC:L', description: '' },
        { label: 'High', value: 'MVC:H', description: '' },
      ],
    },
    {
      name: 'Integrity',
      vector: 'MVI',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'None', value: 'MVI:N', description: '' },
        { label: 'Low', value: 'MVI:L', description: '' },
        { label: 'High', value: 'MVI:H', description: '' },
      ],
    },
    {
      name: 'Availability',
      vector: 'MVA',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'None', value: 'MVA:N', description: '' },
        { label: 'Low', value: 'MVA:L', description: '' },
        { label: 'High', value: 'MVA:H', description: '' },
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
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'High', value: 'MSC:H', description: '' },
        { label: 'Low', value: 'MSC:L', description: '' },
        { label: 'Negligible', value: 'MSC:N', description: '' },
      ],
    },
    {
      name: 'Integrity',
      vector: 'MSI',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Safety', value: 'MSI:S', description: '' },
        { label: 'High', value: 'MSI:H', description: '' },
        { label: 'Low', value: 'MSI:L', description: '' },
        { label: 'Negligible', value: 'MSI:N', description: '' },
      ],
    },
    {
      name: 'Availability',
      vector: 'MSA',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Safety', value: 'MSA:S', description: '' },
        { label: 'High', value: 'MSA:H', description: '' },
        { label: 'Low', value: 'MSA:L', description: '' },
        { label: 'Negligible', value: 'MSA:N', description: '' },
      ],
    },
  ],
};
/* Environmental (Security Requirements) */
export const environmental_security_requirements: VectorCategoryType = {
  categoryName: 'Environmental Security Requirements', // No name because Environmental Security Requirements do not have subcategories
  displayCategoryName: false,
  buttons: [
    {
      name: 'Confidentiality Requirement',
      vector: 'CR',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Low', value: 'CR:L', description: 'Loss of Confidentiality is likely to have only a limited adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
        { label: 'Medium', value: 'CR:M', description: 'Loss of Confidentiality is likely to have a serious adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
        { label: 'High', value: 'CR:H', description: 'Loss of Confidentiality is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
      ],
    },
    {
      name: 'Integrity Requirement',
      vector: 'IR',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Low', value: 'IR:L', description: 'Loss of Integrity is likely to have only a limited adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
        { label: 'Medium', value: 'IR:M', description: 'Loss of Integrity is likely to have a serious adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
        { label: 'High', value: 'IR:H', description: 'Loss of Integrity is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
      ],
    },
    {
      name: 'Availability Requirement',
      vector: 'AR',
      buttons: [
        { label: 'Not Defined', value: 'X', description: '' },
        { label: 'Low', value: 'AR:L', description: 'Loss of Availability is likely to have only a limited adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
        { label: 'Medium', value: 'AR:M', description: 'Loss of Availability is likely to have a serious adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
        { label: 'High', value: 'AR:H', description: 'Loss of Availability is likely to have a catastrophic adverse effect on the organization or individuals associated with the organization (e.g., employees, customers).' },
      ],
    },
  ],
};

/* Threat Metrics */
export const threat_metrics: VectorCategoryType = {
  categoryName: 'Threat Metrics', // No name because Threat Metrics do not have subcategories
  displayCategoryName: false,
  buttons: [
    {
      name: 'Exploit Maturity',
      vector: 'E',
      buttons: [
        { label: 'Not Defined', value: 'X', description: 'Reliable threat intelligence is not available to determine Exploit Maturity characteristics. This is the default value and is equivalent to Attacked (A) for the purposes of the calculation of the score by assuming the worst case.' },
        { label: 'Attacked', value: 'E:A', description: 'Based on available threat intelligence either of the following must apply:\n' +
            'Attacks targeting this vulnerability (attempted or successful) have been reported\n' +
            'Solutions to simplify attempts to exploit the vulnerability are publicly or privately available (such as exploit toolkits)' },
        { label: 'POC', value: 'E:P', description: 'Based on available threat intelligence each of the following must apply:\n' +
            'Proof-of-concept exploit code is publicly available\n' +
            'No knowledge of reported attempts to exploit this vulnerability\n' +
            'No knowledge of publicly available solutions used to simplify attempts to exploit the vulnerability (i.e., the “Attacked” value does not apply)' },
        { label: 'Unreported', value: 'E:U', description: 'Based on available threat intelligence each of the following must apply:\n' +
            'No knowledge of publicly available proof-of-concept exploit code No knowledge of reported attempts to exploit this vulnerability\n' +
            'No knowledge of publicly available solutions used to simplify attempts to exploit the vulnerability (i.e., neither the “POC” nor “Attacked” values apply)' },
      ],
    },
  ],
};

const merged = [
  exploitability_metrics,
  vulnerable_system_impact_metrics,
  subsequent_system_impact_metrics,
  supplemental_metrics,
  exploitability_metrics_env,
  vulnerable_system_impact_metrics_env,
  subsequent_system_impact_metrics_env,
  environmental_security_requirements,
  threat_metrics
]
export const merged_metrics = merged.flatMap((metric: VectorCategoryType) => metric.buttons.flatMap((button) =>
  button.buttons.map((b) => {
    return {
      id: b.value,
      name: button.name,
      value: b.label,
      category: metric.categoryName,
      description: b.description,
    }
    }
  )
  )
)
