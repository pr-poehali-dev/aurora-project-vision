import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const advantages = [
  "В 3 раза выше ретеншен, по сравнению с обычным казино",
  "Рекомендуют более 10 000+ инфлюенсеров",
  "Не требуется регистрация пользователя",
  "Удобный и понятный интерфейс",
  "Webview модуль для интеграции в приложения",
  "Промо-материалы для партнёров",
  "Широкий выбор платёжных методов",
  "Все известные мировые игровые продукты",
]

const revshareAdvantages = [
  "Стабильный пассивный доход — получайте свой процент, пока платформа работает.",
  "Источники трафика практически не ограничены — главное, чтобы пользователи активно играли.",
  "RevShare предусматривает больший профит, чем CPA-модель.",
  "Таргетирование по ЦА позволяет увеличить прибыль ещё больше.",
  "Приглашая субпартнёра — получайте 10% от его прибыли. Его партнёр — ещё 2%.",
]

const promoTools = [
  { icon: "Image", label: "Баннеры" },
  { icon: "Layout", label: "Лендинги" },
  { icon: "Video", label: "Видео" },
  { icon: "Smartphone", label: "Мобильные приложения" },
]

const faqs = [
  "Что такое аффилированная программа LuckyBear?",
  "Какие источники трафика принимаются и что запрещено?",
  "Какие KPI для трафика?",
  "Какие ГЕО принимаются к оплате?",
  "Преимущества RevShare модели",
]

const geos = ["🇷🇺 RU", "🇰🇿 KZ", "🇺🇿 UZ"]

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">

        {/* Hero */}
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        {/* Why LuckyBear */}
        <section
          className="relative rounded-4xl py-12 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border mt-8"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
              Почему с <span className="text-primary">Lucky Bear Partners</span> выгодно?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-secondary/40 rounded-2xl px-5 py-4">
                  <span className="text-primary mt-0.5">🐻</span>
                  <p className="text-foreground font-mono text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Models */}
        <section className="py-16 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            Модели оплаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-primary rounded-2xl p-8 flex flex-col gap-3 relative overflow-hidden">
              <span className="text-primary font-mono text-sm opacity-60">01</span>
              <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-montserrat)" }}>RevShare 55%</h3>
              <p className="text-muted-foreground font-mono text-sm">Получайте 55% от дохода платформы с ваших пользователей</p>
              <a href="#contact">
                <button className="mt-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono">
                  Подключить
                </button>
              </a>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-3 opacity-60">
              <span className="text-muted-foreground font-mono text-sm">02</span>
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-montserrat)" }}>CPA</h3>
              <span className="text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1 w-fit">COMING SOON</span>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-3 opacity-60">
              <span className="text-muted-foreground font-mono text-sm">03</span>
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-montserrat)" }}>Hybrid</h3>
              <span className="text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1 w-fit">COMING SOON</span>
            </div>
          </div>
        </section>

        {/* RevShare Advantages */}
        <section className="py-8 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            Преимущества <span className="text-primary">RevShare</span> модели
          </h2>
          <div className="flex flex-col gap-4">
            {revshareAdvantages.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-2xl px-6 py-5">
                <span className="text-primary text-lg mt-0.5">🐻</span>
                <p className="text-foreground font-mono text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GEO */}
        <section className="py-12 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>ГЕО</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            {geos.map((geo, i) => (
              <div key={i} className="bg-card border border-primary rounded-2xl px-10 py-6 flex flex-col items-center gap-2">
                <span className="text-3xl">{geo.split(" ")[0]}</span>
                <span className="text-foreground font-mono font-bold text-lg">{geo.split(" ")[1]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Promo Tools */}
        <section
          className="relative rounded-4xl py-12 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border mb-8"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
              Увеличьте доходы с нашей партнёрской программой
            </h2>
            <p className="text-muted-foreground font-mono text-sm text-center mb-10 max-w-2xl mx-auto">
              Широкий выбор маркетинговых инструментов, которые помогут продвигать акции и конвертировать трафик в клиентов
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {promoTools.map((tool, i) => (
                <div key={i} className="bg-secondary/40 rounded-2xl px-6 py-8 flex flex-col items-center gap-3">
                  <span className="text-primary">🐻</span>
                  <span className="text-foreground font-mono text-sm font-semibold">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            Часто задаваемые вопросы
          </h2>
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {faqs.map((q, i) => (
              <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-5 cursor-pointer hover:border-primary transition-colors duration-200">
                <span className="text-primary">🐻</span>
                <span className="text-foreground font-mono text-sm">{q}</span>
                <Icon name="ChevronDown" className="ml-auto text-muted-foreground h-4 w-4 flex-shrink-0" />
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default Index
