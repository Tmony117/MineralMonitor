/**
 * Mock data service for the minerals variant.
 * Provides realistic sample data for Ghana & ECOWAS minerals panels
 * when live APIs are unavailable (dev mode / demo / bootstrap fallback).
 */

import type { NewsItem, MarketData } from '@/types';

const hoursAgo = (h: number) => new Date(Date.now() - h * 60 * 60 * 1000);

export const MOCK_GHANA_NEWS: NewsItem[] = [
  {
    source: 'Mining Weekly',
    title: 'AngloGold Ashanti ramps up Obuasi production to 400k oz/year',
    link: 'https://example.com/1',
    pubDate: hoursAgo(2),
    isAlert: false,
    lat: 6.2,
    lon: -1.6,
    locationName: 'Obuasi, Ghana',
    snippet: 'Underground operations at the Obuasi gold mine are returning to full capacity after the 2023 operational reset.',
  },
  {
    source: 'GhanaWeb',
    title: 'Ghana Chamber of Mines reports 12% output increase in Q1 2026',
    link: 'https://example.com/2',
    pubDate: hoursAgo(5),
    isAlert: false,
    snippet: 'Aggregate gold production from Ghana\'s major mines rose 12% year-on-year in the first quarter.',
  },
  {
    source: 'Reuters',
    title: 'Newmont Ahafo South expansion receives environmental permit',
    link: 'https://example.com/3',
    pubDate: hoursAgo(8),
    isAlert: true,
    lat: 6.88,
    lon: -2.35,
    locationName: 'Ahafo, Ghana',
    snippet: 'Ghana\'s Environmental Protection Agency has approved the Ahafo South deepening project.',
  },
  {
    source: 'Joy News',
    title: 'Ghana Bauxite Company eyes 2M tonne annual output by 2027',
    link: 'https://example.com/4',
    pubDate: hoursAgo(12),
    isAlert: false,
    lat: 6.47,
    lon: -2.32,
    locationName: 'Awaso, Ghana',
    snippet: 'The Awaso bauxite mine is targeting a significant capacity increase with new processing infrastructure.',
  },
  {
    source: 'Minerals Commission',
    title: 'Ghana launches new manganese beneficiation strategy',
    link: 'https://example.com/5',
    pubDate: hoursAgo(18),
    isAlert: false,
    lat: 5.35,
    lon: -1.98,
    locationName: 'Nsuta, Ghana',
    snippet: 'A national strategy aims to move Ghana up the manganese value chain through local processing.',
  },
  {
    source: 'Bloomberg',
    title: 'Takoradi gold refinery achieves 95% recovery rate in first year',
    link: 'https://example.com/6',
    pubDate: hoursAgo(24),
    isAlert: false,
    lat: 4.89,
    lon: -1.75,
    locationName: 'Takoradi, Ghana',
    snippet: 'The state-backed refinery has processed over 50 tonnes of gold concentrate since commissioning.',
  },
];

export const MOCK_ECOWAS_NEWS: NewsItem[] = [
  {
    source: 'Mining Journal',
    title: 'Endeavour Mining declares commercial production at Lafigué, Côte d\'Ivoire',
    link: 'https://example.com/7',
    pubDate: hoursAgo(3),
    isAlert: false,
    lat: 7.5,
    lon: -5.2,
    locationName: 'Lafigué, Côte d\'Ivoire',
    snippet: 'The Lafigué gold mine has reached nameplate capacity ahead of schedule.',
  },
  {
    source: 'SNL Metals',
    title: 'Sierra Leone iron ore exports hit 18-month high via Pepel port',
    link: 'https://example.com/8',
    pubDate: hoursAgo(6),
    isAlert: false,
    lat: 8.58,
    lon: -13.06,
    locationName: 'Pepel, Sierra Leone',
    snippet: 'Tonkolili iron ore shipments through Pepel port have resumed at pre-disruption levels.',
  },
  {
    source: 'Reuters',
    title: 'Liberia signs MoU with ArcelorMittal on expanded iron ore corridor',
    link: 'https://example.com/9',
    pubDate: hoursAgo(10),
    isAlert: false,
    lat: 6.36,
    lon: -10.8,
    locationName: 'Yekepa, Liberia',
    snippet: 'The agreement covers rail and port infrastructure upgrades for the Buchanan corridor.',
  },
  {
    source: 'Sabc News',
    title: 'Sabodala-Massawa gold output drives Senegal mining sector growth',
    link: 'https://example.com/10',
    pubDate: hoursAgo(14),
    isAlert: false,
    lat: 12.8,
    lon: -12.2,
    locationName: 'Sabodala, Senegal',
    snippet: 'Endeavour\'s Sabodala-Massawa complex contributed over 60% of Senegal\'s gold production.',
  },
  {
    source: 'Mining Technology',
    title: 'Nigeria commissions lithium processing pilot plant in Nasarawa',
    link: 'https://example.com/11',
    pubDate: hoursAgo(20),
    isAlert: true,
    lat: 8.5,
    lon: 8.0,
    locationName: 'Nasarawa, Nigeria',
    snippet: 'The pilot facility is Nigeria\'s first attempt at domestic lithium concentrate production.',
  },
  {
    source: 'AFPMB',
    title: 'ECOWAS ministers agree on harmonised mining revenue transparency framework',
    link: 'https://example.com/12',
    pubDate: hoursAgo(28),
    isAlert: false,
    snippet: 'A new regional framework aims to standardise mineral revenue reporting across ECOWAS states.',
  },
];

export const MOCK_AFRICA_MINING_NEWS: NewsItem[] = [
  {
    source: 'African Mining',
    title: 'DRC cobalt output edges higher as artisanal sector formalises',
    link: 'https://example.com/13',
    pubDate: hoursAgo(4),
    isAlert: false,
    snippet: 'Cobalt production from the DRC is stabilising as formalisation programmes expand.',
  },
  {
    source: 'Mail & Guardian',
    title: 'South Africa platinum miners strike for better wages in Rustenburg',
    link: 'https://example.com/14',
    pubDate: hoursAgo(9),
    isAlert: true,
    snippet: 'Labour action at major platinum operations threatens output targets for Q2 2026.',
  },
  {
    source: 'Reuters',
    title: 'Zambia copper belt sees renewed investment after debt restructuring',
    link: 'https://example.com/15',
    pubDate: hoursAgo(15),
    isAlert: false,
    snippet: 'Major copper producers are resuming expansion plans following the sovereign debt deal.',
  },
];

export const MOCK_MINERALS_MARKETS: MarketData[] = [
  {
    symbol: 'ANG.JO',
    name: 'AngloGold Ashanti',
    display: 'ANG',
    price: 425.80,
    change: 2.35,
    sparkline: [415, 418, 420, 419, 422, 421, 423, 425, 424, 426, 425, 428, 426, 425.8],
  },
  {
    symbol: 'GFI.JO',
    name: 'Gold Fields',
    display: 'GFI',
    price: 298.40,
    change: -1.20,
    sparkline: [305, 304, 302, 303, 301, 300, 299, 298, 297, 299, 298.5, 298, 298.2, 298.4],
  },
  {
    symbol: 'EDV.TO',
    name: 'Endeavour Mining',
    display: 'EDV',
    price: 32.15,
    change: 0.85,
    sparkline: [30.5, 30.8, 31.0, 31.2, 31.5, 31.3, 31.8, 32.0, 31.9, 32.1, 32.3, 32.0, 31.9, 32.15],
  },
  {
    symbol: 'NEM',
    name: 'Newmont Corp',
    display: 'NEM',
    price: 48.72,
    change: 0.45,
    sparkline: [47.5, 47.8, 48.0, 47.9, 48.2, 48.1, 48.3, 48.5, 48.4, 48.6, 48.5, 48.7, 48.6, 48.72],
  },
  {
    symbol: 'GC=F',
    name: 'Gold Futures',
    display: 'Gold',
    price: 2345.60,
    change: 12.40,
    sparkline: [2320, 2325, 2330, 2328, 2335, 2332, 2338, 2340, 2339, 2342, 2345, 2343, 2344, 2345.6],
  },
  {
    symbol: 'SI=F',
    name: 'Silver Futures',
    display: 'Silver',
    price: 28.35,
    change: -0.15,
    sparkline: [29.0, 28.9, 28.8, 28.7, 28.6, 28.5, 28.4, 28.5, 28.4, 28.3, 28.4, 28.35, 28.3, 28.35],
  },
  {
    symbol: 'ALI=F',
    name: 'Aluminum Futures',
    display: 'Aluminum',
    price: 2450.00,
    change: 15.00,
    sparkline: [2420, 2425, 2430, 2435, 2440, 2438, 2442, 2445, 2443, 2448, 2450, 2449, 2451, 2450],
  },
  {
    symbol: 'MNG=F',
    name: 'Manganese Futures',
    display: 'Manganese',
    price: 3.85,
    change: 0.05,
    sparkline: [3.70, 3.72, 3.75, 3.73, 3.76, 3.78, 3.80, 3.79, 3.81, 3.83, 3.84, 3.85, 3.84, 3.85],
  },
];

/** Return mock news for a given minerals category, or null if none. */
export function getMockMineralsNews(category: string): NewsItem[] | null {
  switch (category) {
    case 'ghana-focus': return MOCK_GHANA_NEWS;
    case 'ecowas-minerals': return MOCK_ECOWAS_NEWS;
    case 'africa-mining': return MOCK_AFRICA_MINING_NEWS;
    default: return null;
  }
}

/** Return mock market data for the minerals variant. */
export function getMockMineralsMarkets(): MarketData[] {
  return MOCK_MINERALS_MARKETS;
}
