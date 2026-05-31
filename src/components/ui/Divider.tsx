interface Props {
  from: string;
  to: string;
}

export default function Divider({ from, to }: Props) {
  return (
    <svg
      className="divider"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={`M0,0 L1440,0 L1440,32 C1080,0 360,64 0,32 Z`}
        fill={from}
      />
      <path
        d={`M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z`}
        fill={to}
      />
    </svg>
  );
}
