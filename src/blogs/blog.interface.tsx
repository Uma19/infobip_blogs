export interface Iblog {
  body?: Array<Icontent>;
  size?: Isize;
}

export interface Isize {
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
}

export interface Icontent {
    title?: string;
    description?: string;
    images?: string;
    width?: string;
    height?: string;
}