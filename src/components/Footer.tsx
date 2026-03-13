import Icon from "@/components/ui/icon"

export default function Footer() {
  return (
    <footer className="w-full px-6 relative py-[0] mt-16 h-auto mb-0 bg-card">
      <div className="absolute top-8 right-6 text-accent text-2xl">+</div>
      <div className="absolute top-1/2 right-12 text-accent text-lg transform -translate-y-1/2">*</div>
      <div className="absolute bottom-12 right-20 text-accent text-xl">+</div>
      <div className="absolute top-16 right-32 text-accent text-sm">*</div>
      <div className="absolute bottom-8 right-8 text-accent text-lg">*</div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between pt-16 pb-8">
          <div className="flex-1 max-w-lg">
            <h2
              className="text-foreground text-4xl md:text-5xl mb-8 leading-[3.5rem] md:leading-[4rem] font-semibold text-center md:text-left mt-0"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Увеличьте доходы<br />с LuckyBear.
            </h2>

            <div className="space-y-4 text-foreground">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Партнёрская программа с RevShare 55% — стабильный доход без потолка.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">*</span>
                <p className="text-sm font-mono">Работаем с RU, KZ, UZ. Присоединяйтесь уже сегодня.</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 justify-end items-center text-9xl select-none">
            🐻
          </div>
        </div>

        <div id="contact" className="w-full px-6 py-16 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0 border-t border-border">
          <div className="flex flex-col md:flex-row gap-2 text-center md:text-left">
            <h2 className="text-foreground font-mono text-xl font-bold">Стать партнёром LuckyBear</h2>
            <p className="text-muted-foreground font-mono font-normal text-base">RevShare 55% с первого дня</p>
          </div>

          <a href="https://t.me/luckybear_partners" target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg whitespace-nowrap hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono flex items-center gap-2">
              Подключить
              <Icon name="ArrowUpRight" size={20} />
            </button>
          </a>
        </div>

        <div className="w-full px-6 py-4 border-t border-border flex md:flex-row items-center justify-between gap-2 flex-row">
          <p className="text-muted-foreground text-sm font-mono">© 2025 LUCKYBEAR DAO. ALL RIGHTS RESERVED</p>
          <p className="text-muted-foreground text-sm font-mono">Partners</p>
        </div>
      </div>
    </footer>
  )
}
