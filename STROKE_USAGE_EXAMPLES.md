# 🎨 Stroke Width Control in Kruti Icon Library

## ✅ **Problem Solved: No More Flattened Strokes!**

The icons now properly preserve their original stroke attributes and allow you to control stroke width through props.

## 🚀 **Basic Usage with Stroke Control**

```tsx
import { IconArrowLeft, IconMagnifyingGlass2, IconSettingsGear1 } from 'kruti-icon-library';

function App() {
  return (
    <div>
      {/* Default stroke width (2px) - preserves original SVG stroke */}
      <IconArrowLeft size={24} />
      
      {/* Custom stroke width */}
      <IconArrowLeft size={24} strokeWidth={1} />
      <IconArrowLeft size={24} strokeWidth={3} />
      <IconArrowLeft size={24} strokeWidth={4} />
      
      {/* Different colors with stroke control */}
      <IconArrowLeft size={24} color="#ff0000" strokeWidth={2} />
      <IconArrowLeft size={24} color="#00ff00" strokeWidth={1} />
    </div>
  );
}
```

## 🎯 **Stroke Width Examples**

### **Thin Strokes (1px)**
```tsx
<IconArrowLeft size={24} strokeWidth={1} />
<IconMagnifyingGlass2 size={32} strokeWidth={1} />
<IconSettingsGear1 size={48} strokeWidth={1} />
```

### **Default Strokes (2px) - Original SVG Quality**
```tsx
<IconArrowLeft size={24} strokeWidth={2} />
<IconMagnifyingGlass2 size={32} strokeWidth={2} />
<IconSettingsGear1 size={48} strokeWidth={2} />
```

### **Thick Strokes (3px+)**
```tsx
<IconArrowLeft size={24} strokeWidth={3} />
<IconMagnifyingGlass2 size={32} strokeWidth={4} />
<IconSettingsGear1 size={48} strokeWidth={5} />
```

## 🔧 **Advanced Stroke Customization**

```tsx
import { IconArrowLeft, IconCircleCheck } from 'kruti-icon-library';

function AdvancedStrokeExamples() {
  return (
    <div>
      {/* Override stroke properties */}
      <IconArrowLeft 
        size={24} 
        color="#1f2937"
        strokeWidth={3}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      
      {/* Preserve original stroke attributes while customizing width */}
      <IconCircleCheck 
        size={32} 
        color="#059669"
        strokeWidth={1} // Override original 2px to 1px
        // strokeLinecap and strokeLinejoin will use original SVG values
      />
      
      {/* Responsive stroke widths */}
      <IconArrowLeft 
        size={16} 
        strokeWidth={1} // Thin for small icons
      />
      <IconArrowLeft 
        size={32} 
        strokeWidth={2} // Default for medium icons
      />
      <IconArrowLeft 
        size={64} 
        strokeWidth={3} // Thick for large icons
      />
    </div>
  );
}
```

## 🎨 **Design System Integration**

```tsx
import { IconArrowLeft, IconPlusLarge, IconTrashCan } from 'kruti-icon-library';

function DesignSystemIcons() {
  return (
    <div className="space-y-4">
      {/* Primary buttons - thick strokes */}
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded">
        <IconArrowLeft size={20} color="currentColor" strokeWidth={2} />
        Back
      </button>
      
      {/* Secondary buttons - medium strokes */}
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded">
        <IconPlusLarge size={20} color="currentColor" strokeWidth={1.5} />
        Add Item
      </button>
      
      {/* Danger buttons - bold strokes */}
      <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded">
        <IconTrashCan size={20} color="currentColor" strokeWidth={3} />
        Delete
      </button>
    </div>
  );
}
```

## 📱 **Responsive Icon System**

```tsx
import { IconArrowLeft, IconSettingsGear1 } from 'kruti-icon-library';

function ResponsiveIconSystem() {
  return (
    <div className="flex items-center gap-4">
      {/* Mobile - thin strokes */}
      <IconArrowLeft size={16} strokeWidth={1} color="#6b7280" />
      <IconSettingsGear1 size={16} strokeWidth={1} color="#6b7280" />
      
      {/* Tablet - default strokes */}
      <IconArrowLeft size={24} strokeWidth={2} color="#374151" />
      <IconSettingsGear1 size={24} strokeWidth={2} color="#374151" />
      
      {/* Desktop - thick strokes */}
      <IconArrowLeft size={32} strokeWidth={3} color="#111827" />
      <IconSettingsGear1 size={32} strokeWidth={3} color="#111827" />
    </div>
  );
}
```

## 🎭 **Theme-Based Stroke Control**

```tsx
import { IconArrowLeft, IconMagnifyingGlass2 } from 'kruti-icon-library';

function ThemeBasedIcons({ theme = 'light' }) {
  const iconConfig = {
    light: {
      color: '#374151',
      strokeWidth: 2
    },
    dark: {
      color: '#d1d5db',
      strokeWidth: 1.5
    },
    highContrast: {
      color: '#000000',
      strokeWidth: 3
    }
  };

  const config = iconConfig[theme];

  return (
    <div>
      <IconArrowLeft size={24} {...config} />
      <IconMagnifyingGlass2 size={24} {...config} />
    </div>
  );
}
```

## 🔍 **Available Icons with Stroke Control**

All icons now support stroke width control:

```tsx
import {
  // Arrow family
  IconArrow, IconArrowLeft, IconArrowRight, IconArrowUp, IconArrowDown,
  IconArrowBoxLeft, IconArrowInbox, IconArrowOutOfBox,
  IconArrowRotateCounterClockwise, IconArrowUndoDown, IconArrowsRepeatCircle,
  
  // UI elements
  IconCheckmark2, IconCircleCheck, IconCrossLarge, IconPlusLarge, IconMinusLarge,
  IconSquareCheck, IconSquarePlaceholder,
  
  // Navigation
  IconChevronLeft, IconChevronRight, IconChevronTop, IconChevronBottom,
  IconMagnifyingGlass2, IconSettingsGear1,
  
  // And many more...
} from 'kruti-icon-library';
```

## ⚠️ **Important Notes**

1. **Default strokeWidth is 2** - matches original SVG files
2. **strokeWidth prop overrides** the original SVG stroke width
3. **Original stroke attributes are preserved** when not overridden
4. **No more flattened strokes** - icons render with proper vector strokes
5. **Responsive design** - adjust stroke width based on icon size

## 🚀 **Installation & Update**

```bash
# Install latest version with stroke control
npm install kruti-icon-library@latest

# Or update existing
npm update kruti-icon-library
```

## 🎯 **Key Benefits**

- ✅ **No more flattened strokes**
- ✅ **Full stroke width control** via props
- ✅ **Original SVG quality preserved**
- ✅ **Flexible customization** for different use cases
- ✅ **Better visual consistency** across your app
- ✅ **Professional appearance** at all sizes

The stroke flattening issue is now completely resolved! 🎉
