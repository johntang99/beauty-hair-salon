# 📝 Typography System Guide

## Overview
Complete typography hierarchy used across the Dr. Huang Clinic site, designed for optimal readability and visual hierarchy.

---

## 🎯 **Typography Hierarchy**

### **1. HERO SECTION (Homepage)**

#### **Main Title** (H1)
```tsx
className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
```
- **Mobile**: 3rem (48px) - `text-5xl`
- **Tablet**: 3.75rem (60px) - `md:text-6xl`
- **Desktop**: 4.5rem (72px) - `lg:text-7xl`
- **Weight**: Bold (700)
- **Color**: Gray-900 (almost black)
- **Line Height**: Tight (1.25)

**Purpose**: Grab attention, establish brand

#### **Tagline/Subtitle**
```tsx
className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium"
```
- **Mobile**: 1.5rem (24px) - `text-2xl`
- **Desktop**: 1.875rem (30px) - `md:text-3xl`
- **Weight**: Medium (500)
- **Color**: Gray-700 (dark gray)

**Purpose**: Supporting headline

#### **Description**
```tsx
className="text-lg md:text-xl text-gray-600 mb-10"
```
- **Mobile**: 1.125rem (18px) - `text-lg`
- **Desktop**: 1.25rem (20px) - `md:text-xl`
- **Weight**: Normal (400)
- **Color**: Gray-600 (medium gray)

**Purpose**: Explanatory text

#### **Small Badge**
```tsx
className="text-sm font-semibold"
```
- **All sizes**: 0.875rem (14px) - `text-sm`
- **Weight**: Semibold (600)
- **Color**: Varies (primary or secondary)

**Purpose**: Status indicators, labels

---

### **2. SECTION HEADERS (Throughout Site)**

#### **Major Section Title** (H2)
```tsx
className="text-4xl md:text-5xl font-bold mb-4"
```
- **Mobile**: 2.25rem (36px) - `text-4xl`
- **Desktop**: 3rem (48px) - `md:text-5xl`
- **Weight**: Bold (700)
- **Color**: Gray-900

**Examples**: "Patient Success Stories", "Conditions We Treat", "Our Modalities"

#### **Section Subtitle**
```tsx
className="text-xl text-gray-600 max-w-3xl mx-auto"
```
- **All sizes**: 1.25rem (20px) - `text-xl`
- **Weight**: Normal (400)
- **Color**: Gray-600

**Purpose**: Section description

#### **Section Badge/Label**
```tsx
className="text-sm font-semibold"
```
- **Size**: 0.875rem (14px) - `text-sm`
- **Weight**: Semibold (600)
- **Color**: Primary

**Examples**: "PATIENT SUCCESS STORIES", "LEARN & EXPLORE"

---

### **3. CARD TYPOGRAPHY**

#### **Card Title** (H3)
```tsx
className="text-base font-semibold text-gray-900"  // For small cards
className="text-lg font-bold text-gray-900"        // For medium cards
className="text-xl font-bold text-gray-900"        // For large cards
```
- **Small cards**: 1rem (16px) - `text-base`
- **Medium cards**: 1.125rem (18px) - `text-lg`
- **Large cards**: 1.25rem (20px) - `text-xl`
- **Weight**: Semibold (600) or Bold (700)

**Examples**: Condition names, modality titles

#### **Card Tagline**
```tsx
className="text-xs text-gray-600"
```
- **Size**: 0.75rem (12px) - `text-xs`
- **Weight**: Normal (400)
- **Color**: Gray-600

**Purpose**: Brief descriptor under title

#### **Card Description**
```tsx
className="text-sm text-[color-mix(in_srgb,var(--text)_70%,transparent)] leading-relaxed"
```
- **Size**: 0.875rem (14px) - `text-sm`
- **Weight**: Normal (400)
- **Color**: 70% opacity text
- **Line Height**: Relaxed (1.625)

**Purpose**: Main card content

#### **Card Chips/Tags**
```tsx
className="text-xs"
```
- **Size**: 0.75rem (12px) - `text-xs`
- **Weight**: Normal (400) or Medium (500)

**Purpose**: Categories, symptoms, tags

---

### **4. STATS/NUMBERS SECTION**

#### **Stat Number**
```tsx
className="text-4xl md:text-5xl font-bold text-white mb-2"
```
- **Mobile**: 2.25rem (36px) - `text-4xl`
- **Desktop**: 3rem (48px) - `md:text-5xl`
- **Weight**: Bold (700)
- **Color**: White

**Examples**: "15+", "1000+", "95%", "8"

#### **Stat Label**
```tsx
className="text-sm md:text-base text-white/90 font-medium"
```
- **Mobile**: 0.875rem (14px) - `text-sm`
- **Desktop**: 1rem (16px) - `md:text-base`
- **Weight**: Medium (500)
- **Color**: White with 90% opacity

**Examples**: "Years Experience", "Patients Helped"

---

### **5. TESTIMONIALS**

#### **Quote Text**
```tsx
className="text-gray-700 italic mb-6 leading-relaxed text-lg"
```
- **Size**: 1.125rem (18px) - `text-lg`
- **Weight**: Normal (400)
- **Style**: Italic
- **Line Height**: Relaxed (1.625)

**Purpose**: Patient quotes (larger for emphasis)

#### **Patient Name**
```tsx
className="font-semibold text-gray-900"
```
- **Size**: 1rem (16px) - `text-base` (default)
- **Weight**: Semibold (600)

#### **Condition Label**
```tsx
className="text-sm text-[var(--primary)]"
```
- **Size**: 0.875rem (14px) - `text-sm`
- **Weight**: Normal (400)
- **Color**: Primary (for emphasis)

---

### **6. CTA SECTIONS (Bottom of pages)**

#### **CTA Heading**
```tsx
className="text-3xl md:text-4xl font-bold mb-6 text-white"
```
- **Mobile**: 1.875rem (30px) - `text-3xl`
- **Desktop**: 2.25rem (36px) - `md:text-4xl`
- **Weight**: Bold (700)
- **Color**: White

**Example**: "Ready to Begin Your Healing Journey?"

#### **CTA Description**
```tsx
className="!text-white/95 text-lg mb-8 leading-relaxed"
```
- **Size**: 1.125rem (18px) - `text-lg`
- **Weight**: Normal (400)
- **Color**: White with 95% opacity
- **Line Height**: Relaxed (1.625)

#### **CTA Buttons**
```tsx
className="font-bold text-lg"
```
- **Size**: 1.125rem (18px) - `text-lg`
- **Weight**: Bold (700)

#### **Contact Info Footer**
```tsx
className="text-sm text-white/80"
```
- **Size**: 0.875rem (14px) - `text-sm`
- **Color**: White with 80% opacity

---

### **7. NAVIGATION (Header)**

#### **Site Name/Logo**
```tsx
className="text-2xl font-bold text-[var(--brand-2)]"
```
- **Size**: 1.5rem (24px) - `text-2xl`
- **Weight**: Bold (700)
- **Color**: Primary dark

#### **Nav Links**
```tsx
className="text-[color-mix(in_srgb,var(--text)_72%,transparent)] font-medium"
```
- **Size**: 1rem (16px) - `text-base` (default)
- **Weight**: Medium (500)
- **Color**: 72% opacity text

---

### **8. FORMS & INPUTS**

#### **Input Labels**
```tsx
className="text-sm font-semibold text-gray-700"
```
- **Size**: 0.875rem (14px) - `text-sm`
- **Weight**: Semibold (600)

#### **Helper Text**
```tsx
className="text-xs text-gray-500"
```
- **Size**: 0.75rem (12px) - `text-xs`
- **Weight**: Normal (400)

---

### **9. BLOG/ARTICLE CARDS**

#### **Article Title**
```tsx
className="text-xl font-bold text-gray-900 mb-3"
```
- **Size**: 1.25rem (20px) - `text-xl`
- **Weight**: Bold (700)

#### **Article Excerpt**
```tsx
className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed"
```
- **Size**: 0.875rem (14px) - `text-sm`
- **Weight**: Normal (400)
- **Line Clamp**: 3 lines max
- **Line Height**: Relaxed

#### **Meta Info** (Author, date, read time)
```tsx
className="text-xs text-gray-500"
```
- **Size**: 0.75rem (12px) - `text-xs`

---

## 📏 **Tailwind Text Size Reference**

| Class | Size | Pixels | Usage |
|-------|------|--------|-------|
| `text-xs` | 0.75rem | 12px | Tags, meta info, helper text |
| `text-sm` | 0.875rem | 14px | Labels, small text, card descriptions |
| `text-base` | 1rem | 16px | Body text, nav links, default |
| `text-lg` | 1.125rem | 18px | Emphasized text, quotes, CTA descriptions |
| `text-xl` | 1.25rem | 20px | Card titles, section subtitles |
| `text-2xl` | 1.5rem | 24px | Logo, small headings |
| `text-3xl` | 1.875rem | 30px | Section titles (mobile) |
| `text-4xl` | 2.25rem | 36px | Section titles, CTA headings |
| `text-5xl` | 3rem | 48px | Hero title (mobile), major headings |
| `text-6xl` | 3.75rem | 60px | Hero title (tablet) |
| `text-7xl` | 4.5rem | 72px | Hero title (desktop) |

---

## 🎨 **Font Weight Reference**

| Weight | Value | Usage |
|--------|-------|-------|
| `font-normal` | 400 | Body text, descriptions |
| `font-medium` | 500 | Nav links, subtle emphasis |
| `font-semibold` | 600 | Card titles, labels, badges |
| `font-bold` | 700 | Headings, important titles, buttons |
| `font-extrabold` | 800 | Special emphasis (rarely used) |

---

## 📐 **Line Height Reference**

| Class | Value | Usage |
|-------|-------|-------|
| `leading-tight` | 1.25 | Large headings, hero titles |
| `leading-normal` | 1.5 | Default (not specified) |
| `leading-relaxed` | 1.625 | Body text, descriptions, quotes |
| `leading-loose` | 2 | Special cases |

---

## 🎯 **Typography Hierarchy Strategy**

### **Information Hierarchy** (Top to Bottom):

```
1. Hero Title (text-7xl, bold)
   ↓
2. Hero Tagline (text-3xl, medium)
   ↓
3. Hero Description (text-xl, normal)
   ↓
4. Section Titles (text-5xl, bold)
   ↓
5. Section Subtitles (text-xl, normal)
   ↓
6. Card Titles (text-base to text-xl, semibold/bold)
   ↓
7. Card Descriptions (text-sm, normal)
   ↓
8. Meta Info/Tags (text-xs, normal)
```

### **Visual Weight Distribution**:

- **72px** (text-7xl) - Hero only (1 per page)
- **48-60px** (text-5xl/6xl) - Section titles (3-4 per page)
- **30-36px** (text-3xl/4xl) - Subsections, CTA titles
- **20-24px** (text-xl/2xl) - Card titles, emphasis
- **16-18px** (text-base/lg) - Body text, quotes
- **14px** (text-sm) - Descriptions, secondary text
- **12px** (text-xs) - Tags, meta info, labels

---

## 📱 **Responsive Typography Pattern**

### **Large Headings** (Hero, Page Titles):
```tsx
// Mobile → Tablet → Desktop
text-5xl md:text-6xl lg:text-7xl
text-4xl md:text-5xl lg:text-6xl
text-3xl md:text-4xl md:text-5xl
```

### **Medium Headings** (Sections):
```tsx
// Most sections use fixed size or:
text-3xl md:text-4xl
text-2xl md:text-3xl
```

### **Body Text** (Usually Fixed):
```tsx
// No breakpoint needed:
text-base  (16px)
text-sm    (14px)
text-xs    (12px)
```

---

## 🎨 **Typography by Section Type**

### **HERO SECTIONS**

| Element | Mobile | Desktop | Weight | Color |
|---------|--------|---------|--------|-------|
| Title | text-5xl (48px) | lg:text-7xl (72px) | Bold | Gray-900 |
| Tagline | text-2xl (24px) | md:text-3xl (30px) | Medium | Gray-700 |
| Description | text-lg (18px) | md:text-xl (20px) | Normal | Gray-600 |
| Badge | text-sm (14px) | text-sm (14px) | Semibold | Primary |
| Button | text-lg (18px) | text-lg (18px) | Semibold | White |

### **CONTENT SECTIONS**

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Section Title | text-4xl md:text-5xl (36-48px) | Bold | Gray-900 |
| Section Subtitle | text-xl (20px) | Normal | Gray-600 |
| Section Label | text-sm (14px) | Semibold | Primary |

### **CARDS (Standard)**

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Card Title | text-base (16px) | Semibold | Gray-900 |
| Card Subtitle | text-xs (12px) | Normal | Gray-600 |
| Card Description | text-sm (14px) | Normal | Gray-700 (70%) |
| Card Tags | text-xs (12px) | Normal | Gray-600 |

### **CARDS (Large/Featured)**

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Card Title | text-lg or text-xl | Bold | Gray-900 |
| Card Subtitle | text-sm (14px) | Normal | Gray-600 |
| Card Description | text-sm (14px) | Normal | Gray-700 |

### **STATS BAR**

| Element | Mobile | Desktop | Weight | Color |
|---------|--------|---------|--------|-------|
| Number | text-4xl (36px) | md:text-5xl (48px) | Bold | White |
| Label | text-sm (14px) | md:text-base (16px) | Medium | White/90 |

### **TESTIMONIALS**

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Quote | text-lg (18px) | Normal, Italic | Gray-700 |
| Name | text-base (16px) | Semibold | Gray-900 |
| Condition | text-sm (14px) | Normal | Primary |

### **CTA SECTIONS**

| Element | Mobile | Desktop | Weight | Color |
|---------|--------|---------|--------|-------|
| Heading | text-3xl (30px) | md:text-4xl (36px) | Bold | White |
| Description | text-lg (18px) | text-lg (18px) | Normal | White/95 |
| Button Text | text-lg (18px) | text-lg (18px) | Bold | Varies |
| Contact Info | text-sm (14px) | text-sm (14px) | Normal | White/80 |

---

## 📖 **Typography Best Practices Used**

### **1. Consistent Scale**
- Based on Tailwind's type scale (modular scale)
- Each step is ~1.25x larger
- Creates visual harmony

### **2. Responsive Sizing**
- Larger text reduces on mobile
- Maintains readability on all screens
- Uses `md:` and `lg:` breakpoints

### **3. Weight Hierarchy**
```
Bold (700)      → Main headings, important
Semibold (600)  → Card titles, labels
Medium (500)    → Nav links, emphasis
Normal (400)    → Body text, descriptions
```

### **4. Color Hierarchy**
```
Gray-900 (#0f172a)  → Headings (darkest, most emphasis)
Gray-700 (#374151)  → Subheadings
Gray-600 (#4b5563)  → Body text
Gray-500 (#6b7280)  → Muted text
Primary/Secondary  → Accent text, links
```

### **5. Line Height Strategy**
```
leading-tight (1.25)    → Large headings (prevent excessive spacing)
leading-normal (1.5)    → Default
leading-relaxed (1.625) → Body text, descriptions (easier reading)
```

---

## 🔤 **Font Family**

**Defined in** `globals.css` (Line 112):

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
```

**Strategy**: 
- Use system fonts (fast, native look)
- Fallback chain for compatibility
- Professional, readable

**Applied globally** via:
```css
body {
  font-family: var(--font-sans);
}
```

---

## 📊 **Typography Specifications by Component**

### **HeroSection**:
```
Title:       48-72px, Bold, Gray-900, Tight
Tagline:     24-30px, Medium, Gray-700, Normal
Description: 18-20px, Normal, Gray-600, Normal
Badge:       14px, Semibold, Primary, Normal
CTA:         18px, Semibold, White, Normal
```

### **SectionHeader**:
```
Title:       36-48px, Bold, Gray-900, Normal
Subtitle:    20px, Normal, Gray-600, Normal
Label:       14px, Semibold, Primary, Normal
```

### **ContentCard**:
```
Title:       16-18px, Semibold, Gray-900, Normal
Tagline:     12px, Normal, Gray-600, Normal
Description: 14px, Normal, Gray-700/70%, Relaxed
Tags:        12px, Normal, Gray-600, Normal
```

### **StatsDisplay**:
```
Number:      36-48px, Bold, White, Normal
Label:       14-16px, Medium, White/90, Normal
```

### **Testimonial**:
```
Quote:       18px, Normal Italic, Gray-700, Relaxed
Name:        16px, Semibold, Gray-900, Normal
Condition:   14px, Normal, Primary, Normal
```

---

## 💡 **Design Rationale**

### **Why These Sizes?**

1. **Hero (48-72px)**: 
   - Grab attention immediately
   - Establish hierarchy
   - Mobile-friendly (reduces on small screens)

2. **Sections (36-48px)**:
   - Clear visual breaks
   - Scannable page structure
   - Professional weight

3. **Cards (16-18px titles)**:
   - Readable in grids
   - Not overwhelming
   - Balanced with descriptions

4. **Body (14-16px)**:
   - Optimal reading size
   - Industry standard
   - Comfortable for long text

5. **Meta (12px)**:
   - Secondary information
   - Doesn't compete with content
   - Still readable

---

## 🎯 **Quick Reference: Common Patterns**

### **Pattern 1: Page Header**
```tsx
<section>
  <span className="text-sm font-semibold">SECTION LABEL</span>
  <h1 className="text-4xl md:text-5xl font-bold">Section Title</h1>
  <p className="text-xl text-gray-600">Subtitle</p>
</section>
```

### **Pattern 2: Content Card**
```tsx
<div className="card">
  <span className="text-xs">Category</span>
  <h3 className="text-lg font-bold">Card Title</h3>
  <p className="text-sm text-gray-600">Description...</p>
</div>
```

### **Pattern 3: CTA Section**
```tsx
<section>
  <h2 className="text-3xl md:text-4xl font-bold text-white">CTA Title</h2>
  <p className="text-lg text-white/95">Description...</p>
  <button className="text-lg font-bold">Button Text</button>
</section>
```

---

## 📐 **Typography Variables for BAAM Platform**

### **Recommended CSS Variables to Add:**

```css
/* Typography Scale */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## 🎊 **Summary**

**Sizing Strategy:**
- **Hero**: 48-72px (grab attention)
- **Sections**: 36-48px (clear hierarchy)
- **Cards**: 16-20px titles, 14px body (readable in grids)
- **Meta**: 12px (secondary info)

**Weight Strategy:**
- **Bold (700)**: Headings, CTAs
- **Semibold (600)**: Card titles, labels
- **Medium (500)**: Nav, subtle emphasis
- **Normal (400)**: Body text

**Responsive Strategy:**
- Large text scales down on mobile
- Body text stays consistent
- Always readable on all devices

---

**This typography system is proven, accessible, and professional!** ✅

**Perfect for BAAM Studio to use across all client sites!** 📝✨