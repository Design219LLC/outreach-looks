# Mama’s Gyros Grill — Gate 3–5 build notes

Gate 3–5 · 2026-09-02 · Bay 3309 (DOOR-LED) from Gate 2 lock.

## Paths

| | |
|---|---|
| Look | `/workspace/looks/mamas-gyros-grill/` |
| Publish copy | `/workspace/outreach-looks-publish/mamas-gyros-grill/` (rsync, **no git**) |
| Studio pack | `/workspace/studio-kit/looks/227-mamas-gyros/` |

## Lock honored

- **MP keep:** https://www.magicpatterns.com/inspiration/e1d00ffe-591d-40e8-aac1-a0e25df6bbac (Bay 3309 only; stale MP ids ignored)
- **Type:** Zilla Slab + Manrope (Google Fonts link + CSS `--display` / `--text`)
- **Color:** ochre `#D4A05A` · neon `#C62828` · roast `#5A2A22` + ink `#171311` / cream `#F7F1E6`
- **Voice:** Gyros on Kiehl.
- **Hero:** `img/hero.jpg` (mobile) · `img/door-wide.jpg` (desktop/OG)
- **Call:** `tel:+15018330306` · (501) 833-0306 — **never** 501-920-4065
- **NAP:** 3309 E Kiehl Ave, Sherwood, AR 72120
- **Hours:** DIRECTORY labeled (door vinyl Mon–Fri 11–7 · Sat 11–3 · Sun closed)
- **Envelope:** ATTN: Owner
- **Classes:** `bay3309` / `signband` / `neoncall` / `spitstory` / `foilcard` / `patchroom` / `kiehl-dock` (+ bayrail/bayshade/bayname/bayline/baytoday/bayacts/baydir/hoursplate/kiehlfind/fbvinyl/bayfoot) — not Lady Birds `veil`/`kicker`, not prior foil-ticket tree

## Gate checklist

| Gate | Status |
|---|---|
| 1 Photo system | PASS (prior) |
| 2 Design system + MP Bay 3309 | PASS (Natalie CLEAR) |
| 3 Build from draft | PASS — replaced prior food-led look |
| 4 Harden | PASS — AA Call, no motion, visible without JS, no broken CSS |
| 5 Side-by-side vs lady-birds-site | PASS — local qa/ vs lady-birds-site @390/768/desktop |

## DIRECTORY risks

- Hours are DIRECTORY (door vinyl / public listings), not owner-confirmed permanent.
- No invented prices, menu board, reviews, or fake 4.9.
- Counter A-frame second phone quarantined from Call UI.
- Envelope ATTN: Owner only.

## Anti-clone

Diffed mentally vs `/workspace/ladybirds/index.html` and prior `/workspace/looks/mamas-gyros-grill/` foil-ticket HTML. New room, new class tree, door-led first screen.
