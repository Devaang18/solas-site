# Responsive Design Guide for Solas Website

## Overview
This guide ensures consistent user experience across all devices: phones, tablets, laptops, and desktops.

## Device Breakpoints

### Tailwind CSS Breakpoints
- **xs**: < 640px (Mobile phones)
- **sm**: 640px+ (Large phones)
- **md**: 768px+ (Tablets)
- **lg**: 1024px+ (Laptops)
- **xl**: 1280px+ (Desktops)
- **2xl**: 1536px+ (Large desktops)

### Device Categories
- **Mobile**: < 768px (phones)
- **Tablet**: 768px - 1024px (iPads, Android tablets)
- **Desktop**: 1024px+ (laptops, desktops)

## Responsive Utilities

### Text Sizes
```css
.text-responsive-xs    /* text-xs sm:text-sm */
.text-responsive-sm    /* text-sm sm:text-base */
.text-responsive-base  /* text-base sm:text-lg */
.text-responsive-lg    /* text-lg sm:text-xl lg:text-2xl */
.text-responsive-xl    /* text-xl sm:text-2xl lg:text-3xl xl:text-4xl */
.text-responsive-2xl   /* text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl */
```

### Spacing
```css
.section-padding       /* py-8 sm:py-12 lg:py-16 xl:py-20 */
.content-padding       /* px-4 sm:px-6 lg:px-8 */
```

### Layouts
```css
.container-responsive  /* w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */
.grid-responsive       /* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */
.grid-responsive-2     /* grid grid-cols-1 lg:grid-cols-2 */
.flex-responsive       /* flex flex-col sm:flex-row */
```

### Visibility
```css
.hide-mobile          /* hidden sm:block */
.hide-desktop         /* block sm:hidden */
.hide-tablet          /* block lg:hidden */
.show-tablet          /* hidden lg:block */
```

## Component Guidelines

### Header
- **Mobile**: Smaller logo, hamburger menu, reduced spacing
- **Tablet**: Medium logo, navigation visible
- **Desktop**: Full logo, full navigation, enhanced effects

### Page Tracker
- **Mobile**: Smaller dots, reduced spacing, closer to edge
- **Tablet/Desktop**: Standard size and spacing

### Sections
- **Mobile**: Single column, reduced padding, larger touch targets
- **Tablet**: Two columns where appropriate, medium padding
- **Desktop**: Multi-column layouts, full padding, hover effects

### Typography
- **Mobile**: Smaller base sizes, increased line height
- **Tablet**: Medium sizes, balanced spacing
- **Desktop**: Larger sizes, optimal reading experience

## Touch-Friendly Design

### Minimum Touch Targets
- **Buttons**: 44px × 44px minimum
- **Links**: Adequate spacing between clickable elements
- **Form inputs**: Large enough for finger interaction

### Gesture Support
- **Scroll**: Smooth scrolling with momentum
- **Touch**: Responsive touch feedback
- **Swipe**: Natural swipe gestures where appropriate

## Performance Considerations

### Image Optimization
- **Responsive images**: Use `sizes` attribute
- **Lazy loading**: Images load as needed
- **Format optimization**: WebP when supported

### Animation Performance
- **Mobile**: Reduced animations for better performance
- **Desktop**: Full animations and effects
- **GPU acceleration**: Use `transform` and `opacity` for smooth animations

## Testing Checklist

### Device Testing
- [ ] iPhone (various sizes)
- [ ] Android phones (various sizes)
- [ ] iPad (portrait/landscape)
- [ ] Android tablets (portrait/landscape)
- [ ] Laptop screens (13", 15", 17")
- [ ] Desktop monitors (1080p, 1440p, 4K)

### Browser Testing
- [ ] Chrome (mobile/desktop)
- [ ] Safari (mobile/desktop)
- [ ] Firefox (mobile/desktop)
- [ ] Edge (desktop)

### Orientation Testing
- [ ] Portrait mode
- [ ] Landscape mode
- [ ] Orientation changes

## Implementation Examples

### Responsive Component
```tsx
import { useResponsive } from '@/hooks/useResponsive';

export default function MyComponent() {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return (
    <div className={`container-responsive section-padding ${
      isMobile ? 'text-responsive-sm' : 
      isTablet ? 'text-responsive-base' : 
      'text-responsive-lg'
    }`}>
      {/* Content */}
    </div>
  );
}
```

### Responsive Grid
```tsx
<div className="grid-responsive">
  {items.map(item => (
    <div key={item.id} className="content-padding">
      {/* Item content */}
    </div>
  ))}
</div>
```

## Best Practices

1. **Mobile First**: Design for mobile, then enhance for larger screens
2. **Progressive Enhancement**: Start with basic functionality, add features for larger screens
3. **Consistent Spacing**: Use responsive utilities for consistent spacing
4. **Touch-Friendly**: Ensure all interactive elements are easily tappable
5. **Performance**: Optimize for mobile performance first
6. **Testing**: Test on real devices, not just browser dev tools
7. **Accessibility**: Maintain accessibility across all screen sizes

## Common Issues & Solutions

### Horizontal Scroll
- **Cause**: Fixed widths or overflow
- **Solution**: Use responsive utilities and `overflow-x: hidden`

### Text Too Small
- **Cause**: Not using responsive text sizes
- **Solution**: Use `text-responsive-*` classes

### Touch Targets Too Small
- **Cause**: Not following 44px minimum
- **Solution**: Add `min-h-[44px] min-w-[44px]` to interactive elements

### Layout Breaks
- **Cause**: Hard-coded dimensions
- **Solution**: Use flexible layouts with responsive utilities

## Monitoring & Analytics

### Key Metrics to Track
- **Device types**: Mobile vs tablet vs desktop usage
- **Screen resolutions**: Most common screen sizes
- **Performance**: Page load times by device
- **User behavior**: How users interact on different devices

### Tools
- **Google Analytics**: Device and browser data
- **Core Web Vitals**: Performance metrics
- **Real User Monitoring**: Actual user experience data

