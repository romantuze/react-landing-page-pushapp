import React, { Component } from 'react';
import $ from 'jquery';

class PopupThanks extends Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    $(".popup-thanks").fadeOut("slow");
  }

  render() {
    return (
   <div class="popup-thanks">
    <div class="popup">  
      <div class="popup-close" onClick={this.handleClose}></div>
      <div class="popup-text">
      <p><strong>Благодарим! Ваша заявка успешно сформирована!</strong>
      Наши менеджеры позвонят Вам в течении 12 часов!</p>
      </div>
      <div class="popup-button">Вернуться к сайту</div>
    </div>
   </div>
    );
  }
}

export default PopupThanks;