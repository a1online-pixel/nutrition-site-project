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
              <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-foreground leading-tight py-[1px] text-4xl">Замучили диеты и срывы?</h2>
              <p className="text-lg sm:text-xl mb-3 md:mb-4 text-muted-foreground">Комфортное питание без строгих диет и ограничений, для ваших целей – снижение или набор веса, наращивание мышечной массы. </p>
              <p className="text-base sm:text-lg mb-6 md:mb-8 text-foreground">Научимся питаться правильно, уберем несбалансированное  питание и вредные привычки, начнем новую, комфортную и здоровую жизнь!</p>
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
                src="https://cdn.poehali.dev/files/651896ea-0764-484c-a02b-b45af909448e.jpg" 
                alt="Александр Самолучшев - консультант по питанию"
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
                src="https://cdn.poehali.dev/files/ebbc5783-da92-4589-b917-26adfbd56002.jpg" 
                alt="Александр Самолучшев - активный образ жизни и спорт"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Обо мне</h2>
              <p className="text-lg mb-4 text-muted-foreground">Всем привет, я Александр Самолучшев – ваш консультант и помощник в правильном питании!
</p>
              <p className="text-base mb-4">Являюсь дипломированным специалистом – интегративный нутрициолог.
Веду здоровый образ жизни, активно занимаюсь спортом. Более 15 лет я сам придерживаюсь правильного питания, и теперь, как специалист по питанию, хочу поделиться с вами своими знаниями и опытом.
</p>
              <div className="flex items-start gap-3 mb-3">
                <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                <p>Более 15 лет личного опыта в здоровом питании</p>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                <p>Дипломированный интегративный нутрициолог
</p>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle" className="text-primary mt-1" size={24} />
                <p>Квалифицированный и индивидуальный подход к каждому клиенту
</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="font-bold text-center text-foreground my-2 text-2xl">Комфортное питание без строгих диет, для ваших целей и задач!
</h2>
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
                description: "Подробный разбор питания и образа жизни с учетом ваших привычек и предпочтений"
              },
              {
                icon: "ChefHat",
                title: "Проверенные рецепты",
                description: "Простые рецепты, которые помогут достичь целей"
              },
              {
                icon: "Zap",
                title: "Мотивация",
                description: "Всесторонняя поддержка без строгих ограничений и насилия над собой"
              },
              {
                icon: "MessageCircle",
                title: "Ответы на вопросы",
                description: "Вы найдете ответы на ваши вопросы и получите полноценную информацию по вашим запросам"
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                title: "Личная\nконсультация",
                price: "от 500 ₽",
                description: "Индивидуальная консультация по режиму и рациону питания, снижению веса, набору веса, наращивание мышечной массы, питание при заболеваниях.",
                features: ["Анализ фактического рациона и режима питания", "Ответы на вопросы", "Индивидуальные рекомендации по вашему запросу", "Онлайн формат"]
              },
              {
                title: "Ведение и персональное\nсопровождение",
                price: "от 2 000 ₽",
                description: "Постоянная поддержка, корректировка рациона и мотивация на пути к вашим целям",
                features: ["Расчет суточной потребности КБЖУ персонально для вас", "Ежедневное сопровождение в мессенджерах", "Корректировка плана при необходимости", "Встречи по договоренности"]
              },
              {
                title: "Составление плана питания\nпо вашему запросу",
                price: "от 1000 ₽",
                description: "Составление рациона и режима питания, с учетом ваших запросов и пожеланий",
                features: ["Подбор персонального питания под ваши цели", "Подбор продуктов и блюд персонально для вас", "Подбор режима питания", "Индивидуальная корректировка питания по вашему желанию"]
              }
            ].map((service, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 whitespace-pre-line">{service.title}</h3>
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
          <div className="text-center mt-12 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground bg-white p-6 rounded-xl shadow-sm">
              Также вы можете заказать индивидуальные «Основные расчеты (ИМТ, КБЖУ) и рекомендации по вашему запросу. Стоимость <span className="font-bold text-primary">1000 руб.</span>
            </p>
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

      {/* Telegram Posts */}
      <section id="рецепты" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Подпишись на меня в Telegram!</h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Я подобрал для вас множество бесплатной и полезной информации по питанию, а также здоровому образу жизни!</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Основные виды БАДов",
                description: "Всем привет🤚\n\nПродолжим тему БАДов, сегодня рассмотрим основные виды\n\n✅ Витаминные комплексы\nЭти БАДы содержат витамины группы A, B, C, D, E и K, необходимые организму для поддержания иммунитета, улучшения состояния кожи, волос, ногтей и общего самочувствия.\n\n✅Минеральные добавки\nМинералы играют важную роль в обмене веществ, укрепляют кости, мышцы, нервную систему и сердечно-сосудистую деятельность. К таким минералам относятся кальций, магний, калий, железо, цинк и йод.",
                image: "https://cdn.poehali.dev/projects/93ea748e-5d12-4c14-b5de-218bd51e0cc1/files/3735871d-23de-44d1-ae83-b188adf9e11f.jpg"
              },
              {
                title: "Углеводы при занятии спортом",
                description: "✅Углеводы при занятии спортом:\n-Источник энергии: углеводы являются основным источником топлива для мышц. Во время интенсивных физических нагрузок организм использует глюкозу, получаемую из углеводов, для поддержания уровня энергии.\n-Повышение выносливости: прием углеводов перед тренировкой помогает увеличить запасы гликогена в мышцах и печени, что способствует повышению выносливости и производительности.\n-Поддержание уровня сахара в крови: углеводы помогают поддерживать стабильный уровень глюкозы в крови, предотвращая чувство усталости и слабости во время тренировки.\n-Предотвращение мышечной усталости: углеводы помогают отсрочить наступление мышечной усталости, позволяя проводить более продуктивные тренировки.",
                image: "https://cdn.poehali.dev/projects/93ea748e-5d12-4c14-b5de-218bd51e0cc1/files/dabdc822-04e1-477c-b45c-5e9f0b0216ef.jpg"
              },
              {
                title: "Алиментарно-зависимые заболевания",
                description: "📌Алиментарно-зависимые заболевания — это группа заболеваний, развитие которых связано с нарушением питания организма, такие болезни возникают вследствие неправильного рациона, недостатка витаминов, минералов и питательных веществ либо избытка вредных компонентов пищи.\n\n🔻 Заболевания, вызванные недостатком нутриентов:\n- Авитаминозы: недостаток витамина C вызывает цингу, витамин D — рахит, витамины группы B приводят к анемии, дерматитам и другим проблемам нервной системы.\n- Белково-калорийная недостаточность: истощение, потеря мышечной массы и иммунитета, проблемы с кожей и волосами.\n- Дефициты микроэлементов: дефицит железа ведет к железодефицитной анемии, нехватка кальция связана с остеопорозом, йода — гипотиреозом.",
                image: "https://cdn.poehali.dev/projects/93ea748e-5d12-4c14-b5de-218bd51e0cc1/files/2151f409-cc64-4edf-a240-b5cfed8cad2b.jpg"
              }
            ].map((post, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardContent className="pt-4">
                  <h3 className="text-xl font-bold mb-3 text-primary">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-6 whitespace-pre-line">{post.description}</p>
                  <a 
                    href="https://t.me/pp_zdorove" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Читать в Telegram... <Icon name="ExternalLink" size={14} />
                  </a>
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
                    href="tel:+79997675795" 
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    +7 (999) 767-57-95
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-semibold mb-6">Свяжитесь со мной в социальных сетях:</p>
                  <div className="flex justify-center gap-6">
                    <a 
                      href="https://t.me/alexdmzozh" 
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
                      href="https://wa.me/79997675795" 
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
                      href="https://vk.com/id1054107144" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl hover:bg-primary/10 transition-all hover:scale-105"
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                        <Icon name="Circle" className="text-primary" size={28} />
                      </div>
                      <span className="font-medium">VKontakte</span>
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