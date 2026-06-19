import { useState } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/e871f9d1-db39-4ef4-bd6b-9bd81a12ee46/files/9d89e7e9-9dd0-4693-b422-a9193916fef0.jpg';

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-100 flex items-center justify-center shadow-md">
      <div className="w-6 h-6 rounded-[4px] bg-emerald-500 border-2 border-emerald-700" />
    </div>
    <span className="font-pixel text-sm md:text-base leading-tight text-slate-800">
      Legacy<br />Craft World
    </span>
  </div>
);

const features = [
  { icon: 'Users', bg: 'from-sky-400 to-sky-500', title: 'Комьюнити', text: 'Дружное сообщество без токсичности и гриферов.' },
  { icon: 'PartyPopper', bg: 'from-orange-400 to-orange-500', title: 'Ивенты', text: 'Еженедельные события с крутыми наградами.' },
  { icon: 'Wifi', bg: 'from-emerald-400 to-emerald-500', title: 'Стабильный онлайн', text: 'Сервер работает 24/7 без лагов и вылетов.' },
  { icon: 'Puzzle', bg: 'from-violet-400 to-violet-500', title: 'Плагины', text: 'Кланы, экономика, квесты и уникальные механики.' },
];

const news = [
  { tag: 'Обновление', tagBg: 'bg-emerald-400 text-emerald-950', bg: 'bg-emerald-400', icon: 'Sprout', title: 'Новый биом — Лавандовые поля', text: 'Исследуйте мягкие холмы с редкими ресурсами и тайными данжами.' },
  { tag: 'Ивент', tagBg: 'bg-orange-400 text-orange-950', bg: 'bg-orange-400', icon: 'PartyPopper', title: 'Фестиваль строителей', text: 'Соревнование на лучшую постройку. Призы: алмазы и VIP-статус!' },
  { tag: 'Экономика', tagBg: 'bg-violet-400 text-violet-950', bg: 'bg-violet-400', icon: 'Banknote', title: 'Запуск аукциона', text: 'Торгуйте предметами с другими игроками прямо на спавне.' },
];

const aboutCards = [
  { bg: 'from-sky-100 to-sky-200/60 border-sky-200', icon: 'TreePine', title: 'Выживание', text: 'Классический survival с дружелюбными правилами.' },
  { bg: 'from-emerald-100 to-emerald-200/60 border-emerald-200', icon: 'Gem', title: 'Экономика', text: 'Своя валюта, магазины и игровой рынок.' },
  { bg: 'from-rose-100 to-rose-200/60 border-rose-200', icon: 'Swords', title: 'PvP и арены', text: 'Сражения на специальных аренах за награды.' },
  { bg: 'from-indigo-100 to-indigo-200/60 border-indigo-200', icon: 'Shield', title: 'Кланы', text: 'Создавай гильдию и захватывай территории.' },
  { bg: 'from-amber-100 to-amber-200/60 border-amber-200', icon: 'ScrollText', title: 'Квесты', text: 'Десятки заданий с уникальными сюжетами.' },
  { bg: 'from-orange-100 to-orange-200/60 border-orange-200', icon: 'Trophy', title: 'Достижения', text: 'Открывай ачивки и получай бонусы.' },
];

const stats = [
  { bg: 'bg-emerald-400', value: '12 480', label: 'игроков всего' },
  { bg: 'bg-sky-400', value: '5 926', label: 'сейчас онлайн' },
  { bg: 'bg-amber-400', value: '24/7', label: 'аптайм' },
];

const donates = [
  { icon: 'Star', bg: 'from-sky-400 to-sky-500', name: 'Hero', price: '30 ₽' },
  { icon: 'Sparkles', bg: 'from-emerald-400 to-emerald-500', name: 'Titan', price: '70 ₽' },
  { icon: 'Wand2', bg: 'from-violet-400 to-violet-500', name: 'Magister', price: '500 ₽' },
  { icon: 'Crown', bg: 'from-orange-400 to-orange-500', name: 'Imperator', price: '850 ₽' },
  { icon: 'Flame', bg: 'from-rose-400 to-rose-500', name: 'Dragon', price: '1 700 ₽', hit: true },
  { icon: 'Zap', bg: 'from-amber-400 to-amber-500', name: 'God', price: '4 444 ₽' },
];

const versions = ['1.16.5', '1.17.1', '1.18.2', '1.19.2', '1.20.1'];

const SectionTitle = ({ emoji, children }: { emoji: string; children: React.ReactNode }) => (
  <h2 className="flex items-center gap-4 mb-10 font-pixel text-2xl md:text-4xl text-emerald-500 [text-shadow:2px_2px_0_rgba(0,0,0,0.08)]">
    <span className="text-3xl md:text-5xl">{emoji}</span>
    <span className="bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">{children}</span>
  </h2>
);

const Index = () => {
  const [copied, setCopied] = useState(false);
  const [activeVer, setActiveVer] = useState('1.20.1');

  const copyIp = () => {
    navigator.clipboard?.writeText('mc.legacycraftworld.ru');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-soft-gradient">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b-4 border-emerald-400">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-10 font-bold text-slate-700">
            <a href="#home" className="hover:text-emerald-500 transition-colors">Главная</a>
            <a href="#about" className="hover:text-emerald-500 transition-colors">О сервере</a>
            <a href="#donate" className="hover:text-emerald-500 transition-colors">Донаты</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section id="home" className="pt-10 animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden card-soft border-4 border-white">
            <img src={HERO_IMG} alt="Legacy Craft World" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-200/70 via-transparent to-transparent" />
            <div className="relative p-8 md:p-14 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-6">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse-dot" />
                <span className="font-bold text-slate-800 text-sm">Сервер онлайн</span>
              </div>
              <h1 className="font-pixel text-3xl md:text-6xl text-white leading-tight [text-shadow:3px_3px_0_rgba(80,100,140,0.35)] mb-6">
                LEGACY<br />CRAFT<br />WORLD
              </h1>
              <p className="text-white/95 text-lg font-medium mb-8 max-w-md [text-shadow:0_1px_4px_rgba(0,0,0,0.25)]">
                Уютный мир приключений, дружное комьюнити и куча ивентов. Заходи и стань частью легенды!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={copyIp} className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-lg font-mono font-bold text-slate-800 hover:scale-[1.02] transition-transform">
                  <Icon name="Server" size={20} className="text-slate-500" />
                  mc.legacycraftworld.ru
                  <Icon name={copied ? 'Check' : 'Copy'} size={18} className="text-slate-400" />
                </button>
                <button className="btn-orange text-white font-bold text-lg rounded-2xl px-8 py-4 hover:scale-[1.03] transition-transform">
                  Играть сейчас
                </button>
              </div>
            </div>
          </div>

          {/* version + online */}
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 bg-white rounded-3xl p-7 card-soft">
              <p className="font-bold text-slate-700 mb-4">Выбери версию клиента:</p>
              <div className="flex flex-wrap gap-3">
                {versions.map((v) => (
                  <button
                    key={v}
                    onClick={() => setActiveVer(v)}
                    className={`font-pixel text-xs px-5 py-4 rounded-xl transition-all ${
                      activeVer === v ? 'bg-emerald-500 text-white shadow-md scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-emerald-400 rounded-3xl p-7 card-soft flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/40 flex items-center justify-center">
                <Icon name="Users" size={30} className="text-white" />
              </div>
              <div>
                <div className="font-pixel text-2xl md:text-3xl text-white">5 926</div>
                <div className="text-emerald-950 font-semibold mt-1">игроков онлайн</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="py-20">
          <SectionTitle emoji="✨">Почему Legacy Craft World?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-3xl p-7 card-soft hover:-translate-y-1.5 transition-transform">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.bg} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon name={f.icon} size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 mb-2">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NEWS */}
        <section className="pb-20">
          <SectionTitle emoji="📰">Свежие новости</SectionTitle>
          <div className="grid md:grid-cols-3 gap-7">
            {news.map((n) => (
              <article key={n.title} className="bg-white rounded-3xl overflow-hidden card-soft hover:-translate-y-1.5 transition-transform">
                <div className={`${n.bg} h-44 flex items-center justify-center`}>
                  <Icon name={n.icon} size={56} className="text-white drop-shadow" />
                </div>
                <div className="p-7">
                  <span className={`inline-block ${n.tagBg} font-bold text-sm rounded-full px-4 py-1.5 mb-4`}>{n.tag}</span>
                  <h3 className="font-bold text-xl text-slate-800 mb-3">{n.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-5">{n.text}</p>
                  <a href="#" className="inline-flex items-center gap-2 font-bold text-emerald-500 hover:gap-3 transition-all">
                    Подробнее <Icon name="ArrowRight" size={18} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WIPE TIMER */}
        <section className="pb-20">
          <div className="bg-warm-gradient rounded-3xl border-4 border-amber-200 card-soft p-8 md:p-12 relative overflow-hidden">
            <Icon name="AlarmClock" size={220} className="absolute -right-10 -top-10 text-amber-200/50" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 btn-orange text-white font-bold rounded-full px-5 py-2.5 mb-6">
                <Icon name="Hourglass" size={16} /> Следующий вайп
              </span>
              <h2 className="font-pixel text-2xl md:text-4xl text-slate-800 mb-6 [text-shadow:2px_2px_0_rgba(0,0,0,0.08)]">
                Большое обновление уже скоро!
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mb-8 leading-relaxed">
                После вайпа: новая карта, переработанная экономика, эксклюзивные данжи и секретный биом. Успей построить — лучшие постройки будут сохранены в музее сервера.
              </p>
              <div className="flex gap-5">
                {[{ v: '14', l: 'дней' }, { v: '07', l: 'часов' }, { v: '32', l: 'минут' }].map((t) => (
                  <div key={t.l} className="bg-white rounded-2xl px-6 py-5 text-center card-soft min-w-[100px]">
                    <div className="font-pixel text-3xl text-rose-500">{t.v}</div>
                    <div className="text-slate-500 font-medium mt-2">{t.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="pb-20">
          <SectionTitle emoji="🏰">О сервере</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutCards.map((c) => (
              <div key={c.title} className={`bg-gradient-to-br ${c.bg} border-2 rounded-3xl p-7 hover:-translate-y-1.5 transition-transform`}>
                <Icon name={c.icon} size={40} className="text-slate-700 mb-5" />
                <h3 className="font-bold text-xl text-slate-800 mb-2">{c.title}</h3>
                <p className="text-slate-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {stats.map((s) => (
              <div key={s.label} className={`${s.bg} rounded-3xl p-8 text-center card-soft`}>
                <div className="font-pixel text-3xl md:text-4xl text-white [text-shadow:2px_2px_0_rgba(0,0,0,0.15)]">{s.value}</div>
                <div className="text-white/90 font-semibold mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DONATE */}
        <section id="donate" className="pb-20">
          <h2 className="text-center font-pixel text-2xl md:text-4xl mb-12 bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            Донат привилегии
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {donates.map((d) => (
              <div
                key={d.name}
                className={`relative bg-white rounded-3xl p-7 card-soft hover:-translate-y-1.5 transition-transform ${
                  d.hit ? 'border-4 border-rose-400' : ''
                }`}
              >
                {d.hit && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 btn-orange text-white font-bold text-sm rounded-full px-5 py-2 flex items-center gap-1">
                    🔥 ХИТ
                  </span>
                )}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${d.bg} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon name={d.icon} size={28} className="text-white" />
                </div>
                <h3 className="font-pixel text-lg text-slate-800 mb-3">{d.name}</h3>
                <div className="font-pixel text-2xl text-emerald-500 mb-6">{d.price}</div>
                <button className="btn-orange w-full text-white font-bold rounded-2xl py-4 hover:scale-[1.02] transition-transform">
                  Купить
                </button>
                <p className="flex items-center justify-center gap-2 text-slate-400 text-sm mt-4">
                  <Icon name="Hourglass" size={14} /> Покупка пока недоступна — скоро!
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-100 flex items-center justify-center">
                <div className="w-7 h-7 rounded-[4px] bg-emerald-500 border-2 border-emerald-700" />
              </div>
              <div>
                <div className="font-pixel text-base">Legacy Craft World</div>
                <div className="text-slate-400 mt-1">Уютный Minecraft-сервер</div>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 transition-colors rounded-2xl px-6 py-4 font-bold">наш ВК</a>
              <a href="#home" className="btn-orange rounded-2xl px-6 py-4 font-bold flex items-center gap-2">
                <Icon name="ArrowUp" size={18} /> Наверх
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-10 pt-8 text-center text-slate-400">
            © 2026 Legacy Craft World. Не является официальным продуктом Mojang.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
