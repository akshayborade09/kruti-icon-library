# Kruti Icon Library

A clean, modern React icon library with TypeScript support, featuring carefully crafted SVG icons. Control icon sizes easily through props instead of separate components.

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
import { IconArrowLeft, IconMagnifyingGlass2, IconSettingsGear1 } from 'kruti-icon-library';

function App() {
  return (
    <div>
      <IconArrowLeft size={24} />
      <IconMagnifyingGlass2 size={20} color="#007bff" />
      <IconSettingsGear1 size={16} title="Settings" />
    </div>
  );
}
```

### Props Interface

All icons accept the following props:

```tsx
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;     // Default: 24
  color?: string;             // Default: "currentColor"
  ariaHidden?: boolean;       // Default: true
  title?: string;             // For accessibility
}
```

### Size Control

Control icon sizes easily with the `size` prop - no need for separate components:

```tsx
// Different sizes of the same icon
<IconArrowLeft size={16} />   {/* Small */}
<IconArrowLeft size={20} />   {/* Medium */}
<IconArrowLeft size={24} />   {/* Default */}
<IconArrowLeft size={32} />   {/* Large */}
<IconArrowLeft size={48} />   {/* Extra Large */}
<IconArrowLeft size="2rem" /> {/* Custom size */}
```

### Styling & Theming

```tsx
// Custom colors
<IconArrowLeft color="#ff6b6b" />
<IconArrowLeft color="rgb(59, 130, 246)" />
<IconArrowLeft color="currentColor" /> {/* Inherits text color */}

// With CSS classes
<IconArrowLeft className="my-icon-class" />

// Inline styles
<IconArrowLeft style={{ color: '#10b981', marginRight: '8px' }} />
```

### Accessibility

```tsx
// For decorative icons (default)
<IconArrowLeft ariaHidden={true} />

// For semantic icons
<IconArrowLeft ariaHidden={false} title="Go back" />
```

### TypeScript Support

```tsx
import { IconProps, IconArrowLeft } from 'kruti-icon-library';

const MyComponent: React.FC = () => {
  const iconProps: IconProps = {
    size: 20,
    color: '#007bff',
    title: 'Navigation'
  };

  return <IconArrowLeft {...iconProps} />;
};
```

## 🎨 Available Icons

All icons are available as React components. Simply prefix the icon name with "Icon" and use PascalCase:

| Icon | Component | Aliases |
|------|-----------|---------|
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6L4 12L10 18M5 12H20"    /></svg> | `IconArrowBoxLeft` | logout, leave, door |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5V19M5 12L12 19L19 12"    /></svg> | `IconArrowDown` |  |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15M7 10L12 15L17 10M12 15V3"    /></svg> | `IconArrowInbox` | download, file, down |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6L4 12L10 18M5 12H20"    /></svg> | `IconArrowLeft` |  |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 3L11 13L21 23M21 3H11M21 3V13"    /></svg> | `IconArrowOutOfBox` | upload, share |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M1 4L9 12L1 20"    /></svg> | `IconArrowRotateCounterClockwise` | rotate-left |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 14L4 9L9 4"    /></svg> | `IconArrowUndoDown` | back, bottom |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 19V5M5 12L12 5L19 12"    /></svg> | `IconArrowUp` | arrow-top |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 1L21 5L17 9M3 11A9 9 0 0 1 9 20L7 22M7 23L3 19L7 15M21 13A9 9 0 0 1 15 4L17 2"    /></svg> | `IconArrowsRepeatCircle` | repost |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"    /></svg> | `IconAsterisk` | placeholder |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"    /><path d="M20.2 20.2C21.4 19 22.3 17.5 22.8 15.8C20.9 16.5 18.8 16.5 17.2 15.4C15.6 14.3 14.8 12.5 14.8 10.6C14.8 8.7 15.6 6.9 17.2 5.8C18.8 4.7 20.9 4.7 22.8 5.4C22.3 3.7 21.4 2.2 20.2 1M3.8 3.8C2.6 5 1.7 6.5 1.2 8.2C3.1 7.5 5.2 7.5 6.8 8.6C8.4 9.7 9.2 11.5 9.2 13.4C9.2 15.3 8.4 17.1 6.8 18.2C5.2 19.3 3.1 19.3 1.2 18.6C1.7 20.3 2.6 21.8 3.8 23"    /></svg> | `IconAtom` |  |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 9C14 10.1 13.1 11 12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9Z"    /><path d="M19.5 12C19.5 12.6 19.3 13.3 18.9 13.9L13.1 20.6C12.5 21.3 11.5 21.3 10.9 20.6L5.1 13.9C4.7 13.3 4.5 12.6 4.5 12C4.5 8.4 7.9 5 11.5 5H12.5C16.1 5 19.5 8.4 19.5 12Z"    /></svg> | `IconBubbles` | messages, chat, communicate |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"    /><rect x="14" y="3" width="7" height="7"    /><rect x="14" y="14" width="7" height="7"    /><rect x="3" y="14" width="7" height="7"    /></svg> | `IconLayoutGrid2` | grid |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"    /><line x1="9" y1="9" x2="9" y2="21"    /><line x1="9" y1="9" x2="21" y2="9"    /></svg> | `IconLayoutLeft` | grid, window |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"    /></svg> | `IconMagicEdit` | magic-writing |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"    /><path d="M21 21L16.65 16.65"    /></svg> | `IconMagnifyingGlass2` | search |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z"    /><circle cx="12" cy="10" r="3"    /></svg> | `IconMapPin` | location |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1C12 1 8 5 8 9C8 11.21 9.79 13 12 13C14.21 13 16 11.21 16 9C16 5 12 1 12 1Z"    /><path d="M11 20V12M13 20V12M8 20H16"    /></svg> | `IconMicrophone` | mic, sound, podcast |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 12H19"    /></svg> | `IconMinusLarge` | remove, delete |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12.79C21 13.43 20.75 14.04 20.3 14.49C19.85 14.94 19.24 15.19 18.6 15.19C17.73 15.19 16.9 14.82 16.31 14.16C15.72 13.5 15.41 12.6 15.43 11.69C15.45 10.78 15.81 9.9 16.44 9.27C17.07 8.64 17.95 8.28 18.86 8.26C19.77 8.24 20.66 8.55 21.32 9.14C21.98 9.73 22.36 10.55 22.38 11.46C22.4 12.37 22.06 13.21 21.43 13.84C20.8 14.47 19.92 14.83 19.01 14.85C18.1 14.87 17.21 14.56 16.55 13.97C15.89 13.38 15.51 12.56 15.49 11.65"    /></svg> | `IconMoon` | dark-mode, night |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59722 21.9983 8.005 21.9983C6.41278 21.9983 4.88583 21.3658 3.76 20.24C2.63417 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63417 12.8758 3.76 11.75L12.95 2.56C13.7006 1.80944 14.7186 1.38825 15.78 1.38825C16.8414 1.38825 17.8594 1.80944 18.61 2.56C19.3606 3.31056 19.7818 4.32861 19.7818 5.39C19.7818 6.45139 19.3606 7.46944 18.61 8.22L10.07 16.76C9.69447 17.1356 9.18497 17.3467 8.655 17.3467C8.12503 17.3467 7.61553 17.1356 7.24 16.76C6.86447 16.3844 6.65339 15.8749 6.65339 15.345C6.65339 14.815 6.86447 14.3055 7.24 13.93L15.07 6.1"    /></svg> | `IconPaperclip1` | attachment |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 3C17.2626 2.73735 17.5744 2.52901 17.9176 2.38687C18.2608 2.24473 18.6286 2.17157 19 2.17157C19.3714 2.17157 19.7392 2.24473 20.0824 2.38687C20.4256 2.52901 20.7374 2.73735 21 3C21.2626 3.26264 21.471 3.57444 21.6131 3.9176C21.7553 4.26077 21.8284 4.62856 21.8284 5C21.8284 5.37143 21.7553 5.73923 21.6131 6.08239C21.471 6.42555 21.2626 6.73735 21 7L7.5 20.5L2 22L3.5 16.5L17 3Z"    /></svg> | `IconPencil` | edit, write |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"    /></svg> | `IconPencil1` | edit, write-1 |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"    /></svg> | `IconPeople2` |  |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 16.92V7.08C21.9996 6.71776 21.9071 6.36157 21.7315 6.04276C21.556 5.72394 21.3037 5.45343 21 5.26L13.5 1.34C13.1973 1.14466 12.8511 1.04205 12.4985 1.04205C12.1459 1.04205 11.7997 1.14466 11.497 1.34L4 5.26C3.69626 5.45343 3.44398 5.72394 3.26846 6.04276C3.09294 6.36157 3.00036 6.71776 3 7.08V16.92C3.00036 17.2822 3.09294 17.6384 3.26846 17.9572C3.44398 18.2761 3.69626 18.5466 4 18.74L11.5 22.66C11.8027 22.8553 12.1489 22.9579 12.5015 22.9579C12.8541 22.9579 13.2003 22.8553 13.503 22.66L21 18.74C21.3037 18.5466 21.556 18.2761 21.7315 17.9572C21.9071 17.6384 21.9996 17.2822 22 16.92Z"    /><polyline points="7.5,4.21 12,6.81 16.5,4.21"    /><polyline points="7.5,4.21 7.5,13.81 12,16.41"    /><polyline points="16.5,4.21 16.5,13.81 12,16.41"    /></svg> | `IconPhone` | iphone, mobile |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5V19M5 12H19"    /></svg> | `IconPlusLarge` | add large |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"    /><polyline points="14,2 14,8 20,8"    /><line x1="16" y1="13" x2="8" y2="13"    /><line x1="16" y1="17" x2="8" y2="17"    /><polyline points="10,9 9,9 8,9"    /></svg> | `IconReceiptBill` | purchase, invoice |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2" ry="2"    /><path d="M7 8V6C7 4.93913 7.42143 3.92172 8.17157 3.17157C8.92172 2.42143 9.93913 2 11 2H13C14.0609 2 15.0783 2.42143 15.8284 3.17157C16.5786 3.92172 17 4.93913 17 6V8"    /></svg> | `IconRobot` |  |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"    /><path d="M21 21L16.65 16.65"    /><path d="M6 9L8 11L12 7"    /></svg> | `IconSearchMenu` | list-search |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"    /><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5842 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6642 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.2569 9.77251 19.9859C9.5799 19.7148 9.31074 19.5067 9 19.39C8.69838 19.2569 8.36381 19.2172 8.03941 19.276C7.71502 19.3348 7.41568 19.4895 7.18 19.72L7.12 19.78C6.93425 19.966 6.71368 20.1135 6.47088 20.2141C6.22808 20.3148 5.96783 20.3666 5.705 20.3666C5.44217 20.3666 5.18192 20.3148 4.93912 20.2141C4.69632 20.1135 4.47575 19.966 4.29 19.78C4.10405 19.5943 3.95653 19.3737 3.85588 19.1309C3.75523 18.8881 3.70343 18.6278 3.70343 18.365C3.70343 18.1022 3.75523 17.8419 3.85588 17.5991C3.95653 17.3563 4.10405 17.1357 4.29 16.95L4.35 16.89C4.58054 16.6542 4.73519 16.355 4.794 16.0306C4.85282 15.7062 4.81312 15.3716 4.68 15.07C4.55324 14.7742 4.34276 14.522 4.07447 14.3443C3.80618 14.1666 3.49179 14.0713 3.17 14.07H3C2.46957 14.07 1.96086 13.8593 1.58579 13.4842C1.21071 13.1091 1 12.6004 1 12.07C1 11.5396 1.21071 11.0309 1.58579 10.6558C1.96086 10.2807 2.46957 10.07 3 10.07H3.09C3.42099 10.0623 3.742 9.95512 4.01309 9.76251C4.28417 9.5699 4.49226 9.29074 4.61 8.99C4.74312 8.68838 4.78282 8.35381 4.724 8.02941C4.66519 7.70502 4.51054 7.40568 4.28 7.17L4.22 7.11C4.03405 6.92425 3.88653 6.70368 3.78588 6.46088C3.68523 6.21808 3.63343 5.95783 3.63343 5.695C3.63343 5.43217 3.68523 5.17192 3.78588 4.92912C3.88653 4.68632 4.03405 4.46575 4.22 4.28C4.40575 4.09405 4.62632 3.94653 4.86912 3.84588C5.11192 3.74523 5.37217 3.69343 5.635 3.69343C5.89783 3.69343 6.15808 3.74523 6.40088 3.84588C6.64368 3.94653 6.86425 4.09405 7.05 4.28L7.11 4.34C7.34568 4.57054 7.64502 4.72519 7.96941 4.784C8.29381 4.84282 8.62838 4.80312 8.93 4.67H9C9.29577 4.54324 9.54802 4.33276 9.72569 4.06447C9.90337 3.79618 9.99872 3.48179 10 3.16V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5842 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"    /></svg> | `IconSettingsGear1` | preferences |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 13C20 17.42 13 23 13 23S6 17.42 6 13C6 10.79 7.79 9 10 9S14 10.79 14 13Z"    /><path d="M12 11C12 11 10 13 10 13C10 13 12 15 12 15C12 15 14 13 14 13C14 13 12 11 12 11Z"    /></svg> | `IconShieldCheck3` | check |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"    /></svg> | `IconThunder` | zap, flash |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.7478 21.1181 10.0795 20.7461C8.41128 20.3741 6.88402 19.5345 5.67691 18.3274C4.4698 17.1203 3.63027 15.593 3.25827 13.9248C2.88627 12.2565 2.99707 10.5164 3.57783 8.9086C4.15859 7.30082 5.18518 5.89168 6.53758 4.84607C7.88998 3.80047 9.5122 3.16171 11.2144 3.00496C11.9636 3.31 12.5 4.1 12.5 5C12.5 6.1 11.6 7 10.5 7C8.29 7 6.5 8.79 6.5 11C6.5 13.21 8.29 15 10.5 15C11.6 15 12.5 15.9 12.5 17C12.5 17.9 11.9636 18.69 11.2144 18.995"    /></svg> | `IconMoon` | dark-mode, night |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"    /><path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"    /></svg> | `IconSun` | light-mode, day, today |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 15L8.5 13.5L7 15M7 9L8.5 10.5L10 9M14 9L15.5 10.5L17 9M17 15L15.5 13.5L14 15"    /></svg> | `IconThumbsDown` | thumb, hand, no, contra |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 9V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V9C10 9.55228 10.4477 10 11 10H17L19 22H5L7 10H13C13.5523 10 14 9.55228 14 9Z"    /></svg> | `IconThumbsDown1` | thumb, hand, no, contra-1 |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 9L15.5 10.5L17 9M17 15L15.5 13.5L14 15M10 15L8.5 13.5L7 15M7 9L8.5 10.5L10 9"    /></svg> | `IconThumbsUp` | thumb, hand, yes, pro |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 15V19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19V15C14 14.4477 13.5523 14 13 14H7L5 2H19L17 14H11C10.4477 14 10 14.4477 10 15Z"    /></svg> | `IconThumbsUp1` | thumb, hand, yes, pro-1 |
| <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 15V19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12C19 10.9391 18.5786 9.92172 17.8284 9.17157C17.0783 8.42143 16.0609 8 15 8C13.9391 8 12.9217 8.42143 12.1716 9.17157C11.4214 9.92172 11 10.9391 11 12V15H10ZM10 15H5C4.46957 15 3.96086 14.7893 3.58579 14.4142C3.21071 14.0391 3 13.5304 3 13V12C3 10.9391 3.42143 9.92172 4.17157 9.17157C4.92172 8.42143 5.93913 8 7 8C8.06087 8 9.07828 8.42143 9.82843 9.17157C10.5786 9.92172 11 10.9391 11 12V15H10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 3C6.01472 3 4 5.01472 4 7.5V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> | `IconThumbsDown` | thumb, hand, no, contra |

## 📖 Complete Usage Examples

### Basic Implementation

```tsx
import React from 'react';
import {
  IconArrowLeft,
  IconMagnifyingGlass2,
  IconSettingsGear1,
  IconSun,
  IconMoon
} from 'kruti-icon-library';

function Navigation() {
  return (
    <nav className="flex items-center space-x-4">
      <button className="p-2">
        <IconArrowLeft size={20} />
      </button>
      
      <div className="relative">
        <IconMagnifyingGlass2 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2" 
        />
        <input 
          className="pl-10 pr-4 py-2 border rounded"
          placeholder="Search..." 
        />
      </div>
      
      <button className="p-2">
        <IconSettingsGear1 size={20} />
      </button>
    </nav>
  );
}
```

### Theme Toggle Component

```tsx
import React, { useState } from 'react';
import { IconSun, IconMoon } from 'kruti-icon-library';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-gray-100"
    >
      {isDark ? (
        <IconSun size={24} color="#fbbf24" title="Switch to light mode" />
      ) : (
        <IconMoon size={24} color="#6366f1" title="Switch to dark mode" />
      )}
    </button>
  );
}
```

### Icon Button Components

```tsx
import React from 'react';
import { IconTrashCan, IconCheckmark2, IconCrossLarge } from 'kruti-icon-library';

function ActionButtons() {
  return (
    <div className="flex space-x-2">
      <button className="flex items-center px-3 py-2 bg-green-500 text-white rounded">
        <IconCheckmark2 size={16} className="mr-2" />
        Confirm
      </button>
      
      <button className="flex items-center px-3 py-2 bg-red-500 text-white rounded">
        <IconTrashCan size={16} className="mr-2" />
        Delete
      </button>
      
      <button className="p-2 bg-gray-300 rounded">
        <IconCrossLarge size={16} />
      </button>
    </div>
  );
}
```

## 🔧 Installation & Build

```bash
# Install dependencies
npm install

# Generate icon components from SVGs
npm run generate-icons

# Build the library
npm run build

# Development (watch mode)
npm run dev
```

## 📄 License

OLA

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Add your SVG icons to the appropriate size folder (`src/icons/24/`)
4. Run `npm run generate-icons` to create React components
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 🆕 What's New in v1.1.0

- ✅ **Simplified Architecture**: Removed size-specific components (16px, 20px variants)
- ✅ **Prop-based Sizing**: Control icon sizes easily with the `size` prop
- ✅ **61 Clean Components**: One component per icon, no size suffix clutter
- ✅ **Better Performance**: Smaller bundle size with fewer component variants
- ✅ **Enhanced Developer Experience**: Cleaner imports and easier size control

### Migration from v1.0.x

If you were using size-specific components:

```tsx
// Before (v1.0.x)
import { IconArrowLeft16, IconArrowLeft20, IconArrowLeft } from 'kruti-icon-library';

// After (v1.1.0)
import { IconArrowLeft } from 'kruti-icon-library';

// Use the size prop instead
<IconArrowLeft size={16} />
<IconArrowLeft size={20} />
<IconArrowLeft size={24} /> {/* default */}
```
