import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '120+', label: 'магазинов запущено' },
  { value: '7 лет', label: 'в e-commerce' },
  { value: '14 дней', label: 'средний срок запуска' },
];

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36 pb-20">
      <div className="absolute inset-0 gradient-radial-glow" />
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Официальный партнёр по запуску на Яндекс Кит
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-6">
            Создаю интернет-магазины, которые{' '}
            <span className="gradient-text">продают</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Запускаю и настраиваю магазины для селлеров и брендов на{' '}
            <strong className="text-foreground">Яндекс Кит</strong> — оптимальной платформе для
            маркетплейсов. Под ключ: дизайн, каталог, оплата и интеграции.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg" className="gradient-brand text-white border-0 hover:opacity-90 rounded-full px-8 h-13">
              <a href="#contact">
                Запустить магазин
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-primary/30 hover:bg-primary/5">
              <a href="#portfolio">Смотреть работы</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 gradient-brand rounded-[2rem] blur-2xl opacity-20 animate-gradient" />
          <img
            src="https://cdn.poehali.dev/projects/b24f82fc-ea32-4e36-bd69-931d6278f2d6/files/d7962078-5124-45f0-835c-0d6e3b8ac9ee.jpg"
            alt="Интерфейс интернет-магазина"
            className="relative rounded-[2rem] shadow-2xl shadow-primary/20 w-full animate-float"
          />
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl hidden md:flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
            <span className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center text-green-600">
              <Icon name="TrendingUp" size={22} />
            </span>
            <div>
              <div className="font-bold text-sm">+218% продаж</div>
              <div className="text-xs text-muted-foreground">за первый квартал</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
