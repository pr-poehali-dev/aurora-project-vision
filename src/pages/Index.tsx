import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const CONTACT_1 = "https://t.me/ecalp"
const CONTACT_2 = "https://t.me/oyesxa"
const PROMO_LINK = "https://telegra.ph/EHksklyuzivnaya-akciya-dlya-partnerov-Vyplaty-za-pervye-depozity-02-06-2"

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
  "Приглашая субпартнёра — получайте 5–10% от его прибыли в зависимости от объёмов.",
]

const promoTools = [
  { label: "Баннеры" },
  { label: "Лендинги" },
  { label: "Видео" },
  { label: "Мобильные приложения" },
]

const geos = [
  { flag: "🇷🇺", code: "RU" },
  { flag: "🇰🇿", code: "KZ" },
  { flag: "🇺🇿", code: "UZ" },
  { flag: "🌍", code: "БУРЖ" },
  { flag: "₿", code: "CRYPTO" },
]

const reviews = [
  { name: "Алексей М.", handle: "@alex_traffic", text: "Работаю уже 6 месяцев, RevShare стабильно капает каждый понедельник. Честная платформа!" },
  { name: "Дмитрий К.", handle: "@dima_aff", text: "Лучший ретеншен из всех платформ, с которыми работал. Игроки возвращаются сами!" },
  { name: "Сергей П.", handle: "@sergey_arb", text: "CPA был у многих, но RevShare 65% — это другой уровень. Рекомендую всем." },
  { name: "Иван Л.", handle: "@ivan_media", text: "Менеджеры отвечают быстро, выплаты без задержек. Всё чётко и по делу." },
  { name: "Артём Н.", handle: "@artem_inf", text: "Webview модуль — огонь. Встроил в приложение за день, трафик пошёл сразу." },
  { name: "Михаил Д.", handle: "@misha_geo", text: "СНГ + бурж трафик принимают без проблем. Гео без ограничений — это редкость." },
  { name: "Олег Т.", handle: "@oleg_aff", text: "Выплаты каждый понедельник на игровой баланс, без вейджера. Просто мечта." },
  { name: "Роман С.", handle: "@roman_kaz", text: "Субпартнёрство работает. Привёл 3 человека, получаю пассив сверху." },
  { name: "Кирилл В.", handle: "@kirill_traffic", text: "Промо-материалы уже готовы под разные ГЕО. Запустился в первый же день." },
  { name: "Андрей Ф.", handle: "@andrey_flux", text: "Ретеншен действительно x3. Игроки LuckyBear возвращаются намного чаще." },
  { name: "Вадим Б.", handle: "@vadim_b", text: "Нет порога вывода — это огромный плюс для небольших объёмов трафика." },
  { name: "Павел Г.", handle: "@pavel_grow", text: "Честная аналитика в личном кабинете. Всё прозрачно до копейки." },
  { name: "Никита Ш.", handle: "@nikita_sh", text: "Быстро подключился, менеджер провёл по всем этапам. Старт без заморочек." },
  { name: "Глеб О.", handle: "@gleb_ops", text: "Гибридная модель скоро появится — жду с нетерпением. Пока RevShare топ." },
  { name: "Тимур А.", handle: "@timur_arb", text: "LuckyBear — единственная платформа, где не нужна регистрация игрока. Конверсия х2." },
  { name: "Юра П.", handle: "@yura_prf", text: "Субпартнёрство на 2 уровня — нашёл 5 партнёров, доход вырос в 1.5 раза." },
  { name: "Антон Р.", handle: "@anton_rev", text: "Crypto-гео закрывают — это редкость на рынке. Большой плюс для бурж трафика." },
  { name: "Степан М.", handle: "@stepan_m", text: "Акции для партнёров регулярные. Выплаты за первые депозиты — отдельный бонус." },
  { name: "Влад Н.", handle: "@vlad_net", text: "Платформа реально удобная. Игроки сами остаются, без дополнительных пушей." },
  { name: "Борис К.", handle: "@boris_kz", text: "Работаю из Казахстана — ГЕО KZ принимают без вопросов, выплаты в срок." },
]

const faqs = [
  { q: "Что такое аффилированная программа LuckyBear?", a: "Это партнёрская программа казино-платформы LuckyBear, которая позволяет зарабатывать на привлечении игроков по моделям RevShare, CPA или Hybrid." },
  { q: "Какие источники трафика принимаются?", a: "Принимаются практически все источники: органика, таргет, инфлюенс, ASO, SEO. Запрещён спам, мотивированный трафик и фрод." },
  { q: "Какие KPI для трафика?", a: "Минимальные требования обсуждаются индивидуально. Главное — качественные игроки с реальными депозитами." },
  { q: "Какие ГЕО принимаются к оплате?", a: "СНГ (RU, KZ, UZ и другие) + бурж + крипто-аудитория. Список постоянно расширяется." },
  { q: "Когда и как происходят выплаты?", a: "Каждый понедельник на игровой баланс. Без вейджера — деньги доступны сразу." },
]

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
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
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
                  <span className="mt-0.5">🐻</span>
                  <p className="text-foreground font-mono text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Models */}
        <section className="py-16 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            Модели сотрудничества
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* RevShare */}
            <div className="bg-card border border-primary rounded-2xl p-8 flex flex-col gap-3 relative overflow-hidden">
              <span className="text-primary font-mono text-sm opacity-60">01</span>
              <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-montserrat)" }}>RevShare</h3>
              <p className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-montserrat)" }}>50–65%</p>
              <p className="text-muted-foreground font-mono text-sm">от NGR. Стабильный пассивный доход — пока игроки играют.</p>
              <a href={CONTACT_1} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono w-full">
                  Подключить
                </button>
              </a>
            </div>
            {/* CPA */}
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-3">
              <span className="text-primary font-mono text-sm opacity-60">02</span>
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-montserrat)" }}>CPA</h3>
              <p className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-montserrat)" }}>20–100$</p>
              <p className="text-muted-foreground font-mono text-sm">за каждого привлечённого игрока с первым депозитом.</p>
              <a href={CONTACT_1} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-secondary text-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono w-full">
                  Узнать условия
                </button>
              </a>
            </div>
            {/* Hybrid */}
            <div className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-3">
              <span className="text-primary font-mono text-sm opacity-60">03</span>
              <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-montserrat)" }}>Hybrid</h3>
              <p className="text-4xl font-bold text-foreground" style={{ fontFamily: "var(--font-montserrat)" }}>CPA + %</p>
              <p className="text-muted-foreground font-mono text-sm">Фиксированная выплата за депозит + процент от дохода игрока.</p>
              <a href={CONTACT_2} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-secondary text-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono w-full">
                  Узнать условия
                </button>
              </a>
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
                <span className="text-lg mt-0.5">🐻</span>
                <p className="text-foreground font-mono text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sub-partnership */}
        <section className="py-12 px-4 md:px-0">
          <div className="bg-card border border-primary/40 rounded-4xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 text-[120px] opacity-10 select-none">🐻</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-montserrat)" }}>
              Суб-партнёрство
            </h2>
            <p className="text-muted-foreground font-mono text-sm mb-6 max-w-xl">
              Приглашай других партнёров и получай процент от их прибыли — пассивный доход без дополнительных усилий.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/40 rounded-2xl px-6 py-5 flex flex-col gap-2">
                <span className="text-primary text-3xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>5–10%</span>
                <span className="text-foreground font-mono text-sm">от чистой прибыли суб-партнёра</span>
                <span className="text-muted-foreground font-mono text-xs">% зависит от объёмов приведённых субагентов</span>
              </div>
              <div className="bg-secondary/40 rounded-2xl px-6 py-5 flex flex-col gap-2">
                <span className="text-primary text-3xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>2 уровня</span>
                <span className="text-foreground font-mono text-sm">Партнёр твоего партнёра тоже приносит доход</span>
                <span className="text-muted-foreground font-mono text-xs">Бесконечная сеть — бесконечный пассив</span>
              </div>
            </div>
          </div>
        </section>

        {/* Payouts */}
        <section className="py-4 px-4 md:px-0">
          <div
            className="rounded-4xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-border"
            style={{ background: "linear-gradient(135deg, hsl(43 96% 56% / 0.08) 0%, transparent 60%)" }}
          >
            <div className="text-6xl">💰</div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                Выплаты
              </h2>
              <p className="text-foreground font-mono text-base mb-2">
                <span className="text-primary font-bold">Каждый понедельник</span> — на игровой баланс
              </p>
              <p className="text-muted-foreground font-mono text-sm">Без вейджера. Деньги доступны сразу после зачисления.</p>
            </div>
          </div>
        </section>

        {/* Promo / Action */}
        <section className="py-12 px-4 md:px-0">
          <div className="bg-card border border-primary rounded-4xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-primary font-mono text-xs uppercase tracking-widest mb-2 block">Эксклюзивная акция</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                Выплаты за первые депозиты
              </h2>
              <p className="text-muted-foreground font-mono text-sm max-w-md">
                Специальные бонусные условия для партнёров за первые депозиты привлечённых игроков. Подробности по ссылке.
              </p>
            </div>
            <a href={PROMO_LINK} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 font-mono flex items-center gap-2 whitespace-nowrap">
                Подробнее об акции
                <Icon name="ArrowUpRight" size={18} />
              </button>
            </a>
          </div>
        </section>

        {/* GEO */}
        <section className="py-8 px-4 md:px-0">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>ГЕО</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            {geos.map((geo, i) => (
              <div key={i} className="bg-card border border-border hover:border-primary transition-colors duration-200 rounded-2xl px-8 py-6 flex flex-col items-center gap-2 cursor-default">
                <span className="text-3xl">{geo.flag}</span>
                <span className="text-foreground font-mono font-bold text-sm">{geo.code}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground font-mono text-xs mt-4">СНГ · БУРЖ · CRYPTO</p>
        </section>

        {/* Promo Tools */}
        <section
          className="relative rounded-4xl py-12 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border mb-8"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="px-6 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
              Промо-материалы для партнёров
            </h2>
            <p className="text-muted-foreground font-mono text-sm text-center mb-10 max-w-2xl mx-auto">
              Широкий выбор инструментов: запускайтесь в первый же день без лишних усилий
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {promoTools.map((tool, i) => (
                <div key={i} className="bg-secondary/40 rounded-2xl px-6 py-8 flex flex-col items-center gap-3 hover:bg-secondary/70 transition-colors duration-200">
                  <span>🐻</span>
                  <span className="text-foreground font-mono text-sm font-semibold text-center">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-12 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            Отзывы <span className="text-primary">партнёров</span>
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="break-inside-avoid bg-card border border-border rounded-2xl p-5 flex flex-col gap-3 hover:border-primary/50 transition-colors duration-200">
                <p className="text-foreground font-mono text-sm leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-2 pt-1 border-t border-border">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-foreground font-mono text-xs font-semibold">{r.name}</p>
                    <p className="text-muted-foreground font-mono text-xs">{r.handle}</p>
                  </div>
                  <span className="ml-auto text-primary text-sm">★★★★★</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-montserrat)" }}>
            Часто задаваемые вопросы
          </h2>
          <div className="flex flex-col gap-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-200">
                <summary className="flex items-center gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="text-sm">🐻</span>
                  <span className="text-foreground font-mono text-sm flex-1">{faq.q}</span>
                  <Icon name="ChevronDown" className="text-muted-foreground h-4 w-4 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground font-mono text-sm leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default Index
