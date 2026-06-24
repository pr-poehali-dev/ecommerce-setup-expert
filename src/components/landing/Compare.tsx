import Icon from '@/components/ui/icon';

const features = [
  'Быстрый запуск без разработки',
  'Интеграция с маркетплейсами',
  'Готовая логистика и доставка',
  'Гибкая настройка витрины',
  'Аналитика продаж из коробки',
  'Поддержка крупных каталогов',
  'Стоимость старта',
];

type Cell = boolean | string;

const platforms: { name: string; highlight?: boolean; values: Cell[] }[] = [
  {
    name: 'Яндекс Кит',
    highlight: true,
    values: [true, true, true, true, true, true, 'Низкая'],
  },
  {
    name: 'Tilda',
    values: [true, false, false, true, false, false, 'Средняя'],
  },
  {
    name: 'InSales',
    values: [true, true, true, true, true, false, 'Средняя'],
  },
  {
    name: 'Своя разработка',
    values: [false, true, false, true, true, true, 'Высокая'],
  },
];

const renderCell = (v: Cell, highlight?: boolean) => {
  if (typeof v === 'string') {
    return <span className={`text-sm font-semibold ${highlight ? 'text-white' : 'text-foreground'}`}>{v}</span>;
  }
  return v ? (
    <Icon name="Check" size={20} className={highlight ? 'text-white' : 'text-green-500'} />
  ) : (
    <Icon name="X" size={20} className={highlight ? 'text-white/50' : 'text-muted-foreground/40'} />
  );
};

const Compare = () => {
  return (
    <section id="compare" className="py-24 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block gradient-text font-semibold mb-3">Сравнение платформ</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Почему <span className="gradient-text">Яндекс Кит</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Оптимальная платформа для селлеров и брендов маркетплейсов
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <div className="min-w-[720px] bg-card rounded-3xl border border-border shadow-xl shadow-primary/5 overflow-hidden">
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
              <div className="p-5 font-semibold text-muted-foreground text-sm flex items-end">
                Возможности
              </div>
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className={`p-5 text-center font-bold ${
                    p.highlight ? 'gradient-brand text-white' : 'text-foreground'
                  }`}
                >
                  {p.highlight && (
                    <div className="text-[10px] uppercase tracking-wider opacity-80 mb-1">
                      Рекомендую
                    </div>
                  )}
                  {p.name}
                </div>
              ))}
            </div>

            {features.map((f, ri) => (
              <div
                key={f}
                className={`grid grid-cols-[1.6fr_1fr_1fr_1fr_1fr] ${
                  ri % 2 === 0 ? 'bg-secondary/30' : ''
                }`}
              >
                <div className="p-5 text-sm font-medium flex items-center">{f}</div>
                {platforms.map((p) => (
                  <div
                    key={p.name}
                    className={`p-5 flex items-center justify-center ${
                      p.highlight ? 'gradient-brand' : ''
                    }`}
                  >
                    {renderCell(p.values[ri], p.highlight)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Подберу платформу под ваш бизнес и задачи — даже если это не Яндекс Кит
        </p>
      </div>
    </section>
  );
};

export default Compare;
