import {describe,it,expect} from 'vitest';
import {projections,monthlyYield,schedule} from './planningAnalytics';
const beds=[{id:'b',name:'Bed 1',w:4,h:2,sun:'high' as const}];
const allocations=[{id:'a',bedId:'b',cropId:'carrot',x:0,y:0,w:4,h:2,start:'2027-03-01',end:'2027-08-01'}];
describe('season analytics',()=>{it('computes provisional carrot yield from area and density',()=>{const r=projections(beds,allocations)[0];expect(r.area).toBe(2);expect(r.plants).toBe(100);expect(r.expected).toBeCloseTo(11)});it('allocates projected harvest across months',()=>{const rows=projections(beds,allocations),months=monthlyYield(rows,2027);expect(months.reduce((n,m)=>n+m.expected,0)).toBeCloseTo(rows[0].expected!,4)});it('derives stable dated milestones',()=>{const events=schedule(projections(beds,allocations));expect(events).toHaveLength(3);expect(events[0].id).toBe('a:start');expect(events[2].id).toBe('a:clear')})});
