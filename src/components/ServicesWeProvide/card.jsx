const Card = () => {
  return (
    <div className="min-w-[40vw] max-w-[40vw] rounded-[32px] h-full bg-white p-6 flex flex-col">
      <div className="flex-1 bg-[#C4C4C4] rounded-2xl"></div>
      <div className="mt-4">
        <div className="text-[32px] leading-[41.5px] font-normal mb-6">
          Design
        </div>
        <div className="text-2xl leading-[31.13px] font-light mb-6">
          Leverage compatibility with existing libraries like Wagmi or Solana
          Wallet Adapter for a smooth, drop-in integration.
        </div>
        <div>LEARN MORE &#10140; </div>
      </div>
    </div>
  );
};

export default Card;
