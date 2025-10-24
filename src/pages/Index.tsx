import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за заявку! Я свяжусь с вами в ближайшее время.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Александр Самолучшев</h1>
            <div className="hidden md:flex gap-6">
              {["Главная", "Обо мне", "Услуги", "Программы", "Рецепты", "Отзывы", "Контакты"].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="pt-32 pb-20 px-4 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight text-4xl">
                Замучили диеты и срывы?
              </h2>
              <p className="text-lg sm:text-xl mb-3 md:mb-4 text-muted-foreground">
                Хотите по-настоящему полюбить здоровый образ жизни?
              </p>
              <p className="text-base sm:text-lg mb-6 md:mb-8 text-foreground">
                Научимся питаться правильно и вести здоровый образ жизни, уберем вредное питание и вредные привычки, начнем новую жизнь!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("контакты")}
                  className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                >
                  Записаться
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("услуги")}
                  className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/93ea748e-5d12-4c14-b5de-218bd51e0cc1/files/625920b4-de70-4239-a01a-088b4566ab52.jpg" 
                alt="Здоровый образ жизни"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="обо-мне" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/93ea748e-5d12-4c14-b5de-218bd51e0cc1/files/c10920bd-0f70-44b6-b265-1a455a583edf.jpg" 
                alt="Александр Самолучшев"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Обо мне</h2>
              <p className="text-lg mb-4 text-muted-foreground">
                Всем привет, я <span className="font-semibold text-primary">Александр Самолучшев</span> — ваш проводник в мир здорового питания!
              </p>
              <p className="text-base mb-4">
                Веду здоровый образ жизни, активно занимаюсь спортом. Более <span className="font-semibold">10 лет</span> я сам экспериментирую с питанием, и теперь, как интегративный нутрициолог (обучение в Talentsy), хочу поделиться с вами своими знаниями и опытом.
              </p>
              <div className="flex items-start gap-3 mb-3">
                <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                <p>Более 10 лет личного опыта в здоровом питании</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                <p>Сертифицированный интегративный нутрициолог (Talentsy)</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                <p>Активный образ жизни и регулярные тренировки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">🍴 Забудьте про строгие диеты и голодовки!</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Здесь вы найдете:</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Apple",
                title: "Индивидуальный подход",
                description: "Подбор рациона питания индивидуально под ваши цели и особенности организма"
              },
              {
                icon: "BookOpen",
                title: "Простые советы",
                description: "Реальные и простые советы, как сделать здоровое питание вкусным и разнообразным"
              },
              {
                icon: "ClipboardList",
                title: "Детальный разбор",
                description: "Подробный разбор питания и образа жизни с учетом ваших привычек"
              },
              {
                icon: "ChefHat",
                title: "Проверенные рецепты",
                description: "Вкусные рецепты, которые не испортят фигуру и помогут достичь целей"
              },
              {
                icon: "Zap",
                title: "Мотивация",
                description: "Поддержка для активной жизни без насилия над собой"
              },
              {
                icon: "MessageCircle",
                title: "Ответы на вопросы",
                description: "Разберем составы продуктов, оценим пользу блюд"
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Консультация",
                price: "от 500 ₽",
                description: "Экспресс-консультация по вопросам питания и образа жизни с конкретными рекомендациями",
                features: ["Ответы на вопросы", "Экспресс-анализ рациона", "Быстрые рекомендации", "Онлайн формат"]
              },
              {
                title: "Индивидуальная консультация",
                price: "от 3 000 ₽",
                description: "Персональная встреча с анализом вашего рациона, образа жизни и составлением плана питания",
                features: ["Анализ текущего рациона", "Постановка целей", "Индивидуальный план питания", "Рекомендации по образу жизни"]
              },
              {
                title: "Онлайн-сопровождение",
                price: "от 5 000 ₽/мес",
                description: "Постоянная поддержка, корректировка рациона и мотивация на пути к вашим целям",
                features: ["Ежедневная поддержка", "Корректировка плана", "Ответы на вопросы 24/7", "Еженедельные созвоны"]
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{service.price}</p>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-auto" onClick={() => scrollToSection("контакты")}>
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="программы" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Программы похудения</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Комплексные программы для достижения ваших целей</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Старт",
                duration: "1 месяц",
                price: "8 000 ₽",
                description: "Идеально для первого знакомства со здоровым питанием"
              },
              {
                title: "Оптима",
                duration: "2 месяца",
                price: "14 000 ₽",
                description: "Сформируем устойчивые привычки здорового питания",
                popular: true
              },
              {
                title: "Трансформация",
                duration: "3 месяца",
                price: "20 000 ₽",
                description: "Полная перезагрузка образа жизни и питания"
              }
            ].map((program, idx) => (
              <Card key={idx} className={`${program.popular ? 'border-2 border-primary shadow-xl scale-105' : ''} hover:shadow-lg transition-all`}>
                <CardContent className="pt-6">
                  {program.popular && (
                    <div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Популярно
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{program.duration}</p>
                  <p className="text-3xl font-bold text-primary mb-4">{program.price}</p>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Button className="w-full" variant={program.popular ? "default" : "outline"} onClick={() => scrollToSection("контакты")}>
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section id="рецепты" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Полезные рецепты</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Вкусно, полезно и просто</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Боул с киноа и авокадо",
                time: "20 мин",
                calories: "450 ккал",
                image: "https://cdn.poehali.dev/projects/93ea748e-5d12-4c14-b5de-218bd51e0cc1/files/42a9a6f7-5c8e-4518-a10a-2f72ff514273.jpg"
              },
              {
                title: "Овсяноблин с ягодами",
                time: "10 мин",
                calories: "320 ккал",
                image: "https://cdn.poehali.dev/projects/93ea748e-5d12-4c14-b5de-218bd51e0cc1/files/42a9a6f7-5c8e-4518-a10a-2f72ff514273.jpg"
              },
              {
                title: "Салат с курицей и овощами",
                time: "15 мин",
                calories: "380 ккал",
                image: "https://cdn.poehali.dev/projects/93ea748e-5d12-4c14-b5de-218bd51e0cc1/files/42a9a6f7-5c8e-4518-a10a-2f72ff514273.jpg"
              }
            ].map((recipe, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <CardContent className="pt-4">
                  <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Flame" size={16} />
                      <span>{recipe.calories}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="отзывы" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Мария, 32 года",
                result: "–12 кг за 3 месяца",
                text: "Александр помог мне не просто похудеть, а полностью изменить отношение к еде. Теперь я ем с удовольствием и без чувства вины!"
              },
              {
                name: "Дмитрий, 45 лет",
                result: "–15 кг за 4 месяца",
                text: "Впервые в жизни диета не казалась мучением. Спасибо за понятные советы и постоянную поддержку!"
              },
              {
                name: "Елена, 28 лет",
                result: "–8 кг за 2 месяца",
                text: "Научилась готовить вкусные и полезные блюда. Муж в восторге, а я довольна своим отражением в зеркале!"
              },
              {
                name: "Сергей, 38 лет",
                result: "–10 кг за 3 месяца",
                text: "Профессиональный подход, внимание к деталям. Результат превзошел ожидания!"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-primary font-semibold">{testimonial.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Записаться на консультацию</h2>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="Phone" className="text-primary" size={32} />
                  <a 
                    href="tel:+79991234567" 
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    +7 (999) 123-45-67
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-semibold mb-6">Свяжитесь со мной в социальных сетях:</p>
                  <div className="flex justify-center gap-6">
                    <a 
                      href="https://t.me/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl hover:bg-primary/10 transition-all hover:scale-105"
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                        <Icon name="Send" className="text-primary" size={28} />
                      </div>
                      <span className="font-medium">Telegram</span>
                    </a>
                    
                    <a 
                      href="https://wa.me/79991234567" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl hover:bg-primary/10 transition-all hover:scale-105"
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                        <Icon name="MessageCircle" className="text-primary" size={28} />
                      </div>
                      <span className="font-medium">WhatsApp</span>
                    </a>
                    
                    <a 
                      href="https://instagram.com/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl hover:bg-primary/10 transition-all hover:scale-105"
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                        <Icon name="Instagram" className="text-primary" size={28} />
                      </div>
                      <span className="font-medium">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Александр Самолучшев</h3>
          <p className="text-gray-300 mb-6">Интегративный нутрициолог</p>
          <p className="text-sm text-gray-400">
            Готовы изменить свою жизнь к лучшему? Вместе мы создадим сообщество единомышленников, которые заботятся о своем здоровье с удовольствием!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;