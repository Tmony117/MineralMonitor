export interface VariantMeta {
  title: string;
  description: string;
  keywords: string;
  url: string;
  siteName: string;
  shortName: string;
  subject: string;
  classification: string;
  categories: string[];
  features: string[];
}

export const VARIANT_META: { full: VariantMeta; [k: string]: VariantMeta } = {
  // 'full' key is kept as fallback alias for minerals (some consumers reference VARIANT_META.full)
  full: {
    title: 'World Minerals Monitor - Ghana & ECOWAS Mineral Intelligence',
    description: 'Real-time minerals intelligence dashboard focused on Ghana and ECOWAS member states. Track gold, bauxite, manganese, iron ore, and critical minerals across West Africa.',
    keywords: 'minerals dashboard, Ghana mining, ECOWAS minerals, West Africa mining, gold mines Ghana, bauxite, manganese, iron ore, critical minerals, mining intelligence, mineral exports, Tema port, Obuasi, Ahafo, mining operations, commodity tracking, West Africa resources, mineral supply chain',
    url: 'https://minerals.worldmonitor.app/',
    siteName: 'World Minerals Monitor',
    shortName: 'MineralsMonitor',
    subject: 'Ghana and ECOWAS Mineral Production, Trade, and Supply Chain Intelligence',
    classification: 'Minerals Dashboard, Mining Tracker, West Africa Resource Intelligence',
    categories: ['finance', 'business'],
    features: [
      'Ghana-first mineral site mapping (gold, bauxite, manganese)',
      'ECOWAS-wide mining operations tracker',
      'Real-time mineral commodity prices',
      'West Africa mining stock tracking',
      'Supply chain and port monitoring',
      'Mining policy and ESG alerts',
      'Critical minerals intelligence for battery metals',
      'Climate and weather impact on operations',
      'Operational risk and fire monitoring',
    ],
  },
  minerals: {
    title: 'World Minerals Monitor - Ghana & ECOWAS Mineral Intelligence',
    description: 'Real-time minerals intelligence dashboard focused on Ghana and ECOWAS member states. Track gold, bauxite, manganese, iron ore, and critical minerals across West Africa.',
    keywords: 'minerals dashboard, Ghana mining, ECOWAS minerals, West Africa mining, gold mines Ghana, bauxite, manganese, iron ore, critical minerals, mining intelligence, mineral exports, Tema port, Obuasi, Ahafo, mining operations, commodity tracking, West Africa resources, mineral supply chain',
    url: 'https://minerals.worldmonitor.app/',
    siteName: 'World Minerals Monitor',
    shortName: 'MineralsMonitor',
    subject: 'Ghana and ECOWAS Mineral Production, Trade, and Supply Chain Intelligence',
    classification: 'Minerals Dashboard, Mining Tracker, West Africa Resource Intelligence',
    categories: ['finance', 'business'],
    features: [
      'Ghana-first mineral site mapping (gold, bauxite, manganese)',
      'ECOWAS-wide mining operations tracker',
      'Real-time mineral commodity prices',
      'West Africa mining stock tracking',
      'Supply chain and port monitoring',
      'Mining policy and ESG alerts',
      'Critical minerals intelligence for battery metals',
      'Climate and weather impact on operations',
      'Operational risk and fire monitoring',
    ],
  },
};
