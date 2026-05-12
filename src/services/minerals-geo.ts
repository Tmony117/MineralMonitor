import type { MiningEquipment, LandChangeEvent } from '@/types';

// Using mock endpoints for Phase 1. When the backend is ready, replace these URLs
// with the actual endpoints (e.g. '/api/minerals/v1/concessions')
const CONCESSIONS_API_URL = '/data/ghana-concessions.geojson';
const EQUIPMENT_API_URL = '/data/mining-equipment.json';

export async function fetchConcessions(): Promise<any> {
  try {
    const response = await fetch(CONCESSIONS_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Expected to be a GeoJSON FeatureCollection
  } catch (error) {
    console.error('Error fetching concessions data:', error);
    return { type: 'FeatureCollection', features: [] };
  }
}

export async function fetchMiningEquipment(): Promise<MiningEquipment[]> {
  try {
    const response = await fetch(EQUIPMENT_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as MiningEquipment[];
  } catch (error) {
    console.error('Error fetching mining equipment data:', error);
    return [];
  }
}

export async function fetchLandChangeEvents(): Promise<LandChangeEvent[]> {
  // Mocking land change events for Phase 1. Return empty array for now.
  // In the future, this would fetch from a Postgres-backed endpoint.
  return [];
}
