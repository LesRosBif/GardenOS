// @vitest-environment happy-dom
import {describe,it,expect} from 'vitest';
import {exportBackup,importBackup} from './backup';
import type {Bed} from './backup';
import type {Allocation} from './CropWorkspace';
const beds:Bed[]=[{id:'bed-1',name:'Carrots & peas',x:0,y:0,w:4,h:2,sun:'high'}];
const allocations:Allocation[]=[{id:'plant-1',bedId:'bed-1',cropId:'carrot',x:0,y:0,w:2,h:2,start:'2027-03-01',end:'2027-07-01'}];
describe('GardenOS XML backups',()=>{it('round trips beds and allocations',()=>{expect(importBackup(exportBackup(beds,allocations))).toEqual({beds,allocations,legacy:false})});it('escapes XML names',()=>{expect(importBackup(exportBackup([{...beds[0],name:'A & "B" <C>'}],[])).beds[0].name).toBe('A & "B" <C>')});it('imports legacy beds-only backups',()=>{const xml='<?xml version="1.0"?><GardenOSBackup version="1"><Beds><Bed id="bed-1" name="Bed" x="0" y="0" w="4" h="2" sun="high"/></Beds></GardenOSBackup>';expect(importBackup(xml).legacy).toBe(true);expect(importBackup(xml).allocations).toEqual([])});it('rejects unknown crop references',()=>{expect(()=>exportBackup(beds,[{...allocations[0],cropId:'fictional'}])).toThrow()});it('rejects concurrent overlap',()=>{expect(()=>exportBackup(beds,[...allocations,{...allocations[0],id:'plant-2'}])).toThrow()});it('allows successive allocations',()=>{expect(()=>exportBackup(beds,[...allocations,{...allocations[0],id:'plant-2',start:'2027-08-01',end:'2027-10-01'}])).not.toThrow()});it('rejects malformed XML',()=>{expect(()=>importBackup('<GardenOSBackup')).toThrow()})});
