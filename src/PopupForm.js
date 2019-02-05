import React, { Component } from 'react';
import $ from 'jquery';

class PopupForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	form: '3. Заполните заявку и наши специалисты свяжутся с Вами для обсуждения заказа',
    	name: '',
    	email: '',
    	phone: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    this.setState({
    	[name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    $.post( "form.php", { form: this.state.form, name: this.state.name, email: this.state.email, phone: this.state.phone } )
    .done(function( data ) {
    $(".popup-thanks").fadeIn("slow");
    });
  }

  handleClose() {
    $(".popup-form").fadeOut("slow");
  }

  render() {
    return (
    	<div id="popup-form" className="popup-form">
        <div class="popup">  
          <div class="popup-close" onClick={this.handleClose}></div>
          <div class="popup-title">Заполните заявку и наши специалисты свяжутся с Вами для обсуждения заказа</div>
          <form class="form-3-1" action="" method="post">
            <input type="text" name="name" placeholder="Ваше имя *" value="" class="input-name" />
            <input type="text" name="email" placeholder="Email или Skype *" value="" class="input-email" />
            <input type="text" name="phone" placeholder="Контактный телефон" value="" class="input-phone" />
            <textarea name="task" class="input-textarea" placeholder="Опишите задачу"></textarea>
            <input type="submit" value="Оставить заявку" class="input-submit" />
          </form>  
        </div>
    </div>
    );
  }
}

export default PopupForm;