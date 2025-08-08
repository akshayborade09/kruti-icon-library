import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <use href={`#icon-${name}`} />
  </svg>
);

// Individual icon components for convenience

export const IconArrow: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow" {...props} />
);

export const IconArrowBoxLeft: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-box-left" {...props} />
);

export const IconArrowDown: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-down" {...props} />
);

export const IconArrowInbox: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-inbox" {...props} />
);

export const IconArrowLeft: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-left" {...props} />
);

export const IconArrowOutOfBox: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-out-of-box" {...props} />
);

export const IconArrowRotateCounterClockwise: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-rotate-counter-clockwise" {...props} />
);

export const IconArrowUndoDown: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-undo-down" {...props} />
);

export const IconArrowUp: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrow-up" {...props} />
);

export const IconArrowsRepeatCircle: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="arrows-repeat-circle" {...props} />
);

export const IconAsterisk: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="asterisk" {...props} />
);

export const IconAtom: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="atom" {...props} />
);

export const IconBubbles: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="bubbles" {...props} />
);

export const IconCamera1: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="camera-1" {...props} />
);

export const IconCar: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="car" {...props} />
);

export const IconCheckmark2: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="checkmark-2" {...props} />
);

export const IconChevronBottom: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="chevron-bottom" {...props} />
);

export const IconChevronLeft: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="chevron-left" {...props} />
);

export const IconChevronRight: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="chevron-right" {...props} />
);

export const IconChevronTop: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="chevron-top" {...props} />
);

export const IconCircleCheck: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="circle-check" {...props} />
);

export const IconCirclePlaceholderOn: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="circle-placeholder-on" {...props} />
);

export const IconCrossLarge: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="cross-large" {...props} />
);

export const IconDotGrid1x3Horizontal: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="dot-grid-1x3-horizontal" {...props} />
);

export const IconEditBig: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="edit-big" {...props} />
);

export const IconFoodExperiences: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="food-experiences" {...props} />
);

export const IconGlobus: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="globus" {...props} />
);

export const IconGroup2: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="group-2" {...props} />
);

export const IconImageSparkle: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="image-sparkle" {...props} />
);

export const IconLayoutGrid2: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="layout-grid-2" {...props} />
);

export const IconLayoutLeft: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="layout-left" {...props} />
);

export const IconMagicEdit: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="magic-edit" {...props} />
);

export const IconMagnifyingGlass2: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="magnifying-glass-2" {...props} />
);

export const IconMapPin: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="map-pin" {...props} />
);

export const IconMicrophone: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="microphone" {...props} />
);

export const IconMinusLarge: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="minus-large" {...props} />
);

export const IconMoon: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="moon" {...props} />
);

export const IconPageTextAdd: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="page-text-add" {...props} />
);

export const IconPaperclip1: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="paperclip-1" {...props} />
);

export const IconPencil: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="pencil" {...props} />
);

export const IconPencil1: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="pencil" {...props} />
);

export const IconPeople2: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="people-2" {...props} />
);

export const IconPhone: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="phone" {...props} />
);

export const IconPlusLarge: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="plus-large" {...props} />
);

export const IconReceiptBill: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="receipt-bill" {...props} />
);

export const IconRobot: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="robot" {...props} />
);

export const IconSearchMenu: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="search-menu" {...props} />
);

export const IconSettingsGear1: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="settings-gear-1" {...props} />
);

export const IconShieldCheck3: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="shield-check-3" {...props} />
);

export const IconSquareBehindSquare2: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="square-behind-square-2" {...props} />
);

export const IconSquareCheck: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="square-check" {...props} />
);

export const IconSquareGridCircle: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="square-grid-circle" {...props} />
);

export const IconSquarePlaceholder: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="square-placeholder" {...props} />
);

export const IconSun: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="sun" {...props} />
);

export const IconThumbsDown: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="thumbs-down" {...props} />
);

export const IconThumbsDown1: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="thumbs-down" {...props} />
);

export const IconThumbsUp: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="thumbs-up" {...props} />
);

export const IconThumbsUp1: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="thumbs-up" {...props} />
);

export const IconThunder: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="thunder" {...props} />
);

export const IconTranslate: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="translate" {...props} />
);

export const IconTrashCan: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="trash-can" {...props} />
);

export const IconTriangleExclamation: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="triangle-exclamation" {...props} />
);

export const IconVolumeFull: React.FC<Omit<IconProps, 'name'>> = (props) => (
  <Icon name="volume-full" {...props} />
);
