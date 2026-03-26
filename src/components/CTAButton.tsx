interface CTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  ctaPosition?: string;
}

const CHECKOUT_URL = "https://pay.hotmart.com/B102228403Q";

export const CTAButton = ({ children, className = "", ctaPosition = "default" }: CTAButtonProps) => {
  const handleClick = () => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout", {
        content_name: "Sinais da Infidelidade",
        content_category: ctaPosition,
        value: 27.00,
        currency: "BRL",
      });
    }
    window.location.href = CHECKOUT_URL;
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-xl py-4 px-6 md:py-[18px] md:px-10 w-full text-center min-h-[56px] shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:-translate-y-[2px] transition-all duration-200 text-[17px] md:text-[18px] cursor-pointer ${className}`}
    >
      {children || "QUERO CLAREZA AGORA — R$27"}
    </button>
  );
};
