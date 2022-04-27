import { validateForms } from '../functions/validate-forms';


const rules = [
  {
    ruleSelector: '#subscriptionInput',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
    ],
    config: {
      errorFieldStyle: '',
      errorFieldCssClass: 'field__input--error',
      errorLabelStyle: {
        color: ''
      },
      errorLabelCssClass: 'field__error',
      successFieldStyle: '',
      successFieldCssClass: 'field__input--success',
      successLabelStyle: '',
      successLabelCssClass: '',
      tooltip: {
        position: '',
      },
      successMessage: '',
      errorsContainer: '',
    }
  },
];
const afterForm = () => {
  const subscription = document.querySelector('.subscription__wrapper');
  const subscriptionTitle = subscription.querySelector('.subscription__title');
  subscriptionTitle.textContent = "Отлично!";
  const subscriptionText = subscription.querySelector('.subscription__text');
  subscriptionText.textContent = 'На указанный Вами адрес теперь будут приходить самые важные новости';
  subscription.querySelector('.subscription__form').remove();
};

validateForms('.subscription__form', rules, afterForm);
