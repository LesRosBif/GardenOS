import {describe,it,expect} from 'vitest';
import {cellsFor,occupancyAt,placementValid} from './PlantingGrid';
import type {Allocation,BedRef} from './CropWorkspace';
const bed:BedRef={id:'a',name:'Bed A',w:4,h:2,sun:'high'};
const allocation:Allocation={id:'one',bedId:'a',cropId:'carrot',x:0,y:0,w:2,h:2,start:'2027-03-01',end:'2027-07-01'};
describe('visual planning occupancy',()=>{it('shows four occupied cells during growth',()=>{expect(cellsFor(bed,[allocation],'2027-06-01').size).toBe(4);expect(occupancyAt(bed,[allocation],'2027-06-01')).toBe(.5)});it('clears cells outside season',()=>{expect(cellsFor(bed,[allocation],'2027-08-01').size).toBe(0)});it('rejects overlapping placement',()=>{expect(placementValid(bed,[allocation],{...allocation,id:'two'})).toBe(false)});it('allows successive crop in same cells',()=>{expect(placementValid(bed,[allocation],{...allocation,id:'two',start:'2027-08-01',end:'2027-10-01'})).toBe(true)});it('rejects out of bounds',()=>{expect(placementValid(bed,[],{...allocation,x:3})).toBe(false)})});
