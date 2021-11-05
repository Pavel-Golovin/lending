export const Form = () => (
  <form className="form" onSubmit={() => alert("Ваша заявка успешно отправлена!")}>
    <h2 className="form-title">Оставьте заявку</h2>
    <label>
      <p className="label-text">ФИО:</p>
      <input className="form-input" type="text" placeholder="Иванов Иван Иванович" required/>
    </label>
    <label>
      <p className="label-text">Номер вашего телефона:</p>
      <input className="form-input" type="text" placeholder="+78005553535" required/>
    </label>
    <label>
      <p className="label-text">Ваш e-mail:</p>
      <input className="form-input" type="text" placeholder="corona-law@mail.ru" required/>
    </label>
    <button
      className="form-submit-btn" 
      typeof="button"
    >
      Оставить заявку
    </button>
  </form>
);