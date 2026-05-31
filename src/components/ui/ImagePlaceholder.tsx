import type { CSSProperties } from 'react';

interface Props {
  caption: string;
  height?: string | number;
  dark?: boolean;
  style?: CSSProperties;
}

export default function ImagePlaceholder({ caption, height, dark, style }: Props) {
  return (
    <div
      className={dark ? 'ph ph-dark' : 'ph'}
      style={{ height: height ?? '100%', width: '100%', ...style }}
    >
      <span className="ph-cap">{caption}</span>
    </div>
  );
}
