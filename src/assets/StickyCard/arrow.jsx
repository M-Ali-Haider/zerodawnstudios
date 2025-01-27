const ArrowSVG = ({ className, stroke = "white" }) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M2 46L46 2M46 2H2M46 2V46"
      stroke={stroke}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowSVG;
