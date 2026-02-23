# Brand Identity & Design System: EVET Concept

This document breaks down the design language, color palette, and UI/UX patterns derived from the reference image. Feed this prompt to an LLM or use it as a style guide for development.

## 1. Project Overview
*   **Project Name:** EVET (Concept)
*   **Brand Vibe:** Bold, Unapologetic, Playful, Premium, Modernish, "Agency-Style".
*   **Core Aesthetic:** Dark Mode Maximalism with Acid Pop Accents.

## 2. Color Palette
The design relies on a high-contrast "Dark Mode" theme pierced by a single, vibrant accent color.

| Color Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Deep Black** | `#050505` | Main page background, void space. |
| **Crisp White** | `#FFFFFF` | Headings, Logo, Navigation links. |
| **Neutral Gray** | `#9CA3AF` | Body paragraphs, descriptions, footnotes. |
| **Acid Yellow** | `#FCEE48` | Call-to-action backgrounds, scribbles, highlights, stickers/icons. |
| **Jet Black** | `#000000` | Text *inside* yellow accent areas (e.g., logos in footer, "ME NU"). |

## 3. Typography
A mix of geometric stability and organic chaos.

*   **Primary Typeface (Headings)**
    *   **Font:** Modern Geometric Sans-Serif (e.g., *Inter*, *DM Sans*, or *General Sans*).
    *   **Style:** Bold / Extra Bold.
    *   **Usage:** "Unlimited", "ideas.", "We proudly work with...".
    *   **Characteristics:** Tight letter-spacing (kerning) for large headers to create a solid block feel.

*   **Secondary Typeface (Web Copy)**
    *   **Font:** Clean Sans-Serif (e.g., *Roboto* or *Inter*).
    *   **Style:** Regular / Light.
    *   **Usage:** Paragraph text ("We are a forward-thinking team...").

*   **Accent Typeface (Script)**
    *   **Font:** Handwritten Marker / Brush Script (e.g., *Permanent Marker*, *Caveat*, or use an SVG).
    *   **Style:** Italicized, organic, messy.
    *   **Usage:** Emphasis words (e.g., line 2: "ambitious").
    *   **Effect:** Often paired with a highlighter stroke or underline in Acid Yellow.

## 4. UI & Layout Principles

### Grid & Spacing
*   **Massive Whitespace:** Large top and bottom padding. Elements are given room to breathe.
*   **Central Composition:** Hero content is strictly centered or balanced with a heavy left-align anchor.

### Shape Language
*   **Squircle / Rounded Cards:** The bottom section uses a fully rounded rectangle (border-radius: ~24px or 32px) which contrasts with the sharp black background.
*   **Circular Buttons:** The "ME NU" button is a perfect circle, sticky or floating, breaking the grid.

### Graphic Elements
*   **Sticker Aesthetics:** Use of simple line-icons (like the smiley face) that look like stickers.
*   **Hand-drawn Elements:** Underlines, scratches, or messy script overlaying clean text.

## 5. Component Breakdown

### Navigation Bar
*   **Minimalist:** Just the Logo ("EVET" - Uppercase, Sans, tracked out) on the left.
*   **Cart & Menu:** "Cart (0)" text followed by a distinctive **Yellow Circular Menu Button** with stacked text "ME NU".

### Hero Section
*   **Headline:** Massive font size (e.g., 6rem+). Mixed media: Standard Bold Sans text mixed with a handwritten script word ("ambitious") that is slightly tilted (~-5deg).
*   **Sub-headline:** Small width container (max-width: 400px), left-aligned or grid-aligned to the side of the main text.
*   **Micro-interactions:** A "View on Designer" link with a simple underline. A floating "0" or decorative numbers.

### Trusted By / Footer Card
*   **Inverted Contrast:** Bright Yellow background with Black text.
*   **Layout:** Rounded container. Headline top-centered.
*   **Logos:** Monochrome (All Black) logos arranged in a row (Rise, Greenish, Cloud, etc.).

## 6. CSS / Tailwind Implementation Notes
*   **Background:** `bg-[#050505]`
*   **Text Colors:** `text-white`, `text-gray-400`, `text-black` (on yellow).
*   **Accent Utility:** `bg-[#FCEE48]`
*   **Font Utilities:** `font-sans`, `font-script` (custom class).
*   **Animation:** Likely subtle parallax on scroll, hover effects on the "ME NU" circle (scale up), and marquee effect for the partner logos.
