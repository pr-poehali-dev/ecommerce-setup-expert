import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (900) 123-45-67' },
  { icon: 'Mail', label: 'Email', value: 'hello@shopcraft.ru' },
  { icon: 'Send', label: 'Telegram', value: '@shopcraft_expert' },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', contact: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) {
      toast({ title: 'Заполните имя и контакт', variant: 'destructive' });
      return;
    }
    toast({ title: 'Заявка отправлена!', description: 'Свяжусь с вами в ближайшее время.' });
    setForm({ name: '', contact: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container relative">
        <div className="gradient-brand rounded-[2.5rem] p-1 shadow-2xl shadow-primary/20">
          <div className="bg-card rounded-[2.3rem] p-8 md:p-14 grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block gradient-text font-semibold mb-3">Контакты</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Обсудим ваш магазин?
              </h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку — расскажу, как лучше запустить продажи именно в вашей нише.
                Бесплатная консультация по подбору платформы.
              </p>

              <div className="space-y-4">
                {contacts.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center text-white">
                      <Icon name={c.icon} size={20} />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground">{c.label}</div>
                      <div className="font-semibold">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4 bg-secondary/40 rounded-3xl p-6 md:p-8">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Ваше имя</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="rounded-xl h-12 bg-card"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Телефон или Telegram</label>
                <Input
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="+7 ... или @username"
                  className="rounded-xl h-12 bg-card"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">О проекте</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Что продаёте и какие задачи?"
                  className="rounded-xl bg-card min-h-28"
                />
              </div>
              <Button type="submit" size="lg" className="w-full gradient-brand text-white border-0 hover:opacity-90 rounded-xl h-13">
                Отправить заявку
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
