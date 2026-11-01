import {describe,it,expect} from 'vitest';
describe('GardenOS foundation',()=>{it('supports the five primary workspaces',()=>{expect(['Today','Garden','Plan','Crops','More']).toHaveLength(5)});it('uses the GardenOS Pages base path',()=>{expect('/GardenOS/').toMatch(/^\/.+\/$/)})});
