# Croffee - Export Guide for Portability

This guide explains how to make this Figma Make project work in other development environments like VS Code, GitHub Codespaces, or with GitHub Copilot.

## Current State

The project currently uses Figma-specific asset imports:
```tsx
import imgProduct from "figma:asset/91c02f8b27af991163ce628a09396102ce826e16.png";
```

These only work in Figma Make and won't work in other environments.

## Steps to Make Portable

### 1. Export Images from Figma

You need to export all images from your Figma design:

**Product Images:**
- Costa Rica Coffee (ground)
- Colombia Coffee (ground)
- Brasil Coffee (ground)
- Ethiopia Coffee (ground)
- Costa Rica Crods (pods)
- Colombia Crods (pods)
- Brasil Crods (pods)
- Ethiopia Crods (pods)

**Other Assets:**
- Hero background image
- Coffee bean icon
- Any other decorative images

### 2. Place Images in Assets Folder

Save the exported images to:
```
/public/assets/images/products/
  - costa-rica-ground.png
  - colombia-ground.png
  - brasil-ground.png
  - ethiopia-ground.png
  - costa-rica-crods.png
  - colombia-crods.png
  - brasil-crods.png
  - ethiopia-crods.png
```

### 3. Update Import Statements

Replace all Figma asset imports in your components:

**Before:**
```tsx
import imgCostRica from "figma:asset/91c02f8b27af991163ce628a09396102ce826e16.png";
```

**After:**
```tsx
import imgCostRica from "/assets/images/products/costa-rica-ground.png";
```

### 4. Files That Need Updates

The following component files use Figma assets and will need their imports updated:

- `/components/GroundAndWholeGrainPage.tsx`
- `/components/CrodsPage.tsx`
- `/components/BestSellersPage.tsx`
- `/components/ProductDetailGroundCoffee.tsx`
- `/components/ProductDetailCrods.tsx`
- `/components/HomePage.tsx`
- All files in `/imports/` directory

### 5. SVG Files

SVG paths are imported from files like:
```tsx
import svgPaths from "../imports/svg-zrvi14mdfr";
```

These SVG import files should continue to work as-is since they're already in the project.

## Alternative: Use Unsplash for Testing

If you don't have access to the original Figma assets, you can temporarily use Unsplash images for development:

```tsx
// Temporary placeholder images
const productImages = {
  costaRica: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
  colombia: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400",
  // ... etc
};
```

## Testing in Different Environments

### VS Code
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:5173`

### GitHub Codespaces
1. Open the repository in Codespaces
2. Same commands as VS Code
3. Codespaces will automatically forward the port

### With GitHub Copilot
Once images are in `/public/assets/`, Copilot can:
- Reference the correct image paths
- Suggest updates to components
- Help maintain consistent asset usage

## Notes

- All SVG icons embedded in components will continue to work
- The ImageWithFallback component will still work with regular image paths
- Local storage for cart data will work in any environment
- No backend/API dependencies to worry about
