import fs from 'node:fs';
import sharp from 'sharp';
const input=process.argv[2];if(!input)throw new Error('Provide the verified import JSON path');
const raw=JSON.parse(fs.readFileSync(input,'utf8'));
fs.mkdirSync('public/media/catalog',{recursive:true});
const fabricNames=['Viscose Rayon','Viscose Blend','Cotton Viscose','Nylon Blend','Polycotton','Art Silk','Poly Georgette','Viscose Jacquard','Cotton Silk','Cotton Lycra','Cotton Linen','Cotton Blend','Polyester','Georgette','Chanderi','Organza','Viscose','Cotton','Rayon','Nylon','Silk','Linen','Velvet','Chiffon','Modal'];
const colourNames=['Sage Green','Bottle Green','Indigo','Champagne','Rani Pink','Light Blue','Dark Blue','Navy Blue','Off White','Olive Green','Mehendi','Fuchsia','Turquoise','Lavender','Mustard','Maroon','Magenta','Purple','Orange','Yellow','Green','Black','White','Ivory','Beige','Brown','Peach','Coral','Rust','Teal','Pink','Blue','Red','Grey','Gray','Nude','Gold','Silver','Aqua','Navy','Cream','Multicolour'];
function named(name,options){const normalized=name.toLowerCase().replaceAll('-',' ');return options.find(v=>new RegExp('\\b'+v.toLowerCase()+'\\b').test(normalized))||'Not specified'}
const output=[];
for(const p of raw){
 const dest='public'+p.image;
 if(!fs.existsSync(dest))await sharp(p.imageFile).rotate().resize({width:640,withoutEnlargement:true}).webp({quality:78}).toFile(dest);
 const {imageFile,originalImages,...entry}=p;
 entry.fabric=named(p.name,fabricNames);entry.colour=named(p.name,colourNames);
 if(/saree/i.test(p.name))entry.category='Sarees';else if(/unstitched/i.test(p.name))entry.category='Unstitched Suit Sets';else if(/earring|jhumka|necklace|rakhi|brass.*(stud|drop)/i.test(p.name))entry.category='Jewellery';else if(/clutch|sling bag|handbag/i.test(p.name))entry.category='Bags & Clutches';else if(/lehenga/i.test(p.name))entry.category='Lehenga Sets';else if(/co.?ord|fusion set/i.test(p.name))entry.category='Co-ord & Fusion Sets';else if(/jacket/i.test(p.name))entry.category='Jackets';else if(/blouse/i.test(p.name))entry.category='Blouses';else if(/set/i.test(p.name))entry.category='Suit Sets';else if(/kurta|kurti/i.test(p.name))entry.category='Kurtas & Kurtis';
 if(p.sku==='SKD31927SS26PNK')entry.images=Array.from({length:9},(_,i)=>`/media/biba-pink-georgette-${i}.webp`);
 output.push(entry);
}
fs.writeFileSync('content/products.json',JSON.stringify(output));
fs.writeFileSync('content/catalog-provenance.json',JSON.stringify({checkedAt:'2026-11-10',rightsBasis:'User confirmed authorized BIBA store access and resale permission and requested product and photo reuse.',records:raw.map(({id,source,originalImages})=>({id,source,originalImages}))},null,2));
console.log(`Prepared ${output.length} product records with locally served WebP photographs.`);
