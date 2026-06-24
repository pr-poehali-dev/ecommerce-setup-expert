import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-secondary/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-white">
            <Icon name="Store" size={20} />
          </span>
          ShopCraft
        </a>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
          <a href="#compare" className="hover:text-primary transition-colors">Сравнение</a>
          <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ShopCraft
        </p>
      </div>
    </footer>
  );
};

export default Footer;