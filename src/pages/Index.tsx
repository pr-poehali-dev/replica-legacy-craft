import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/e871f9d1-db39-4ef4-bd6b-9bd81a12ee46/files/9d89e7e9-9dd0-4693-b422-a9193916fef0.jpg';
const LOGO_IMG = 'https://cdn.poehali.dev/projects/e871f9d1-db39-4ef4-bd6b-9bd81a12ee46/bucket/04e671ab-3ed5-4b44-98bb-7c648287bc12.jpeg';
const VK_LINK = 'https://vk.com/club239656436';
const WIPE_DATE = new Date('2026-07-10T12:00:00');

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-md ring-2 ring-white/70">
      <img src={LOGO_IMG} alt="LCW" className="w-full h-full object-cover" />
    </div>
    <span className="font-pixel text-sm md:text-base leading-tight text-white drop-shadow-sm">
      Legacy<br />Craft World
    </span>
  </div>
);

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#about', label: 'О сервере' },
  { href: '#donate', label: 'Донаты' },
  { href: '#publics', label: 'Паблики' },
];

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
  { bg: 'from-sky-100 to-sky-200/70 border-sky-200', icon: 'TreePine', title: 'Выживание', text: 'Классический survival с дружелюбными правилами.' },
  { bg: 'from-emerald-100 to-emerald-200/70 border-emerald-200', icon: 'Gem', title: 'Экономика', text: 'Своя валюта, магазины и игровой рынок.' },
  { bg: 'from-orange-100 to-orange-200/70 border-orange-200', icon: 'Swords', title: 'PvP и арены', text: 'Сражения на специальных аренах за награды.' },
  { bg: 'from-amber-100 to-amber-200/70 border-amber-200', icon: 'Shield', title: 'Кланы', text: 'Создавай гильдию и захватывай территории.' },
  { bg: 'from-yellow-100 to-yellow-200/70 border-yellow-200', icon: 'ScrollText', title: 'Квесты', text: 'Десятки заданий с уникальными сюжетами.' },
  { bg: 'from-green-100 to-green-200/70 border-green-200', icon: 'Trophy', title: 'Достижения', text: 'Открывай ачивки и получай бонусы.' },
];

const stats = [
  { bg: 'bg-emerald-400', value: '12 480', label: 'игроков всего' },
  { bg: 'bg-sky-400', value: '5 926', label: 'сейчас онлайн' },
  { bg: 'bg-amber-400', value: '24/7', label: 'аптайм' },
];

const vkContent = [
  { icon: 'PlayCircle', color: 'text-rose-500', bg: 'bg-rose-50', title: 'Обзоры', text: 'Видео-туры по лучшим постройкам и новым биомам сервера.' },
  { icon: 'Lightbulb', color: 'text-amber-500', bg: 'bg-amber-50', title: 'Лайфхаки', text: 'Секреты фарма, крафты и способы быстро разбогатеть.' },
  { icon: 'Sparkles', color: 'text-violet-500', bg: 'bg-violet-50', title: 'Фишки', text: 'Скрытые механики, пасхалки и редкие предметы.' },
  { icon: 'Trophy', color: 'text-emerald-500', bg: 'bg-emerald-50', title: 'Ивенты', text: 'Анонсы турниров, конкурсов и розыгрышей.' },
];

const donates = [
  { icon: 'Star', bg: 'from-sky-400 to-sky-500', btn: 'btn-blue', name: 'Hero', price: '30 ₽' },
  { icon: 'Sparkles', bg: 'from-emerald-400 to-emerald-500', btn: 'btn-green', name: 'Titan', price: '70 ₽' },
  { icon: 'Wand2', bg: 'from-violet-400 to-violet-500', btn: 'btn-blue', name: 'Magister', price: '500 ₽' },
  { icon: 'Crown', bg: 'from-orange-400 to-orange-500', btn: 'btn-orange', name: 'Imperator', price: '850 ₽' },
  { icon: 'Flame', bg: 'from-rose-400 to-orange-500', btn: 'btn-orange', name: 'Dragon', price: '1 700 ₽', hit: true },
  { icon: 'Zap', bg: 'from-amber-400 to-yellow-500', btn: 'btn-yellow', name: 'God', price: '4 444 ₽' },
];

const publics = [
  { icon: 'Users', name: 'Группа ВКонтакте', desc: 'Новости, ивенты и розыгрыши сервера.', btn: 'btn-blue', link: VK_LINK, label: 'Перейти в ВК', soon: false },
  { icon: 'MessageCircle', name: 'Канал MAX', desc: 'Скоро здесь появится наш канал!', btn: 'btn-green', link: '', label: 'Скоро', soon: true },
];

const versions = ['1.16.5', '1.17.1', '1.18.2', '1.19.2', '1.20.1', 'и другие'];

const SectionTitle = ({ emoji, children, center = false }: { emoji: string; children: React.ReactNode; center?: boolean }) => (
  <h2 className={`flex items-center gap-4 mb-10 font-pixel text-2xl md:text-4xl ${center ? 'justify-center' : ''}`}>
    <span className="text-3xl md:text-5xl">{emoji}</span>
    <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">{children}</span>
  </h2>
);

const Index = () => {
  const [copied, setCopied] = useState(false);
  const [activeVer, setActiveVer] = useState('1.20.1');
  const [left, setLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const tick = () => {
      const diff = WIPE_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setLeft({ d: '00', h: '00', m: '00', s: '00' });
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const p = (n: number) => String(n).padStart(2, '0');
      setLeft({ d: p(d), h: p(h), m: p(m), s: p(s) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const copyIp = () => {
    navigator.clipboard?.writeText('mc.legacycraftworld.ru');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-soft-gradient">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b-4 border-emerald-400/60" style={{background: 'linear-gradient(135deg, rgba(16,185,129,0.92) 0%, rgba(14,165,233,0.92) 50%, rgba(139,92,246,0.88) 100%)', backdropFilter: 'blur(12px)'}}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 font-bold text-white">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-yellow-300 transition-colors drop-shadow-sm">{l.label}</a>
            ))}
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
                Лучший Minecraft-сервер для выживания и игры с друзьями. Подключайся и играй!
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
                <a href={VK_LINK} target="_blank" rel="noopener noreferrer" className="btn-blue text-white font-bold text-lg rounded-2xl px-8 py-4 hover:scale-[1.03] transition-transform flex items-center gap-2 justify-center">
                  <Icon name="Users" size={20} /> Перейти в ВК
                </a>
              </div>
            </div>
          </div>

          {/* version + online */}
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 rounded-3xl p-7 card-soft" style={{background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)'}}>
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
              <div key={f.title} className="rounded-3xl p-7 card-soft hover:-translate-y-1.5 transition-transform" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f1f5f9 100%)', border: '1.5px solid #e2e8f0'}}>
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
              <article key={n.title} className="rounded-3xl overflow-hidden card-soft hover:-translate-y-1.5 transition-transform" style={{background: 'linear-gradient(160deg, #fafffe 0%, #f0f9ff 60%, #fdf4ff 100%)', border: '1.5px solid #e2e8f0'}}>
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

          {/* VK CHANNEL BLOCK */}
          <div className="mt-10 rounded-3xl overflow-hidden card-soft" style={{background: 'linear-gradient(135deg, #1a76d2 0%, #0d5faf 60%, #0a4a8f 100%)'}}>
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={34} className="text-white" />
                </div>
                <div>
                  <div className="text-white/70 font-semibold text-sm mb-1 uppercase tracking-wider">ВКонтакте</div>
                  <h3 className="font-pixel text-xl md:text-2xl text-white leading-tight">Наш VK-канал</h3>
                  <p className="text-white/80 mt-1">Обзоры, лайфхаки, фишки и анонсы — всё в одном месте</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {vkContent.map((v) => (
                  <div key={v.title} className="bg-white/10 rounded-2xl p-5 hover:bg-white/20 transition-colors">
                    <div className={`w-10 h-10 rounded-xl ${v.bg} flex items-center justify-center mb-3`}>
                      <Icon name={v.icon} size={20} className={v.color} />
                    </div>
                    <h4 className="font-bold text-white mb-1">{v.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
              <a
                href={VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold text-lg rounded-2xl px-8 py-4 hover:scale-[1.03] hover:bg-blue-50 transition-all shadow-lg"
              >
                <Icon name="ExternalLink" size={22} />
                Перейти в ВК
              </a>
            </div>
          </div>
        </section>

        {/* DONATE */}
        <section id="donate" className="pb-20">
          <SectionTitle emoji="💎" center>Донат привилегии</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {donates.map((d) => (
              <div
                key={d.name}
                className={`relative rounded-3xl p-7 card-soft hover:-translate-y-1.5 transition-transform ${
                  d.hit ? 'border-4 border-rose-400' : 'border border-slate-100'
                }`}
                style={{background: 'linear-gradient(145deg, #ffffff 0%, #f8faff 50%, #f0fdf4 100%)'}}
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
                <button className={`${d.btn} w-full text-white font-bold rounded-2xl py-4 hover:scale-[1.02] transition-transform`}>
                  Купить
                </button>
                <p className="flex items-center justify-center gap-2 text-slate-400 text-sm mt-4">
                  <Icon name="Hourglass" size={14} /> Покупка пока недоступна — скоро!
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PUBLICS */}
        <section id="publics" className="pb-20">
          <SectionTitle emoji="📣">Наши паблики</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-7">
            {publics.map((p) => (
              <div key={p.name} className="rounded-3xl p-8 card-soft hover:-translate-y-1.5 transition-transform flex flex-col" style={{background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)', border: '1.5px solid #bfdbfe'}}>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-16 h-16 rounded-2xl ${p.btn} flex items-center justify-center shadow-lg`}>
                    <Icon name={p.icon} size={30} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-800 flex items-center gap-2 flex-wrap">
                    {p.name}
                    {p.soon && <span className="bg-amber-400 text-amber-950 text-xs font-bold rounded-full px-3 py-1">скоро</span>}
                  </h3>
                </div>
                <p className="text-slate-500 leading-relaxed mb-6 flex-1">{p.desc}</p>
                {p.soon ? (
                  <button disabled className="bg-slate-200 text-slate-500 font-bold rounded-2xl py-4 cursor-not-allowed">
                    {p.label}
                  </button>
                ) : (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className={`${p.btn} text-white font-bold rounded-2xl py-4 text-center hover:scale-[1.02] transition-transform`}>
                    {p.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* RECRUITMENT */}
        <section className="pb-20">
          <div className="rounded-3xl overflow-hidden card-soft relative" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)'}}>
            {/* Decorative orbs */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, #ef4444 0%, transparent 70%)'}} />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none" style={{background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'}} />

            <div className="relative p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white font-bold rounded-full px-5 py-2.5 mb-5 text-sm border border-white/20">
                  <Icon name="Sparkles" size={16} /> Открытый набор
                </span>
                <h2 className="font-pixel text-2xl md:text-4xl text-white mb-3 [text-shadow:0_0_30px_rgba(255,255,255,0.2)]">
                  Стань частью команды!
                </h2>
                <p className="text-slate-300 text-lg max-w-xl mx-auto">Мы ищем преданных игроков, готовых помогать серверу расти и развиваться</p>
              </div>

              {/* Two columns */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* ADMIN */}
                <div className="rounded-2xl p-7 relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-default" style={{background: 'linear-gradient(145deg, rgba(239,68,68,0.15) 0%, rgba(185,28,28,0.25) 100%)', border: '1.5px solid rgba(239,68,68,0.4)'}}>
                  <div className="absolute -right-6 -top-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon name="Shield" size={120} className="text-red-400" />
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{background: 'linear-gradient(135deg, #ef4444, #b91c1c)'}}>
                      <Icon name="ShieldCheck" size={28} className="text-white" />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 font-bold text-xs rounded-full px-3 py-1.5 mb-3 border border-red-500/30">
                      🔴 АДМИНИСТРАТОР
                    </div>
                    <h3 className="font-pixel text-xl text-white mb-3">Набор в Администрацию</h3>
                    <ul className="space-y-2 mb-5">
                      {['Опыт игры от 3 месяцев', 'Умение решать конфликты', 'Активность каждый день', 'Стрессоустойчивость'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-red-300/80 text-sm italic">Подробности и анкета — в нашей группе ВКонтакте</p>
                  </div>
                </div>

                {/* MODER */}
                <div className="rounded-2xl p-7 relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-default" style={{background: 'linear-gradient(145deg, rgba(59,130,246,0.15) 0%, rgba(29,78,216,0.25) 100%)', border: '1.5px solid rgba(59,130,246,0.4)'}}>
                  <div className="absolute -right-6 -top-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon name="Eye" size={120} className="text-blue-400" />
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg" style={{background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)'}}>
                      <Icon name="Eye" size={28} className="text-white" />
                    </div>
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-full px-3 py-1.5 mb-3 border border-blue-500/30">
                      🔵 МОДЕРАТОР
                    </div>
                    <h3 className="font-pixel text-xl text-white mb-3">Набор в Модерацию</h3>
                    <ul className="space-y-2 mb-5">
                      {['Знание правил сервера', 'Вежливость и терпение', 'Онлайн от 2 часов в день', 'Возраст от 14 лет'].map(item => (
                        <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-blue-300/80 text-sm italic">Подробности и анкета — в нашей группе ВКонтакте</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <p className="text-slate-400 text-center">Все анкеты принимаются только через ВКонтакте</p>
                <a
                  href={VK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 font-bold text-lg rounded-2xl px-8 py-4 hover:scale-[1.03] transition-all shadow-xl flex-shrink-0"
                  style={{background: 'linear-gradient(135deg, #ef4444 0%, #8b5cf6 50%, #3b82f6 100%)', color: 'white'}}
                >
                  <Icon name="ExternalLink" size={20} />
                  Подать заявку в ВК
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WIPE TIMER (bottom) */}
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
              <p className="text-slate-600 text-lg max-w-2xl mb-4 leading-relaxed">
                После вайпа: новая карта, переработанная экономика, эксклюзивные данжи и секретный биом. Успей построить — лучшие постройки будут сохранены в музее сервера.
              </p>
              <p className="text-slate-500 font-semibold mb-8">📅 10 июля 2026 года, 12:00</p>
              <div className="flex flex-wrap gap-5">
                {[{ v: left.d, l: 'дней' }, { v: left.h, l: 'часов' }, { v: left.m, l: 'минут' }, { v: left.s, l: 'секунд' }].map((t) => (
                  <div key={t.l} className="rounded-2xl px-6 py-5 text-center card-soft min-w-[100px]" style={{background: 'linear-gradient(145deg, #fff7ed 0%, #fef3c7 100%)', border: '1.5px solid #fcd34d'}}>
                    <div className="font-pixel text-3xl text-rose-500 tabular-nums">{t.v}</div>
                    <div className="text-slate-500 font-medium mt-2">{t.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-white/20">
                <img src={LOGO_IMG} alt="LCW" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-pixel text-base">Legacy Craft World</div>
                <div className="text-slate-400 mt-1">Уютный Minecraft-сервер</div>
              </div>
            </div>
            <div className="flex gap-4">
              <a href={VK_LINK} target="_blank" rel="noopener noreferrer" className="btn-blue rounded-2xl px-6 py-4 font-bold text-white hover:scale-[1.02] transition-transform">наш ВК</a>
              <a href="#home" className="btn-orange rounded-2xl px-6 py-4 font-bold flex items-center gap-2 text-white hover:scale-[1.02] transition-transform">
                <Icon name="ArrowUp" size={18} /> Наверх
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-10 pt-8 text-center text-slate-400">
            © 2026 Legacy Craft World
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;