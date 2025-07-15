export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: 16 | 20 | 24 | number | string;
    color?: string;
    ariaHidden?: boolean;
    title?: string;
  }
  
  export interface IconComponent extends React.FC<IconProps> {
    displayName?: string;
  }