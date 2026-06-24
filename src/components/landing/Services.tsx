import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Rocket',
    title: 'Запуск магазина под ключ',
    text: 'Создаю магазин на Яндекс Кит с нуля: от регистрации до первых продаж за 14 дней.',
  },
  {
    icon: 'LayoutGrid',
    title: 'Настройка каталога',
    text: 'Структура категорий, карточки товаров, фильтры и SEO-оптимизация контента.',
  },
  {
    icon: 'Palette',
    title: 'Дизайн и брендинг',
    text: 'Уникальное оформление витрины, баннеры и фирменный стиль для узнаваемости бренда.',
  },
  {
    icon: 'CreditCard',
    title: 'Оплата и логистика',
    text: 'Подключаю эквайринг, доставку и интеграции с системами учёта и складом.',
  },
  {
    icon: 'BarChart3',
    title: 'Аналитика и реклама',
    text: 'Настройка метрик, рекламных кампаний и отчётности для роста продаж.',
  },
  {
    icon: 'Wrench',
    title: 'Поддержка и развитие',
    text: 'Сопровождение магазина, доработки и масштабирование на новые платформы.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block gradient-text font-semibold mb-3">Услуги</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Всё для запуска продаж
          </h2>
          <p className="text-muted-foreground text-lg">
            Полный цикл создания и настройки интернет-магазина для селлеров и брендов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-3xl p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <Icon name={s.icon} size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
              <div className="absolute top-8 right-8 text-5xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
