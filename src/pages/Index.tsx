import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    {
      image: 'https://cdn.poehali.dev/projects/cf13d9d1-8ee0-40c2-9d0c-63fbd0a37114/files/c9a322aa-3e05-4c09-8dd0-5b42d85e6d20.jpg',
      title: 'Торт на День Рождения',
      description: 'Нежный торт с ягодами'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cf13d9d1-8ee0-40c2-9d0c-63fbd0a37114/files/e4f90da2-dfd5-475f-b1aa-b932fc820f8e.jpg',
      title: 'Корпоративный Торт',
      description: 'Элегантный трехъярусный торт'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cf13d9d1-8ee0-40c2-9d0c-63fbd0a37114/files/bcd84fcf-9773-4e86-84eb-6521e49b659f.jpg',
      title: 'Процесс Создания',
      description: 'Ручная работа с любовью'
    }
  ];

  const services = [
    {
      icon: 'Cake',
      title: 'Торты на День Рождения',
      description: 'Индивидуальный дизайн, учитываем все пожелания и создаем торт мечты'
    },
    {
      icon: 'Heart',
      title: 'Свадебные Торты',
      description: 'Элегантные многоярусные торты для самого важного дня'
    },
    {
      icon: 'Briefcase',
      title: 'Корпоративные Заказы',
      description: 'Торты для деловых мероприятий и корпоративов'
    },
    {
      icon: 'Gift',
      title: 'Праздничные Торты',
      description: 'Тематическое оформление под любой праздник'
    }
  ];

  const reviews = [
    {
      name: 'Анна М.',
      rating: 5,
      text: 'Потрясающий торт на день рождения дочери! Все гости были в восторге, а вкус просто божественный!'
    },
    {
      name: 'Дмитрий К.',
      rating: 5,
      text: 'Заказывали корпоративный торт. Профессиональный подход, вовремя доставили, очень вкусно!'
    },
    {
      name: 'Елена В.',
      rating: 5,
      text: 'Свадебный торт превзошел все ожидания! Красивый, нежный и невероятно вкусный. Спасибо!'
    }
  ];

  const faqItems = [
    {
      question: 'За какое время нужно делать заказ?',
      answer: 'Рекомендуем делать заказ минимум за 3-5 дней. Для сложных тортов - за неделю.'
    },
    {
      question: 'Доставляете ли вы торты?',
      answer: 'Да, доставка по Пушкину и ближайшим районам Санкт-Петербурга. Стоимость обсуждается индивидуально.'
    },
    {
      question: 'Можно ли заказать торт по своему дизайну?',
      answer: 'Конечно! Мы воплотим любую вашу идею. Просто пришлите референс или опишите желаемый дизайн.'
    },
    {
      question: 'Какие ингредиенты вы используете?',
      answer: 'Только натуральные продукты: свежие яйца, качественная мука, настоящее сливочное масло, натуральные ягоды и фрукты.'
    },
    {
      question: 'Есть ли возможность дегустации?',
      answer: 'Да, можем организовать дегустацию популярных вкусов при заказе от 5000 рублей.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">Сладкие Мечты</div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О мне', 'Портфолио', 'Услуги', 'Отзывы', 'FAQ', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('контакты')} size="sm">
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Торты на заказ в <span className="text-primary">Пушкине</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Создаю уникальные торты для ваших праздников. Только натуральные ингредиенты, 
                индивидуальный дизайн и незабываемый вкус.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>100% натуральные продукты</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>От 2000₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={20} />
                  <span>Доставка по городу</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('контакты')}>
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать торт
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('портфолио')}>
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/cf13d9d1-8ee0-40c2-9d0c-63fbd0a37114/files/c9a322aa-3e05-4c09-8dd0-5b42d85e6d20.jpg"
                alt="Торт"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о-мне" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/cf13d9d1-8ee0-40c2-9d0c-63fbd0a37114/files/bcd84fcf-9773-4e86-84eb-6521e49b659f.jpg"
                alt="Процесс создания"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Обо мне</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Привет! Я профессиональный кондитер с многолетним опытом. Моя страсть — создавать торты, 
                которые не только красивы, но и невероятно вкусны.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Каждый торт я создаю с любовью и вниманием к деталям. Использую только свежие, 
                натуральные ингредиенты высшего качества. Никаких искусственных красителей или консервантов.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5 лет</div>
                  <div className="text-sm text-muted-foreground">Опыт работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Натуральные продукты</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground">Мои лучшие работы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground">Что я предлагаю</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name={service.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="inline-block p-8 bg-accent">
              <h3 className="text-2xl font-bold mb-4">Стоимость</h3>
              <div className="text-4xl font-bold text-primary mb-2">от 2000₽</div>
              <p className="text-muted-foreground">Точная цена зависит от размера и сложности дизайна</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят обо мне</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь со мной удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="Phone" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Телефон</h3>
              <a href="tel:+79117000000" className="text-2xl font-bold text-primary hover:underline">
                +7 911 700 00 00
              </a>
            </Card>
            <Card className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Icon name="MapPin" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Адрес</h3>
              <p className="text-lg text-muted-foreground">г. Пушкин, Санкт-Петербург</p>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <Button size="lg" className="w-full" asChild>
              <a href="https://wa.me/79117000000" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <a href="https://t.me/+79117000000" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" className="mr-2" size={20} />
                Написать в Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2026 Сладкие Мечты. Торты на заказ в Пушкине</p>
          <p className="mt-2">Только натуральные ингредиенты • Индивидуальный подход • Доставка</p>
        </div>
      </footer>
    </div>
  );
}