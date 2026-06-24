import Icon from '@/components/ui/icon';

const cases = [
  {
    icon: 'Shirt',
    client: 'Бренд одежды «Северный стиль»',
    problem: 'Продажи только через соцсети, не было своего магазина',
    result: 'Запуск на Яндекс Кит за 12 дней',
    metric: '+218%',
    metricLabel: 'рост продаж за квартал',
  },
  {
    icon: 'Sparkles',
    client: 'Косметика «GlowLab»',
    problem: 'Высокий процент брошенных корзин',
    result: 'Переработка витрины и оформления заказа',
    metric: '−43%',
    metricLabel: 'брошенных корзин',
  },
  {
    icon: 'Smartphone',
    client: 'Электроника «TechPoint»',
    problem: 'Ручное обновление цен на 5 площадках',
    result: 'Автосинхронизация каталога',
    metric: '15 ч/нед',
    metricLabel: 'сэкономлено времени',
  },
];

const Cases = () => {
  return (
    <section id="cases" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block gradient-text font-semibold mb-3">Кейсы</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Результаты в цифрах</h2>
          <p className="text-muted-foreground text-lg">
            Как настройка магазина превращается в реальную прибыль
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.client}
              className="relative bg-card rounded-3xl p-8 border border-border overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 gradient-brand opacity-5 rounded-full group-hover:opacity-10 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Icon name={c.icon} size={24} />
              </div>
              <h3 className="font-bold text-lg mb-4">{c.client}</h3>

              <div className="space-y-3 text-sm mb-6">
                <div className="flex gap-2">
                  <Icon name="CircleAlert" size={16} className="text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{c.problem}</span>
                </div>
                <div className="flex gap-2">
                  <Icon name="CircleCheck" size={16} className="text-green-500 shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{c.result}</span>
                </div>
              </div>

              <div className="pt-5 border-t border-border">
                <div className="text-3xl font-extrabold gradient-text">{c.metric}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
