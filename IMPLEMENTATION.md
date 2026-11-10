# Royal Flaires implementation

Vinext / React / TypeScript, server-rendered routes, locally served fonts and user-supplied editorial media. Original video watermarks remain intact. User confirmed authorized store access and resale permission and explicitly requested BIBA product/photo reuse. The pink poly georgette gallery is locally served, with BIBA identity, source attribution and composition preserved. It is separate from Royal Flaires chiffon inventory.

## Current state

Editorial storefront with scroll-seeking video, responsive navigation, native modal search and menu, collection empty states, fabric guide, journal, FAQs, support and account availability pages. Purchases are unavailable. No customer submissions are accepted and no order success is simulated.

## Required before commerce launch

- Royal Flaires-owned or authorized store connection; BIBA product/photo use is authorized by the user, but API/admin access is unavailable.
- Approved product catalog including photos, rights, composition, measurements, blouse inclusion, care, declarations, prices and inventory.
- Provider configuration for real customer authentication, inventory, checkout, payments, verified webhooks and order access.
- Verified support details, delivery/serviceability rules, returns policy, terms and reviewed privacy content.
- Authenticated CMS and production order/inventory audit trail (not yet implemented).
- Contact delivery and subscription provider including consent and unsubscribe (not yet implemented).

Do not represent the editorial film as a purchasable product or evidence of composition. Product-specific macro, single/folded-layer comparison and full gallery photography are still needed. Product pages, transactional flows, bag functionality and transactional product filters require a real catalog integration. A device-local wishlist and colour/fabric browse filters work for the authorized BIBA edit. Account, checkout and tracking routes currently explain availability.

## Verification

TypeScript and production build. Browser review of opening, collection navigation, search modal, focus restoration and fabric route. Real device performance, complete desktop/touch/reduced-motion validation, payment verification and provider integration checks remain outstanding.

## Expanded catalog

The BIBA edit imports 504 distinct product records from BIBA public product pages, deduplicated by source SKU. Each entry retains BIBA identity, its source URL, listed INR price and check date. All catalog entries are non-purchasable; reference prices are not Royal Flaires offers. Source photographs are downloaded and served locally as WebP assets. Category, colour and fabric labels are grounded in the original product names, with no invented fibre percentages, measurements or stock. BIBA styles are kept separate from Royal Flaires chiffon inventory.

Catalog pages have 24 products per page, URL-backed filters/search/sort, page controls, product detail routes, zoom and device-local saved favourites. The homepage shows eight featured pieces and links to the full catalog. The legacy pink saree URL is retained.
