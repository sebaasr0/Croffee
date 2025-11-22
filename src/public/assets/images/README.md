# Assets Folder

This folder contains all the images and assets used in the Croffee e-commerce application.

## Folder Structure

```
/public/assets/
  /images/
    /products/       - Product images (coffee bags, pods)
    /icons/          - Icon files and SVGs
    /hero/           - Hero section images
```

## Image List

### Products
- costa-rica-coffee.png
- colombia-coffee.png
- brasil-coffee.png
- ethiopia-coffee.png
- costa-rica-crods.png
- colombia-crods.png
- brasil-crods.png
- ethiopia-crods.png

### Icons
- coffee-bean-icon.png
- shopping-cart-icon.png

### Hero
- hero-background.png

## For Portability

When moving this project to another environment (VS Code, GitHub, etc.):

1. Export all images from Figma
2. Place them in the appropriate folders above
3. Update the import statements in the components to use these paths instead of `figma:asset/...`

Example:
```tsx
// Instead of:
import imgProduct from "figma:asset/91c02f8b27af991163ce628a09396102ce826e16.png";

// Use:
import imgProduct from "/assets/images/products/costa-rica-coffee.png";
```
