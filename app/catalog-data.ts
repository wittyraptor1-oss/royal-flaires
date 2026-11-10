import raw from '../content/products.json';
export type Product={id:string;slug:string;name:string;maker:string;category:string;fabric:string;colour:string;sourceListedPriceINR:number;sourceCheckedAt:string;source:string;purchasable:boolean;sku:string;image:string;images?:string[]};
export const products=raw as Product[];
export const legacyProductPath='/products/biba-pink-poly-georgette-printed-saree';
export const categories=Array.from(new Set(products.map(p=>p.category))).sort();
export function categorySlug(c:string){return c.toLowerCase().replace(/ & /g,'-').replace(/[^a-z0-9]+/g,'-')}
export function findProduct(path:string){return path===legacyProductPath?products.find(p=>p.sku==='SKD31927SS26PNK'):products.find(p=>'/products/'+p.slug===path)}
export function money(price:number){return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',minimumFractionDigits:0,maximumFractionDigits:2}).format(price)}
