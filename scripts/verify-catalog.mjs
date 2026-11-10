import fs from 'node:fs';
import assert from 'node:assert/strict';
const products=JSON.parse(fs.readFileSync(new URL('../content/products.json',import.meta.url),'utf8'));
assert(products.length>=500,`Expected at least 500 verified products; found ${products.length}`);
for(const key of ['id','slug','source'])assert.equal(new Set(products.map(p=>p[key])).size,products.length,`Duplicate ${key}`);
for(const p of products){assert(p.name&&p.sku&&p.maker==='BIBA');assert(p.source.startsWith('https://www.biba.in/'));assert(p.sourceListedPriceINR>0);assert.equal(p.purchasable,false);assert(fs.existsSync(new URL('../public'+p.image,import.meta.url)),`Missing image ${p.id}`);for(const image of p.images||[])assert(fs.existsSync(new URL('../public'+image,import.meta.url)))}
console.log(`Verified ${products.length} distinct products, source records, positive reference prices and local images. Purchasing remains unavailable.`);
