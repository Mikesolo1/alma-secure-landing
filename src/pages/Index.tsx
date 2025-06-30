
import { useEffect, useState } from 'react';
import { Shield, Lock, FileCheck, Users, CheckCircle, ArrowRight, Star, Zap, Globe, Eye, Database, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-glow">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full px-6 py-2 mb-8 animate-glow">
              <Shield className="w-4 h-4 text-cyber-blue" />
              <span className="text-sm text-cyber-blue-light">Соответствие 152-ФЗ 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Полный пакет документов<br />
              <span className="bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">
                по 152‑ФЗ
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Разработка, внедрение и поддержка — всё "под ключ".<br />
              Соответствие новым требованиям 2025 года.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-cyber hover:scale-105 transition-all duration-300 cyber-glow text-lg px-8 py-4">
                Получить консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="cyber-border text-lg px-8 py-4">
                Скачать прайс-лист
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-cyber-blue/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-cyber-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-cyber-purple/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </section>

      {/* Problems Section */}
      <section className="section-spacing relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Новые требования <span className="text-cyber-red">ужесточаются</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              152-ФЗ в 2025 году вводит новые штрафы и расширенные требования к защите персональных данных
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Новые штрафы",
                description: "До 6 млн рублей для организаций за нарушения требований по защите ПДн",
                color: "cyber-red"
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Усиленный контроль",
                description: "Внеплановые проверки и обязательные аудиты систем защиты информации",
                color: "cyber-orange"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Расширенные требования",
                description: "Новые стандарты документооборота и технических мер защиты данных",
                color: "cyber-blue"
              }
            ].map((item, index) => (
              <Card key={index} className={`bg-card border-${item.color}/30 hover:border-${item.color}/60 transition-all duration-300 hover:scale-105 cyber-glow group`}>
                <CardHeader>
                  <div className={`w-16 h-16 bg-${item.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${item.color}/20 transition-colors duration-300`}>
                    <div className={`text-${item.color}`}>
                      {item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Package Section */}
      <section className="section-spacing bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Что входит в наш <span className="text-cyber-green">пакет</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Полный комплект документов и технических решений для соответствия 152-ФЗ
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                category: "Организационные документы",
                icon: <FileCheck className="w-8 h-8" />,
                items: [
                  "Политики обработки ПДн",
                  "Приказы о назначении ответственных",
                  "Журналы и акты передачи данных",
                  "Процедуры контроля и аудита"
                ],
                color: "cyber-blue"
              },
              {
                category: "Технические документы",
                icon: <Settings className="w-8 h-8" />,
                items: [
                  "Модель угроз и оценка ущерба",
                  "Соответствие уровням УЗ-1/УЗ-2",
                  "Технические задания под СЗИ",
                  "Сертифицированные решения ФСБ"
                ],
                color: "cyber-green"
              },
              {
                category: "Интеграция и сопровождение",
                icon: <Users className="w-8 h-8" />,
                items: [
                  "Внедрение SafeCloud 152-ФЗ",
                  "Обучение персонала",
                  "Техническая поддержка 24/7",
                  "Обновления при изменениях в законе"
                ],
                color: "cyber-purple"
              }
            ].map((package_item, index) => (
              <Card key={index} className={`bg-card border-${package_item.color}/30 hover:border-${package_item.color}/60 transition-all duration-500 hover:scale-105 cyber-glow group`}>
                <CardHeader>
                  <div className={`w-16 h-16 bg-${package_item.color}/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${package_item.color}/20 transition-colors duration-300`}>
                    <div className={`text-${package_item.color}`}>
                      {package_item.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{package_item.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {package_item.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 text-${package_item.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Этапы <span className="text-cyber-blue">реализации</span>
            </h2>
            <p className="text-xl text-gray-300">
              Прозрачный процесс от аудита до полного внедрения
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Аудит и сбор данных", desc: "Анализ текущего состояния ИТ-инфраструктуры и процессов" },
              { step: "02", title: "Разработка документов", desc: "Создание полного пакета документов под ваши требования" },
              { step: "03", title: "Согласование и утверждение", desc: "Проверка и утверждение всех документов с вашей стороны" },
              { step: "04", title: "Внедрение СЗИ", desc: "Установка и настройка сертифицированных средств защиты" },
              { step: "05", title: "Обучение персонала", desc: "Подготовка сотрудников к работе с новыми процедурами" },
              { step: "06", title: "Сопровождение", desc: "Постоянная поддержка и обновление документации" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-8 mb-8 group">
                <div className="w-20 h-20 bg-gradient-cyber rounded-full flex items-center justify-center text-2xl font-bold cyber-glow group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Тарифы и <span className="text-cyber-green">стоимость</span>
            </h2>
            <p className="text-xl text-gray-300">
              Выберите подходящий пакет услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Базовый старт",
                price: "от 300 000 ₽",
                period: "4–6 недель",
                features: [
                  "Политики и приказы",
                  "Журналы и акты",
                  "Базовые процедуры",
                  "Консультации"
                ],
                color: "cyber-blue",
                popular: false
              },
              {
                name: "Премиум",
                price: "от 600 000 ₽",
                period: "8–10 недель",
                features: [
                  "Всё из базового пакета",
                  "Модель угроз",
                  "ТЗ по СЗИ",
                  "Обучение персонала",
                  "Техническая документация"
                ],
                color: "cyber-green",
                popular: true
              },
              {
                name: "Комплекс под ключ",
                price: "от 1 200 000 ₽",
                period: "12–16 недель",
                features: [
                  "Всё из премиум пакета",
                  "Внедрение SafeCloud 152-ФЗ",
                  "Сопровождение 12 месяцев",
                  "Техподдержка 24/7",
                  "Обновления документов"
                ],
                color: "cyber-purple",
                popular: false
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative bg-card border-${plan.color}/30 hover:border-${plan.color}/60 transition-all duration-300 hover:scale-105 cyber-glow ${plan.popular ? 'ring-2 ring-cyber-green' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyber-green text-cyber-dark px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Популярный
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className={`text-4xl font-bold text-${plan.color} mb-2`}>
                    {plan.price}
                  </div>
                  <p className="text-gray-400">{plan.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 text-${plan.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-${plan.color}/10 border border-${plan.color}/30 hover:bg-${plan.color}/20 text-${plan.color}`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Получить <span className="text-cyber-blue">консультацию</span>
              </h2>
              <p className="text-xl text-gray-300">
                Свяжитесь с нами для расчета стоимости и консультации по вашему проекту
              </p>
            </div>

            <Card className="bg-card border-cyber-blue/30 cyber-glow">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input placeholder="Ваше имя" className="bg-cyber-darker border-cyber-blue/30 focus:border-cyber-blue" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Компания</label>
                      <Input placeholder="Название компании" className="bg-cyber-darker border-cyber-blue/30 focus:border-cyber-blue" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="email@company.ru" className="bg-cyber-darker border-cyber-blue/30 focus:border-cyber-blue" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" className="bg-cyber-darker border-cyber-blue/30 focus:border-cyber-blue" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите о вашем проекте..." className="bg-cyber-darker border-cyber-blue/30 focus:border-cyber-blue h-32" />
                  </div>
                  <Button size="lg" className="w-full bg-gradient-cyber hover:scale-105 transition-all duration-300 cyber-glow">
                    Отправить заявку
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyber-darker py-12 border-t border-cyber-blue/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-cyber-blue" />
              <span className="text-2xl font-bold">ALMA Solutions</span>
            </div>
            <p className="text-gray-400 mb-6">
              Эксперты по информационной безопасности и соответствию 152-ФЗ
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400">
              <span>© 2025 ALMA Solutions</span>
              <span>Политика конфиденциальности</span>
              <span>Контакты: info@almasolutions.ru</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
