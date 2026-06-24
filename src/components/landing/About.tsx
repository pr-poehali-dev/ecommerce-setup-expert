import Icon from '@/components/ui/icon';

const advantages = [
  { icon: 'Award', text: 'Сертифицированный специалист по Яндекс Кит' },
  { icon: 'Clock', text: 'Запуск магазина от 14 дней под ключ' },
  { icon: 'Users', text: 'Более 120 довольных клиентов' },
  { icon: 'MessageCircle', text: 'Личное сопровождение на каждом этапе' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 gradient-brand rounded-[2.5rem] blur-2xl opacity-20" />
          <div className="relative gradient-brand rounded-[2.5rem] p-1">
            <div className="bg-card rounded-[2.3rem] p-10 text-center">
              <div className="w-32 h-32 mx-auto rounded-full gradient-brand flex items-center justify-center text-white text-5xl font-bold mb-6">
                АМ
              </div>
              <h3 className="text-2xl font-bold">Алексей Морозов</h3>
              <p className="text-muted-foreground mb-6">Специалист по интернет-магазинам</p>
              <div className="flex justify-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <Icon name="Send" size={18} />
                </span>
                <span className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <Icon name="Mail" size={18} />
                </span>
                <span className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary">
                  <Icon name="Phone" size={18} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block gradient-text font-semibold mb-3">О специалисте</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Превращаю идеи в работающие магазины
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            7 лет создаю и настраиваю интернет-магазины для селлеров и брендов. Специализируюсь на
            Яндекс Кит — платформе, которая идеально подходит для выхода на маркетплейсы. Беру на
            себя всю техническую часть, чтобы вы сосредоточились на продажах.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((a) => (
              <div key={a.text} className="flex items-start gap-3 bg-card rounded-2xl p-4 border border-border">
                <span className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white shrink-0">
                  <Icon name={a.icon} size={20} />
                </span>
                <span className="text-sm font-medium pt-1">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
