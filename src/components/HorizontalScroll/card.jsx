const HorizontalCard = ({ index, item }) => {
  return (
    <div
      className={`min-w-[calc(100%-16px)] md:min-w-[calc(50%-16px)] xl:min-w-[calc(33.33%-16px)] aspect-[621/400] flex items-center justify-center font-bold text-5xl rounded-3xl`}
      style={{ background: item.bg }}
    >
      HorizontalCard {index + 1}
    </div>
  );
};

export default HorizontalCard;
