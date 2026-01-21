# Icon System Documentation

## Overview
This project now uses a standardized icon system with local SVG icons stored in `/public/icons/`. All cards across the site follow a consistent left-aligned icon layout using the `IconBadge` component.

## Components Created

### 1. Icon Component (`components/ui/Icon.tsx`)
- **Purpose**: Renders SVG icons from `/public/icons/`
- **Props**:
  - `name`: Icon file name without extension (e.g., "acupuncture")
  - `size`: Icon size in pixels (default: 20)
  - `variant`: "solid" | "outline" (optional)
  - `className`: Additional CSS classes
- **Usage**: 
```tsx
<Icon name="acupuncture" size={24} />
```

### 2. IconBadge Component (`components/ui/IconBadge.tsx`)
- **Purpose**: Wraps Icon in a styled badge container
- **Props**:
  - `iconName`: Icon name matching SVG file
  - `size`: Icon size (default: 24)
  - `className`: Additional CSS classes
- **Styling**:
  - Background: `bg-[color-mix(in_srgb,var(--brand)_10%,transparent)]`
  - Border: `border-[color-mix(in_srgb,var(--brand)_20%,transparent)]`
  - Text color: `text-[var(--brand)]`
  - Rounded corners with shadow
- **Usage**:
```tsx
<IconBadge iconName="acupuncture" size={22} />
```

## SVG Icons Created

All icons are in `/public/icons/` with consistent styling:
- **Stroke-based**: `stroke="currentColor"`
- **No fill**: `fill="none"`
- **Stroke width**: `stroke-width="2"`
- **ViewBox**: `24x24`

### Available Icons:
1. `acupuncture.svg` - Acupuncture treatment
2. `herbs.svg` - Herbal medicine
3. `cupping.svg` - Cupping therapy
4. `moxibustion.svg` - Moxibustion therapy
5. `tui-na.svg` - Massage therapy
6. `gua-sha.svg` - Scraping therapy
7. `heart.svg` - Heart/wellness
8. `leaf.svg` - Natural/herbal
9. `spark.svg` - Energy/vitality
10. `moon.svg` - Sleep/rest
11. `stomach.svg` - Digestive health
12. `brain.svg` - Mental health
13. `shield.svg` - Immune system
14. `zap.svg` - Energy/pain
15. `wind.svg` - Breath/allergies
16. `activity.svg` - Activity/movement
17. `baby.svg` - Fertility/pregnancy
18. `flower.svg` - Women's health

## Data Models Updated

### Modalities (`lib/modalities.ts`)
Each modality now includes an `icon` field:
```typescript
{
  id: 'acupuncture',
  name: 'Acupuncture',
  icon: 'acupuncture', // Matches /public/icons/acupuncture.svg
  // ... other fields
}
```

### Conditions (`lib/conditions.ts`)
Each condition now includes an `icon` field:
```typescript
{
  id: 'chronic-pain',
  name: 'Chronic Pain',
  icon: 'activity', // Matches /public/icons/activity.svg
  // ... other fields
}
```

## Card Layout Standard

All cards across the site now follow this layout:

```tsx
<div className="card-container">
  <div className="flex gap-4 items-start">
    {/* Left: Icon Badge */}
    <IconBadge iconName={item.icon} size={22} className="shrink-0" />
    
    {/* Right: Content */}
    <div className="flex-1 min-w-0">
      <h3 className="text-base font-semibold">{item.title}</h3>
      <p className="text-sm text-[color-mix(in_srgb,var(--text)_70%,transparent)]">
        {item.description}
      </p>
    </div>
  </div>
</div>
```

## Pages Updated

### 1. Homepage (`app/page.tsx`)

#### How Chinese Medicine Works Section
- 3 cards with step numbers and icons
- Icons: spark, leaf, heart
- Layout: Step badge + Icon badge on left, content on right

#### Conditions We Treat Section
- 8 featured condition cards
- Icons from conditions data model
- Layout: Icon badge on left, title + category + description on right

#### Our Modalities Section
- 6 featured modality cards
- Icons from modalities data model
- Layout: Icon badge on left, title + tagline + description on right

## Visual Styling

### Icon Badge Styling
```css
background: bg-[color-mix(in_srgb,var(--brand)_10%,transparent)]
border: border-[color-mix(in_srgb,var(--brand)_20%,transparent)]
text: text-[var(--brand)]
shadow: shadow-sm
border-radius: rounded-xl
```

### Card Styling
```css
title: text-base font-semibold
description: text-sm text-[color-mix(in_srgb,var(--text)_70%,transparent)]
hover: hover:border-[color-mix(in_srgb,var(--brand)_50%,transparent)]
```

## Benefits

✅ **Consistent Design**: All cards use the same left-aligned icon layout
✅ **Downloadable Icons**: SVG files can be easily downloaded and edited
✅ **Reusable Components**: IconBadge can be used across any template
✅ **Brand Colors**: Uses CSS custom properties for theme consistency
✅ **Maintainable**: Icons stored in one place, easy to update
✅ **Accessible**: Clean, semantic HTML structure
✅ **Build Success**: All components compile correctly

## Adding New Icons

1. Create SVG file in `/public/icons/` following the standard format:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Your paths here -->
</svg>
```

2. Add icon reference to data model:
```typescript
{
  // ... other fields
  icon: 'new-icon-name',
}
```

3. Use in component:
```tsx
<IconBadge iconName="new-icon-name" size={24} />
```

## Migration Complete

All homepage sections now use the standardized icon system:
- ✅ How Chinese Medicine Works
- ✅ Conditions We Treat  
- ✅ Our Modalities
- ✅ All icons on left side
- ✅ Consistent styling
- ✅ Build passing

---

**Last Updated**: 2026-01-18
**Status**: Complete ✅
