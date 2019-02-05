import React, { Component } from 'react';
import $ from 'jquery';

class FootForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: '2. Заполните заявку и наши специалисты свяжутся с Вами для обсуждения заказа',
      name: '',
      email: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="foot-form">
        <p>Заполните заявку и наши специалисты свяжутся с Вами для обсуждения заказа</p>
        <form className="form-2" action="" method="post">
          <input type="text" name="name" placeholder="Ваше имя *" value={this.state.name} className="input-name" required onChange={this.handleChange} />
          <input type="text" name="email" placeholder="Email или Skype *" value={this.state.email} className="input-email" required onChange={this.handleChange} />
          <input type="text" name="phone" placeholder="Контактный телефон" value={this.state.phone} className="input-phone" required onChange={this.handleChange} />
          <div className="input-submit-bg cre-animate" data-animation="slide-up-from-bottom" data-speed="700" data-delay="0" data-offset="100%" data-easing="easeInOutBack">
          <input type="submit" value="Оставить заявку" className="input-submit" />
          </div>
        </form>  
      </div>
    );
  }
}

export default FootForm;