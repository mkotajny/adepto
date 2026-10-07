# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static, Polish-language website for Stowarzyszenie Adepto (an association supporting young basketball players of the GTK Gliwice academy). It is a customised copy of the commercial "Zirox" HTML template by ultraDevs — hence the `zirox-` prefix on every class and the BEM-style naming (`zirox-block__element--modifier`).

All user-facing copy is in Polish; keep new copy in Polish.

## Commands

There is no build step, package manager, linter or test suite. Pages are plain HTML and can be opened directly in a browser or served by any static file server from the repo root.

The two forms only work on the deployed site: they rely on Netlify Forms (`data-netlify="true"`). There is no `netlify.toml` — the repo root is published as-is.

## Architecture

### No shared layout — every page repeats the chrome

There is no templating or include mechanism. The six content pages (`index.html`, `about.html`, `team.html`, `services.html`, `for-sponsors.html`, `contact.html`) each contain a full verbatim copy of:

- the `<head>` stylesheet list,
- the preloader,
- the header — which itself holds the contact details and the navigation **twice**: once in the desktop top bar / `ud-main-menu`, once in the mobile side popup (`zirox-side-popup`, `#side-menu`),
- the footer,
- the vendor `<script>` list at the end of `<body>`.

Any change to navigation, phone/address, social links, footer or script/stylesheet lists must be applied to all six files, and within each file to both the desktop and the side-popup copy.

### The home page duplicates inner-page content

`index.html` is a long one-pager whose sections restate content that also lives on the dedicated pages: the services boxes and counters (`services.html`), the team cards (`team.html`), the sponsor information, bank/KRS details and PDF download links (`for-sponsors.html`). When that content changes, update both places.

`index.html` is the only page with `body.home-3` and the Slick hero slider; inner pages use a static `zirox-hero-section--single` hero with a `zirox-breadcrumb`.

### CSS: the compiled file is the source

`assets/css/style.css` (~9200 lines) is the compiled output of the template's SCSS. The SCSS sources were deleted from the repo, so `style.css` is edited by hand and is the source of truth; `style.css.map` points at `src/scss/*` files that no longer exist and is stale.

- The file is organised in numbered sections matching the table of contents in its header comment (`06/ Header`, `07/ Hero`, …). Modify existing template rules in place in their section.
- Net-new Adepto rules are appended at the end of the file under their own comments (`/* === Adepto: Footer Partners Section === */`, `/* Confirmation Page Styles */`).
- Many rules are scoped by a body variant class (`body.home-1`, `.home-2`, `.home-3`) or exist only for template sections this site does not use (blog, pricing, testimonials, portfolio, …). Check that a selector actually matches markup in the six pages before editing it.
- Section background images are set from CSS (`url("../img/...")`), and the hero slides use inline `style="background: url(...)"` in `index.html`, so replacing an image may mean touching CSS rather than an `<img>` tag.

### JavaScript

`assets/js/script.js` is a single jQuery IIFE that initialises every template feature by selector (Slick sliders, CounterUp on `.counter`, MetisMenu on `#side-menu`, side-popup toggling, Magnific Popup, scroll-to-top). Most initialisers target template sections that are absent here and are simply no-ops.

Third-party libraries are vendored under `assets/vendors/` and loaded with plain `<script>` tags in a fixed order (jQuery first, `script.js` last). Not every vendored library is loaded on every page (e.g. `jquery-mixitup` is in the repo but not referenced), so a section that needs a plugin also needs its `<script>`/`<link>` tag added on that page.

Scroll animations: `data-scroll-animation="true"` on `<body>` turns on WOW.js; animated elements carry `wow fadeIn*` classes plus `data-wow-duration`.

Icons are an icon font: `<i class="flaticon-…">`, defined in `assets/vendors/flaticon/flaticon_zirox.css`.

### Forms

- `register-to-adepto-form` in `index.html` and `contact-form` in `contact.html` are Netlify forms. The `name` attribute of the form and of each field is what appears in the Netlify submission, so renaming them changes the data the association receives.
- Both post to `/form-submission-confirmation.html`, a standalone page that deliberately does not include the shared header/footer or vendor scripts; its look comes from the `.form-confirmation-*` rules at the end of `style.css`. It uses root-absolute URLs (`/`), unlike the relative `assets/...` paths used everywhere else.

### Directories that are not part of the site

- `documentation/` is the template vendor's own documentation (English, with its own `assets/`). It is not linked from the site.
- `assets/img/` still contains many unused template images (`blog/`, `pricing/`, `testimonials/`, `portfolio/`, …) alongside the ones the site uses.

## Conventions

- HTML is indented with tabs, with `<!-- Section Name -->` / `<!-- Section Name End -->` comments around each block.
- History on `master` is a series of squash-merged pull requests (`subject (#N)`) against `github.com/mkotajny/adepto`.
