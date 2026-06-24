import Icon from '@/components/ui/icon';

const works = [
  {
    img: 'https://cdn.poehali.dev/projects/b24f82fc-ea32-4e36-bd69-931d6278f2d6/bucket/d3214143-2adb-4f5e-a777-62d80e16bbe3.png',
    title: 'Fashion-бренд одежды',
    tag: 'Яндекс Кит',
    desc: 'Витрина с 400+ товарами, фильтрами по размерам и интеграцией складского учёта.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/b24f82fc-ea32-4e36-bd69-931d6278f2d6/bucket/737c8cfa-66af-4b05-8b87-99bfc10bc9b9.png',
    title: 'Магазин косметики',
    tag: 'Яндекс Кит',
    desc: 'Премиальное оформление, подбор по типу кожи и подписочная модель продаж.',
  },
  {
    img: 'https://cdn.poehali.dev/projects/b24f82fc-ea32-4e36-bd69-931d6278f2d6/files/5885abdf-c20a-4e4d-ad87-88ddfe2d33af.jpg',
    title: 'Электроника и гаджеты',
    tag: 'Мультиплатформа',
    desc: 'Запуск на Яндекс Кит с синхронизацией каталога на нескольких маркетплейсах.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block gradient-text font-semibold mb-3">Портфолио</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Магазины, которые работают</h2>
          <p className="text-muted-foreground text-lg">
            Реальные проекты для брендов и селлеров на разных платформах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((w) => (
            <div
              key={w.title}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={w.img}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs font-semibold text-primary">
                  {w.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                  {w.title}
                  <Icon name="ArrowUpRight" size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;