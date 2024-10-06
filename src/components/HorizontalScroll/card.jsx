const HorizontalCard = ({ index, item }) => {
  return (
    <div
      className={`min-w-full max-w-full h-full flex items-center justify-center font-bold text-5xl`}
      style={{ background: item.bg }}
    >
      HorizontalCard {index + 1}
    </div>
  );
};

export default HorizontalCard;
