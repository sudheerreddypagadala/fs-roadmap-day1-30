# Accessibility notes — Semantic demo

## What I added
- `lang="en"` attribute on `<html>` for language semantics.
- Proper landmarks: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`.
- `aria-label` on navigation for screen readers.
- `aria-labelledby` on sections for stronger relationships between headings and content.
- Descriptive image `alt` text for the screenshot.
- Form `label` elements associated with inputs using `for`/`id`.
- Simple progressive enhancement for year display (JS not required for basic content).

## Manual checks performed
- Verified keyboard navigation (Tab order reaches all controls).
- Verified images have descriptive `alt`.
- Verified form fields have labels.
- Tested `document.title` and meta description present.

## Potential improvements
- Add color-contrast check (WCAG 2.1) and aria-live regions for dynamic updates.
