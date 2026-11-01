import {describe,it,expect} from 'vitest';
import base from '../knowledge/crops.json';
import enrichment from '../knowledge/planning-profiles.json';
import tasks from '../knowledge/task-templates.json';
import relationships from '../knowledge/relationships.json';
describe('crop knowledge integrity',()=>{
 it('has one planning profile per canonical crop',()=>{expect(new Set(base.crops.map(c=>c.id)).size).toBe(base.crops.length);expect(new Set(enrichment.profiles.map(p=>p.cropId))).toEqual(new Set(base.crops.map(c=>c.id)))});
 it('contains positive dimensions and bounded months',()=>{for(const p of enrichment.profiles){expect(p.planning.plantSpacingCm).toBeGreaterThan(0);expect(p.planning.rowSpacingCm).toBeGreaterThan(0);expect(p.planning.approxPlantsPerM2).toBeGreaterThan(0);for(const m of [...p.phenology.sowMonths,...p.phenology.harvestMonths])expect(m).toBeGreaterThanOrEqual(1),expect(m).toBeLessThanOrEqual(12)}});
 it('has valid task references',()=>{const ids=new Set(tasks.tasks.map(t=>t.id));for(const p of enrichment.profiles)for(const id of p.taskTemplateIds)expect(ids.has(id)).toBe(true)});
 it('has valid relationship references',()=>{const ids=new Set(base.crops.map(c=>c.id));for(const r of relationships.relationships){expect(ids.has(r.cropA)).toBe(true);expect(ids.has(r.cropB)).toBe(true)}});
 it('does not claim verified horticultural evidence',()=>{for(const p of enrichment.profiles)expect(p.provenance.status).toBe('provisional')});
});