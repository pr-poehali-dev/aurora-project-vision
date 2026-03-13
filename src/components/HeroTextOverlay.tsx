export default function HeroTextOverlay() {
  return (
    <div className="absolute top-30 md:top-48 left-8 z-10">
      <h1
        className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-3.5 opacity-100"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "rgb(0, 0, 0)",
          WebkitTextStroke: "5px white",
          paintOrder: "stroke fill",
        }}
      >
        LUCKY<br />BEAR
      </h1>
      <p className="text-foreground font-mono text-sm md:text-base max-w-xs tracking-widest lg:text-base">
        Партнёрская программа
        <br />
        казино нового поколения
      </p>
      <div className="flex gap-3 mt-5">
        <a href="#contact">
          <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono">
            Подключить
          </button>
        </a>
        <a href="#play">
          <button className="bg-transparent text-foreground border border-border px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-secondary transition-all duration-300 font-mono">
            Вы геймер? Играть →
          </button>
        </a>
      </div>
    </div>
  )
}