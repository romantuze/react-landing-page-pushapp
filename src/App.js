import React, { Component } from 'react';
import HeadForm from './HeadForm';
import FootForm from './FootForm';
import PopupForm from './PopupForm';
import PopupThanks from './PopupThanks';

import $ from 'jquery';

import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      openPopup: false,
    }
    this.handlePopup = this.handlePopup.bind(this);
  }

  handlePopup() {
    $("#popup-form").fadeIn("slow");
  }

  componentDidMount() {

    setInterval(function() {
    $('.head-icon-1').animate({opacity:'1'},1500); 
    $('.head-icon-1').animate({opacity:'0'},1500); 
    }, 2000);

    setInterval(function() {
    $('.head-icon-2').animate({opacity:'1'},1700); 
    $('.head-icon-2').animate({opacity:'0'},1700); 
    }, 2000);

    setInterval(function() {
    $('.head-icon-3').animate({opacity:'1'},1900); 
    $('.head-icon-3').animate({opacity:'0'},1900); 
    }, 2000);

    setInterval(function() {
    $('.head-icon-4').animate({opacity:'1'},2000); 
    $('.head-icon-4').animate({opacity:'0'},2000); 
    }, 2000);

    setInterval(function() {
    $('.head-icon-5').animate({opacity:'1'},1600); 
    $('.head-icon-5').animate({opacity:'0'},1600); 
    }, 2000);

    setInterval(function() {
    $('.head-icon-6').animate({opacity:'1'},1800); 
    $('.head-icon-6').animate({opacity:'0'},1800); 
    }, 2000);

    setInterval(function() {
    $('.head-icon-7').animate({opacity:'1'},1900); 
    $('.head-icon-7').animate({opacity:'0'},1900); 
    }, 2000);

    setInterval(function() {
    $('.head-icon-8').animate({opacity:'1'},1500); 
    $('.head-icon-8').animate({opacity:'0'},1500); 
    }, 2000);

    setInterval(function() {
    $('.head-l-1').animate({opacity:'1'},2000); 
    $('.head-l-1').animate({opacity:'0'},2000); 
    $('.head-l-2').animate({opacity:'1'},2000); 
    $('.head-l-2').animate({opacity:'0'},2000); 
    }, 2000);

    setInterval(function() {
    $('.foot-icon-1').animate({opacity:'1'},1500); 
    $('.foot-icon-1').animate({opacity:'0'},1500); 
    }, 2000);

    setInterval(function() {
    $('.foot-icon-2').animate({opacity:'1'},1700); 
    $('.foot-icon-2').animate({opacity:'0'},1700); 
    }, 2000);

    setInterval(function() {
    $('.foot-icon-3').animate({opacity:'1'},1800); 
    $('.foot-icon-3').animate({opacity:'0'},1800); 
    }, 2000);

    setInterval(function() {
    $('.foot-icon-4').animate({opacity:'1'},1600); 
    $('.foot-icon-4').animate({opacity:'0'},1600); 
    }, 2000);

    setInterval(function() {
    $('.foot-icon-5').animate({opacity:'1'},2000); 
    $('.foot-icon-5').animate({opacity:'0'},2000); 
    }, 2000);

    setInterval(function() {
    $('.foot-icon-6').animate({opacity:'1'},1400); 
    $('.foot-icon-6').animate({opacity:'0'},1400); 
    }, 2000);

  }


  render() {
    return (
      <div className="app">
<div className="container">
  
  <div className="header">  
    <div className="header-content">  
      <div className="header-logo"><a href="/"><img src="images/logo.png" alt=""/></a></div>    
      <div className="header-title">Гарантированный вывод приложения в Топ</div>    
      <div className="header-phone"><div className="phone-icon"></div> <span>8 (921)</span> 111-11-11</div>
    </div>
  </div>
  
  <div className="head">  
    <div className="head-content">  
      <div className="head-text">      
        <h1>Получите до 500 тестовых установок,<br />
        <span>чтобы проверить качество нашего трафика</span></h1>              
      </div>
      <div className="head-image">
        <div className="head-icon-1"></div>
        <div className="head-icon-2"></div>
        <div className="head-icon-3"></div>
        <div className="head-icon-4"></div>
        <div className="head-icon-5"></div>
        <div className="head-icon-6"></div>
        <div className="head-icon-7"></div>
        <div className="head-icon-8"></div>
        <div className="head-l-1"></div>
        <div className="head-l-2"></div>
      </div>
      <HeadForm />
    </div>
  </div>
  
  <div className="have">  
    <h2>У нас есть для Вас</h2>    
    <div className="icon cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeInOutBack">  
      <img src="images/icon-1.png" alt="" className="swing-1" />
      <p><strong>2 собственных мобильных приложения</strong> на IOS и Android</p>
    </div>
    <div className="icon cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="400" data-offset="90%" data-easing="easeInOutBack">  
      <img src="images/icon-2.png" alt="" className="swing-2" />
      <p><strong>До 30000 установок в день</strong><br />
      персональные источники трафика
      </p>
    </div>
    <div className="icon cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="800" data-offset="90%" data-easing="easeInOutBack">  
      <img src="images/icon-3.png" alt="" className="swing-1" />
      <p><strong>Только чистый трафик</strong><br />
      1 установка =<br/>
      1 пользователь</p>
    </div>
    <div className="icon cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="1200" data-offset="90%" data-easing="easeInOutBack">  
      <img src="images/icon-4.png" alt="" className="swing-2" />    
      <p><strong>Над вашим проектом работает 6 человек</strong><br />
      нашей команды</p>
    </div>
  </div>  
  
  <div className="how">  
    <div className="how-content">  
      <h2>Как мы продвигаем ваше приложение</h2>
      <div className="how-text">  
        <p className="how-text-1"> <span className="how-icon-1"></span> Вы приходите к нам со своим приложением, мы заводим его в свою систему (<strong>собственная разработка компании</strong>), оно появляется в системе и <strong>пользователи видят ваше приложение на своих мобильных телефонах</strong></p>    
        <p className="how-text-2"> <span className="how-icon-2"></span> Пользователям показывается push-уведомление в их мобильных телефонах <strong>о появлении нового приложения</strong>, они скачивают приложение по ссылке, которую мы даем, у нас в системе и у вас <strong>в отчете появляется уведомление об установке приложения</strong></p>    
        <p className="how-text-3"> <span className="how-icon-3"></span> <strong>Ваше приложение выходит в Топ, его видит максимальное количество пользователей, скачивают и вы получаете новых уникальных клиентов</strong></p>
      </div>
      <div className="how-dogov">  
        <h3 className="cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeInOutBack">Работаем с Заключением договора</h3>
        <p className="cre-animate" data-animation="slide-in-from-right" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeInOutBack">Возврат части средств при недостижения цели</p>        
        <div className="how-button-bg cre-animate" data-animation="slide-up-from-bottom" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeInOutBack"><div className="how-button">Заказать продвижение приложения у профессионалов</div></div>
      </div>
    </div>
  </div>
  
  <div className="tarif">
    <div className="tarif-content">
    <h2>Вы можете выбрать любой удобный для вас тариф</h2>
  
    <div className="tarif-1">
      <h3>Тариф «Бронзовый»</h3>
      <img src="images/kubok-1.png" alt="" className="tarif-kubok" />
      <p className="tarif-text-1">Определенное<br/>
      количество инсталлов</p>      
      <p className="tarif-text-2">Поддержание приложения на определенных позициях в Топе</p>      
      <p className="tarif-text-3">Вы сами выбираете нужное количество установок, чтобы приложение находилось в Топе, и заказываете их у нас</p>
      <p className="tarif-price">Цена одной установки:
      <strong>от 10 р</strong></p>      
      <div className="tarif-button-bg cre-animate" data-animation="slide-up-from-bottom" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeInOutBack"><div className="tarif-button" onClick={this.handlePopup}>Заказать</div></div>      
    </div>  
    <div className="tarif-2">
      <h3>Тариф «Серебряный»</h3>    
      <img src="images/kubok-2.png" alt="" className="tarif-kubok" />  
      <p className="tarif-text-1">Вывод в Топ по<br/>
      категориям</p>      
      <p className="tarif-text-2">Вам нужно небольшое количество установок <span>(500-5000)</span></p>      
      <p className="tarif-text-3">Мы берем на себя финансовые гарантии <span className="icon-m"><span className="icon-text">В случае невыполнения задачи мы вернем вам деньги</span></span></p>
      <p className="tarif-price">Стоимость: от 5 000 р</p>
      <div className="tarif-button-bg cre-animate" data-animation="slide-up-from-bottom" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeInOutBack"><div className="tarif-button" onClick={this.handlePopup}>Заказать</div></div>
    </div>  
    <div className="tarif-3">    
      <h3>Тариф «Золотой»</h3>  
      <img src="images/kubok-3.png" alt="" className="tarif-kubok" />  
      <p className="tarif-text-1">Вывод<br/> общий Топ</p>      
      <p className="tarif-text-2">Для разных приложений нужно различное количество установок к день, к примеру, вывод в Топ 
      <span>(10000—20000—30000)</span>
      <strong>установок за 24 часа</strong>
      </p>      
      <p className="tarif-text-3">Мы берем на себя финансовые гарантии <span className="icon-m"><span className="icon-text">В случае невыполнения задачи мы вернем вам деньги</span></span></p>
      <p className="tarif-price">Стоимость: от 200 000 р</p>
      <div className="tarif-button-bg cre-animate" data-animation="slide-up-from-bottom" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeInOutBack"><div className="tarif-button"  onClick={this.handlePopup}>Заказать</div></div>
    </div>      
    
    </div>  
  </div>    
  
  <div className="clients">
    <div className="clients-content">
      <h2>Наши довольные клиенты</h2>      
      <div className="clients-slider-bg">
      <ul className="clients-bxslider">
        <li>
          <div className="clients-slider">
            <div className="clients-graf">
              <img src="images/swist.png" width="440" alt="" />
              <a href="images/swist.png" className="g-link-button" data-lightbox="graf-1">Увеличить график</a>
            </div>  
            <div className="clients-task">
              <div className="clients-task-title"><span>Задача:</span> Вывод в топ 10 категории «Социальные сети», а так же поддержание позиции в течении 3-х дней</div>  
              <div className="clients-task-text">Менее чем за сутки на приложение Swist было сделано более 6000 установок и приложение достигло топ 8 категории «Социальные сети», последующие дни было сделано 3000 установок в день, что держало приложение в топ 10.</div>  
            </div>  
            <div className="clients-review cre-animate" data-animation="fade-in" data-speed="800" data-delay="0" data-offset="90%" data-easing="ease">
              <div className="clients-review-foto">
                <img src="images/sitablaev.png" alt="" />
              </div>  
              <div className="clients-review-text">
                <p className="clients-quote"><span className="quote-left"></span>Большое спасибо команде Pushapp за то, что выполнили все обговоренные условия. Ребята - отличные профессионалы своего дела, рад, что обратился именно к ним, и рекомендую всем, кому нужен быстрый старт, но и долгосрочное поддержание тоже планирую у них заказать.<span className="quote-right"></span></p>
                <p className="clients-author">Ситаблаев Энвер, владелец приложения Swist - чата невидимки для ВКонтакте</p>
              </div>              
              <div className="clients-review-bottom"></div>  
            </div>  
          </div>  
        </li>
        <li>
          <div className="clients-slider">
            <div className="clients-graf">
              <img src="images/tuttravel.png" width="440" alt="" />
              <a href="images/tuttravel.png" className="g-link-button" data-lightbox="graf-2">Увеличить график</a>
            </div>  
            <div className="clients-task">
              <div className="clients-task-title"><span>Задача:</span> Вывод в топ 10 категории «Путешествия»</div>  
              <div className="clients-task-text">За 8 часов работы нашего сервиса мы сделали более 2000 инсталлов на приложение tut.travel, что подняло приложение на 10 место.</div>  
            </div>  
            <div className="clients-review cre-animate" data-animation="fade-in" data-speed="800" data-delay="0" data-offset="90%" data-easing="ease">
              <div className="clients-review-foto">
                <img src="images/simanov.png" alt="" />
              </div>  
              <div className="clients-review-text">
                <p className="clients-quote"><span className="quote-left"></span> Я долго и придирчиво выбирал компанию для продвижения нашего приложения, так как конкуренция в нашей сфере высокая и хотелось не обжечься и получить нужный результат в виде нового притока клиентов. Выбор оправдался, благодарю компанию и в частности Евгения, руководителя отдела рекламодателей, за подробное и прозрачное объяснение этапов работы, и конечно за достигнутый результат. Будем работать еще! <span className="quote-right"></span></p>
                <p className="clients-author">Владимир Симанов, генеральный директор компании TUT.TRAVEL, владелец приложения tut.travel для iOS</p>
              </div>                
              <div className="clients-review-bottom"></div>  
            </div>  
          </div>  
        </li>
        <li>
          <div className="clients-slider">
            <div className="clients-graf">
              <img src="images/teamo.png" width="440" alt="" />
              <a href="images/teamo.png" className="g-link-button" data-lightbox="graf-2">Увеличить график</a>
            </div>  
            <div className="clients-task">
              <div className="clients-task-title"><span>Задача:</span> Вывод в общий топ 10 русского AppStore</div>  
              <div className="clients-task-text">За 20 часов работы мы сделали 18 000 установок на приложение Теамо.ру, что дало вывод приложения на 9 место общего топа русского AppStore.</div>  
            </div>  
            <div className="clients-review cre-animate" data-animation="fade-in" data-speed="800" data-delay="0" data-offset="90%" data-easing="ease">
              <div className="clients-review-foto">
                <img src="images/burin.png" alt="" />
              </div>  
              <div className="clients-review-text">
                <p className="clients-quote"><span className="quote-left"></span>  Совместно с компанией Pushapp запустили раскрутку нашего приложения. Что могу сказать - все супер, вы, ребята, профессионалы, обеспечиваете нам стабильный трафик. Желаю вам побольше клиентов, ну а мы с вами надолго :) <span className="quote-right"></span></p>
                <p className="clients-author">Андрей Бурин, генеральный директор и сооснователь компании Теамо.ру</p>
              </div>                
              <div className="clients-review-bottom"></div>  
            </div>  
          </div>  
        </li>
      </ul>
      </div>  
    </div>  
  </div>  
  
  <div className="works">
    <div className="works-content">
      <h2>Мы работаем во многих странах</h2>
      <div className="works-map">
        <div className="map-can-bg">
        <div className="map-can cre-animate" data-animation="fade-in" data-speed="800" data-delay="100" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-usa-bg">
        <div className="map-usa cre-animate" data-animation="fade-in" data-speed="800" data-delay="200" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-rus-bg">
        <div className="map-rus cre-animate" data-animation="fade-in" data-speed="800" data-delay="400" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-fin-bg">
        <div className="map-fin cre-animate" data-animation="fade-in" data-speed="800" data-delay="600" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-shv-bg">
        <div className="map-shv cre-animate" data-animation="fade-in" data-speed="800" data-delay="800" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-bri-bg">
        <div className="map-bri cre-animate" data-animation="fade-in" data-speed="800" data-delay="1000" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-ger-bg">
        <div className="map-ger cre-animate" data-animation="fade-in" data-speed="800" data-delay="1200" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-fra-bg">
        <div className="map-fra cre-animate" data-animation="fade-in" data-speed="800" data-delay="1400" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-kit-bg">
        <div className="map-kit cre-animate" data-animation="fade-in" data-speed="800" data-delay="1600" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-aus-bg">
        <div className="map-aus cre-animate" data-animation="fade-in" data-speed="800" data-delay="1800" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-ind-bg">
        <div className="map-ind cre-animate" data-animation="fade-in" data-speed="800" data-delay="2000" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-kor-bg">
        <div className="map-kor cre-animate" data-animation="fade-in" data-speed="800" data-delay="2200" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-jap-bg">
        <div className="map-jap cre-animate" data-animation="fade-in" data-speed="800" data-delay="2400" data-offset="90%" data-easing="ease"></div>
        </div>
        <div className="map-nz-bg">
        <div className="map-nz cre-animate" data-animation="fade-in" data-speed="800" data-delay="2600" data-offset="90%" data-easing="ease"></div>
        </div>
      </div>
    </div>  
  </div>  
  
  <div className="partners">
    <div className="partners-content">
      <h2>Наши технические партнеры</h2>
      <div className="partners-images">
      <img src="images/appsflyer.png" alt="" className="cre-animate" data-animation="fade-in" data-speed="800" data-delay="0" data-offset="90%" data-easing="ease" />
      <img src="images/mobileapptracking.png" alt="" className="cre-animate" data-animation="fade-in" data-speed="800" data-delay="500" data-offset="90%" data-easing="ease" />
      <img src="images/tracking.png" alt="" className="cre-animate" data-animation="fade-in" data-speed="800" data-delay="1000" data-offset="90%" data-easing="ease" />
      </div>  
    </div>  
  </div>  
  
  <div className="with">    
    <h2>С нами уже работают</h2>
    <div className="with-content">  
      <div className="app cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeOutBack">
      <img src="images/anews.png" alt="" />
      <span>Anews</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="200" data-offset="90%" data-easing="easeOutBack">
      <img src="images/gameofwar.png" alt="" />
      <span>Game Of War</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="400" data-offset="90%" data-easing="easeOutBack">
      <img src="images/meowmix.png" alt="" />
      <span>Meow Mix</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="600" data-offset="90%" data-easing="easeOutBack">
      <img src="images/ucbrowser.png" alt="" />
      <span>UC Browser</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-left" data-speed="700" data-delay="800" data-offset="90%" data-easing="easeOutBack">
      <img src="images/clashoflords.png" alt="" />
      <span>Clash of Lords 2</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-right" data-speed="700" data-delay="0" data-offset="90%" data-easing="easeOutBack">
      <img src="images/mobogenie.png" alt="" />
      <span>Mobogenie</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-right" data-speed="700" data-delay="200" data-offset="90%" data-easing="easeOutBack">
      <img src="images/gettaxi.png" alt="" />
      <span>Get Taxi</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-right" data-speed="700" data-delay="400" data-offset="90%" data-easing="easeOutBack">
      <img src="images/opera.png" alt="" />
      <span>Opera</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-right" data-speed="700" data-delay="600" data-offset="90%" data-easing="easeOutBack">
      <img src="images/castleclash.png" alt="" />
      <span>Castle Clash</span>
      </div>  
      <div className="app cre-animate" data-animation="slide-in-from-right" data-speed="700" data-delay="800" data-offset="90%" data-easing="easeOutBack">
      <img src="images/audiomedit.png" alt="" />
      <span>Аудимедитация</span>
      </div>  
    </div>  
  </div>  
  
  <div className="foot">  
    <div className="foot-content">  
      <div className="foot-text">
        <h2>Получите до 500 тестовых установок,
        <span>чтобы проверить качество нашего трафика</span></h2>
      </div>
      <div className="foot-image">
        <div className="foot-icon-1"></div>
        <div className="foot-icon-2"></div>
        <div className="foot-icon-3"></div>
        <div className="foot-icon-4"></div>
        <div className="foot-icon-5"></div>
        <div className="foot-icon-6"></div>      
      </div>
      <FootForm />
    </div>
  </div>  
  
  <div className="contacts">  
    <div className="contacts-title">  
      <h2>Наши координаты</h2>
    </div>
    <div className="contacts-map">  
      <div className="contacts-map-bg">  
      <script type="text/javascript" charset="utf-8" src="http://api-maps.yandex.ru/services/constructor/1.0/js/?sid=5aoGZiO1me6dXw7P2otBIvJbmZeUuoPO&width=2000&height=600"></script>
      </div>  
    </div>
  </div>  
  
  <div className="footer">  
    <div className="footer-logo"><a href="/"><img src="images/logo.png" alt="" /></a></div>  
    <div className="footer-logo-s"></div>
    <div className="footer-adr">СПб, Лиговский проспект, д.50, к.13</div>    
    <div className="footer-phone"><div className="phone-icon"></div> <span>8 (921)</span> 111-11-11</div>
  </div>
  
</div>

<PopupForm />

<PopupThanks />


      </div>
    );
  }
}

export default App;
