const ParticipationSVG = ({ className }: { className: string }) => {
  return (
    <div>
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18.5"
          cy="18.5"
          r="18.5"
          fill="#FCF7FF"
          className={className}
        />
        <path
          d="M15 25H23V23H15V25ZM15 21H23V19H15V21ZM13 29C12.45 29 11.9792 28.8042 11.5875 28.4125C11.1958 28.0208 11 27.55 11 27V11C11 10.45 11.1958 9.97917 11.5875 9.5875C11.9792 9.19583 12.45 9 13 9H21L27 15V27C27 27.55 26.8042 28.0208 26.4125 28.4125C26.0208 28.8042 25.55 29 25 29H13ZM20 16V11H13V27H25V16H20Z"
          fill="#110C24"
        />
      </svg>
    </div>
  );
};

export default ParticipationSVG;
