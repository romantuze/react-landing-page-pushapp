import React, { Component } from 'react';
import $ from 'jquery';

class HeadForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	form: '1. Заполните заявку и наши специалисты свяжутся с Вами для обсуждения заказа',
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
    	<div className="head-form">
        <p>Заполните заявку и наши специалисты свяжутся с Вами для обсуждения заказа</p>
        <div className="form-result"></div>
        <form className="form-1" action="" method="post" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form" value="" />
          <input type="text" name="name" placeholder="Ваше имя *" value={this.state.name} className="input-name" required onChange={this.handleChange} />
          <input type="text" name="email" placeholder="Email или Skype *" value={this.state.email} className="input-email" required onChange={this.handleChange} />
          <input type="text" name="phone" placeholder="Контактный телефон" value={this.state.phone} className="input-phone" required onChange={this.handleChange} />
          <input type="submit" value="Оставить заявку"  className="input-submit" />
        </form>
      </div>
    );
  }
}

export default HeadForm;