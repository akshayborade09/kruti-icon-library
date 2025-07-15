# Kruti Icon Library

A clean, modern React icon library with TypeScript support, featuring carefully crafted SVG icons optimized for 16px, 20px, and 24px sizes.

## 📦 Installation

```bash
npm install kruti-icon-library
```

Or using other package managers:

```bash
# Yarn
yarn add kruti-icon-library

# pnpm
pnpm add kruti-icon-library
```

## 📋 Requirements

- **React**: >=16.8.0
- **React DOM**: >=16.8.0
- **TypeScript**: Optional but recommended for better development experience

## 🚀 Usage

### Basic Usage

```tsx
import React from 'react';
import { IconArrowLeft, IconSearch, IconSettings } from 'kruti-icon-library';

function App() {
  return (
    <div>
      <IconArrowLeft size={24} />
      <IconSearch size={20} color="#007bff" />
      <IconSettings size={16} title="Settings" />
    </div>
  );
}
```

### Props Interface

All icons accept the following props:

```tsx
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: 16 | 20 | 24 | number | string;  // Default: 24
  color?: string;                          // Default: "currentColor"
  ariaHidden?: boolean;                    // Default: true
  title?: string;                          // For accessibility
}
```

### Advanced Usage

```tsx
import { IconHeart, IconShare } from 'kruti-icon-library';

// Custom styling with CSS classes
<IconHeart 
  size={32} 
  className="text-red-500 hover:text-red-600" 
  onClick={() => console.log('Liked!')}
/>

// Accessibility with title
<IconShare 
  size={20}
  ariaHidden={false}
  title="Share this content"
  role="button"
  tabIndex={0}
/>

// Custom colors and styling
<IconSearch 
  size={24}
  color="#ff6b6b"
  style={{ cursor: 'pointer' }}
/>
```

## 🎨 Available Icons

### Navigation & Actions

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6L4 12L10 18M5 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowLeft` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 18L20 12L14 6M19 12H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowRight` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14L12 8L6 14M12 19V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowUp` | arrow-top |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10L12 16L18 10M12 5V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowDown` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H8M12 16L8 12L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowInbox` | download, file, down |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H16M12 8L16 12L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowOutOfBox` | upload, share |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12L16 7M21 12H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowBoxLeft` | logout, leave, door |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14L4 9L9 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowUndoDown` | back, bottom |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4V10H7M23 20V14H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M22.99 14L18.35 18.36A9 9 0 0 1 3.51 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowRotateCounterClockwise` | rotate-left |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M8 12L16 8L12 16L8 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconArrowsRepeatCircle` | repost |

### UI Controls

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 15L9.29412 20L21 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconCheckmark2` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconCircleCheck` | check radio, circle, checkbox, check, checkmark, confirm |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconSquareCheck` | checkbox, check, checkmark, confirm |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconCrossLarge` | crossed large, close |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconChevronBottom` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconChevronTop` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconChevronLeft` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconChevronRight` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconPlusLarge` | add large |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconMinusLarge` | remove, delete |

### Content & Media

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="2"/></svg> | `IconCamera1` | picture, image, cam |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1C13.1046 1 14 1.89543 14 3V11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11V3C10 1.89543 10.8954 1 12 1Z" stroke="currentColor" stroke-width="2"/><path d="M19 10V11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11V10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 19V23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 23H16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> | `IconMicrophone` | mic, sound, podcast |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="currentColor" stroke-width="2"/><path d="M19.07 4.93C20.9445 6.80528 21.9983 9.34832 21.9983 12C21.9983 14.6517 20.9445 17.1947 19.07 19.07M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 12C17.0039 13.3308 16.4774 14.6024 15.54 15.54" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconVolumeFull` | speaker, loud, sound |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15L16 10L5 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8L14 6L18 10L16 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconImageSparkle` | midjourney, ai generated, star |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.44 11.05L12.25 2.05C12.1115 1.91437 11.9467 1.81097 11.7654 1.74702C11.5841 1.68307 11.3899 1.66 11.1975 1.67925C11.0051 1.6985 10.8183 1.75967 10.6513 1.85934C10.4843 1.959 10.3408 2.09515 10.23 2.26L1.23 15.26C1.08045 15.4887 1.00062 15.7575 1.00062 16.0325C1.00062 16.3075 1.08045 16.5763 1.23 16.805L4.6 21.565C4.77187 21.8288 5.02131 22.0281 5.31 22.135L11.31 24.135C11.4346 24.1783 11.5662 24.2004 11.6984 24.2004C11.8306 24.2004 11.9622 24.1783 12.0868 24.135L18.0868 22.135C18.3755 22.0281 18.6249 21.8288 18.7968 21.565L22.1668 16.805C22.3164 16.5763 22.3962 16.3075 22.3962 16.0325C22.3962 15.7575 22.3164 15.4887 22.1668 15.26L21.44 11.05Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconPaperclip1` | attachment |

### Interface & Layout

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="19" cy="12" r="2" fill="currentColor"/></svg> | `IconDotGrid1x3Horizontal` | menu, drag, grab |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2"/><rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2"/><rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2"/></svg> | `IconLayoutGrid2` | grid |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><line x1="9" y1="9" x2="9" y2="21" stroke="currentColor" stroke-width="2"/><line x1="9" y1="9" x2="21" y2="9" stroke="currentColor" stroke-width="2"/></svg> | `IconLayoutLeft` | grid, window |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7" stroke="currentColor" stroke-width="2"/><rect x="14" y="3" width="7" height="7" stroke="currentColor" stroke-width="2"/><rect x="14" y="14" width="7" height="7" stroke="currentColor" stroke-width="2"/><rect x="3" y="14" width="7" height="7" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg> | `IconSquareGridCircle` | layout, grid, list, category, categories |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="14" width="8" height="8" rx="2" ry="2" stroke="currentColor" stroke-width="2"/><rect x="2" y="2" width="8" height="8" rx="2" ry="2" stroke="currentColor" stroke-width="2"/></svg> | `IconSquareBehindSquare2` | copy 2, layers, pages |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg> | `IconCirclePlaceholderOn` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="2"/></svg> | `IconSquarePlaceholder` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconAsterisk` | placeholder |

### Actions & Tools

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 20L16.05 16.05M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> | `IconMagnifyingGlass2` | search |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/><path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 11H14M11 8V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconSearchMenu` | list-search |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 3C17.2652 2.73478 17.5196 2.52892 17.7071 2.41421C18.0976 2.19575 18.5 2.18198 19 2.5C19.5 2.81802 19.8192 3.09763 20.0858 3.5C20.2361 3.73205 20.2648 4.07377 20 4.5L9 15.5L4 17L5.5 12L16.5 1C16.6667 0.833333 16.8333 0.666667 17 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconPencil` | edit, write |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconEditBig` | box, pencil, pen, write, draw |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2C15 1.46957 14.7893 0.960859 14.4142 0.585786C14.0391 0.210714 13.5304 0 13 0L11 0C10.4696 0 9.96086 0.210714 9.58579 0.585786C9.21071 0.960859 9 1.46957 9 2V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 6H21L20 22H4L3 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 4V2H9V4H3V6H21V4H15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconMagicEdit` | magic-writing |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5293 3.82729C11.4425 3.31361 12.5576 3.31361 13.4708 3.82729L18.4708 6.63977C19.4155 7.17112 20.0001 8.17067 20.0001 9.2545L20.0001 14.7454C20.0001 15.8292 19.4155 16.8288 18.4708 17.3601L13.4707 20.1726C12.5575 20.6863 11.4425 20.6863 10.5293 20.1726L5.52935 17.3604C4.58466 16.8291 4.00004 15.8295 4.00004 14.7456L4.00004 9.25448C4.00004 8.17065 4.58463 7.17109 5.52927 6.63974L10.5293 3.82729Z" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg> | `IconSettingsGear1` | preferences |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H5H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="11" x2="10" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconTrashCan` | delete, remove, garbage, waste |

### Communication & Social

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconBubbles` | messages, chat, communicate |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M23 21V19C23 17.9391 22.5786 16.9217 21.8284 16.1716C21.0783 15.4214 20.0609 15 19 15C17.9391 15 16.9217 15.4214 16.1716 16.1716C15.4214 16.9217 15 17.9391 15 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg> | `IconGroup2` | users |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg> | `IconPeople2` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H6C6.53043 3 7.03914 3.21071 7.41421 3.58579C7.78929 3.96086 8 4.46957 8 5V8H16V5C16 4.46957 16.2107 3.96086 16.5858 3.58579C16.9609 3.21071 17.4696 3 18 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconPhone` | iphone, mobile |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V12C5 13.0609 5.42143 14.0783 6.17157 14.8284C6.92172 15.5786 7.93913 16 9 16C10.0609 16 11.0783 15.5786 11.8284 14.8284C12.5786 14.0783 13 13.0609 13 12V9H14ZM14 9H19C19.5304 9 20.0391 9.21071 20.4142 9.58579C20.7893 9.96086 21 10.4696 21 11V12C21 13.0609 20.5786 14.0783 19.8284 14.8284C19.0783 15.5786 18.0609 16 17 16C15.9391 16 14.9217 15.5786 14.1716 14.8284C13.4214 14.0783 13 13.0609 13 12V9H14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.5 21C17.9853 21 20 18.9853 20 16.5V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconThumbsUp` | thumb, hand, yes, pro |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15V19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12C19 10.9391 18.5786 9.92172 17.8284 9.17157C17.0783 8.42143 16.0609 8 15 8C13.9391 8 12.9217 8.42143 12.1716 9.17157C11.4214 9.92172 11 10.9391 11 12V15H10ZM10 15H5C4.46957 15 3.96086 14.7893 3.58579 14.4142C3.21071 14.0391 3 13.5304 3 13V12C3 10.9391 3.42143 9.92172 4.17157 9.17157C4.92172 8.42143 5.93913 8 7 8C8.06087 8 9.07828 8.42143 9.82843 9.17157C10.5786 9.92172 11 10.9391 11 12V15H10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 3C6.01472 3 4 5.01472 4 7.5V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconThumbsDown` | thumb, hand, no, contra |

### Status & Indicators

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18C1.64187 18.3024 1.55111 18.6453 1.55111 18.9945C1.55111 19.3437 1.64187 19.6866 1.82 19.989C2.25 20.67 2.83 21 3.53 21H20.47C21.17 21 21.75 20.67 22.18 19.989C22.3581 19.6866 22.4489 19.3437 22.4489 18.9945C22.4489 18.6453 22.3581 18.3024 22.18 18L13.71 3.86C13.32 3.2 12.68 3.2 12.29 3.86Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconTriangleExclamation` | error, warning, alert |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconShieldCheck3` | check |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconThunder` | zap, flash |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.7478 21.1181 10.0795 20.7461C8.41128 20.3741 6.88402 19.5345 5.67691 18.3274C4.4698 17.1203 3.63027 15.593 3.25827 13.9248C2.88627 12.2565 2.99707 10.5164 3.57783 8.9086C4.15859 7.30082 5.18518 5.89168 6.53758 4.84607C7.88998 3.80047 9.5122 3.16171 11.2144 3.00496C11.9636 3.31 12.5 4.1 12.5 5C12.5 6.1 11.6 7 10.5 7C8.29 7 6.5 8.79 6.5 11C6.5 13.21 8.29 15 10.5 15C11.6 15 12.5 15.9 12.5 17C12.5 17.9 11.9636 18.69 11.2144 18.995" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconMoon` | dark-mode, night |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> | `IconSun` | light-mode, day, today |

### Objects & Concepts

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="8" height="12" rx="1" stroke="currentColor" stroke-width="2"/><path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V8" stroke="currentColor" stroke-width="2"/><circle cx="7" cy="17" r="1" fill="currentColor"/><rect x="13" y="8" width="8" height="15" rx="1" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="15.5" r="1" fill="currentColor"/></svg> | `IconRobot` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="8" r="1" fill="currentColor"/><circle cx="12" cy="16" r="1" fill="currentColor"/><circle cx="8" cy="12" r="1" fill="currentColor"/><circle cx="16" cy="12" r="1" fill="currentColor"/></svg> | `IconAtom` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 17H5C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V15C21 16.1046 20.1046 17 19 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M5 17V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7V5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconCar` | |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><polygon points="12,6 6.5,18 17.5,18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="2" x2="12" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> | `IconGlobus` | map, earth, globe |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/></svg> | `IconMapPin` | location |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="10,9 9,9 8,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconReceiptBill` | purchase, invoice |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2"/><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.2569 9.77251 19.9859C9.5799 19.7149 9.31074 19.5053 9 19.38C8.69838 19.2469 8.36381 19.2072 8.03941 19.266C7.71502 19.3248 7.41568 19.4795 7.18 19.71L7.12 19.77C6.93425 19.956 6.71368 20.1035 6.47088 20.2041C6.22808 20.3048 5.96783 20.3566 5.705 20.3566C5.44217 20.3566 5.18192 20.3048 4.93912 20.2041C4.69632 20.1035 4.47575 19.956 4.29 19.77C4.10405 19.5843 3.95653 19.3637 3.85588 19.1209C3.75523 18.8781 3.70343 18.6178 3.70343 18.355C3.70343 18.0922 3.75523 17.8319 3.85588 17.5891C3.95653 17.3463 4.10405 17.1257 4.29 16.94L4.35 16.88C4.58054 16.6443 4.73519 16.345 4.794 16.0206C4.85282 15.6962 4.81312 15.3616 4.68 15.06C4.55324 14.7642 4.34276 14.512 4.07447 14.3343C3.80618 14.1566 3.49179 14.0613 3.17 14.06H3C2.46957 14.06 1.96086 13.8493 1.58579 13.4742C1.21071 13.0991 1 12.5904 1 12.06C1 11.5296 1.21071 11.0209 1.58579 10.6458C1.96086 10.2707 2.46957 10.06 3 10.06H3.09C3.42099 10.0523 3.742 9.94512 4.01309 9.75251C4.28417 9.5599 4.49478 9.29074 4.62 8.98C4.75312 8.67838 4.79282 8.34381 4.734 8.01941C4.67519 7.69502 4.52054 7.39568 4.29 7.16L4.23 7.1C4.04405 6.91425 3.89653 6.69368 3.79588 6.45088C3.69523 6.20808 3.64343 5.94783 3.64343 5.685C3.64343 5.42217 3.69523 5.16192 3.79588 4.91912C3.89653 4.67632 4.04405 4.45575 4.23 4.27C4.41575 4.08405 4.63632 3.93653 4.87912 3.83588C5.12192 3.73523 5.38217 3.68343 5.645 3.68343C5.90783 3.68343 6.16808 3.73523 6.41088 3.83588C6.65368 3.93653 6.87425 4.08405 7.06 4.27L7.12 4.33C7.35568 4.56054 7.65502 4.71519 7.97941 4.774C8.30381 4.83282 8.63838 4.79312 8.94 4.66H9C9.29577 4.53324 9.54802 4.32276 9.72569 4.05447C9.90337 3.78618 9.99872 3.47179 10 3.15V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconFoodExperiences` | plate |
| <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3H6L7.68 13.39C7.77144 13.8504 8.02191 14.264 8.38755 14.5583C8.75318 14.8526 9.2107 15.009 9.68 15H19.4C19.8693 15.009 20.3268 14.8526 20.6925 14.5583C21.0581 14.264 21.3086 13.8504 21.4 13.39L23 6H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconTranslate` | |

## 📐 Sizing

The library provides three optimized sizes:

- **16px**: Perfect for small UI elements, buttons, and inline text
- **20px**: Ideal for medium-sized interface elements
- **24px**: Great for larger buttons, headers, and prominent actions

```tsx
// Using predefined sizes (recommended)
<IconSearch size={16} />  // Small
<IconSearch size={20} />  // Medium  
<IconSearch size={24} />  // Large (default)

// Using custom sizes
<IconSearch size={32} />     // Custom number
<IconSearch size="2rem" />   // Custom string
```

## 🎨 Styling

### Using CSS Classes

```tsx
<IconHeart className="text-red-500 hover:text-red-600 transition-colors" />
```

### Using Inline Styles

```tsx
<IconStar 
  style={{ 
    color: '#ffd700', 
    cursor: 'pointer',
    transition: 'transform 0.2s',
  }}
/>
```

### Using CSS Variables

```css
.icon-button {
  --icon-color: #007bff;
  --icon-size: 20px;
}

.icon-button:hover {
  --icon-color: #0056b3;
}
```

```tsx
<IconSettings 
  size="var(--icon-size)" 
  color="var(--icon-color)" 
  className="icon-button"
/>
```

## ♿ Accessibility

The library follows accessibility best practices:

```tsx
// For decorative icons (default)
<IconStar ariaHidden={true} />

// For functional icons
<IconDelete 
  ariaHidden={false}
  title="Delete item"
  role="button"
  tabIndex={0}
/>

// For screen readers
<IconInfo 
  title="Important information"
  ariaHidden={false}
  role="img"
/>
```

## 📱 Framework Examples

### Next.js

```tsx
import { IconSearch, IconMenu } from 'kruti-icon-library';

export default function Header() {
  return (
    <header className="flex items-center gap-4">
      <IconMenu size={24} />
      <IconSearch size={20} color="#6b7280" />
    </header>
  );
}
```

### React with Styled Components

```tsx
import styled from 'styled-components';
import { IconHeart } from 'kruti-icon-library';

const StyledIcon = styled(IconHeart)`
  color: ${props => props.liked ? '#ef4444' : '#6b7280'};
  transition: color 0.2s ease;
  
  &:hover {
    color: #ef4444;
  }
`;
```

### TypeScript

```tsx
import { IconProps, IconSearch } from 'kruti-icon-library';

interface SearchButtonProps {
  onClick: () => void;
  iconProps?: IconProps;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, iconProps }) => (
  <button onClick={onClick}>
    <IconSearch size={20} {...iconProps} />
  </button>
);
```

## 🔧 Development

To contribute or modify the library:

```bash
# Clone and install dependencies
git clone <repository-url>
cd kruti-icon-library
npm install

# Build icons from SVG files
npm run build-icons

# Build the library
npm run build

# Watch mode for development
npm run dev
```

## 📄 License

OLA © Kruti

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Happy coding with Kruti Icon Library! 🎉**
