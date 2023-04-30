import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    haslo: '',
    nip: '',
    confirmPassword: '',
    Telefon: '',
    Rola: '',
  });
  const [isEditing, setIsEditing] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // symulacja wysyłania danych na serwer
    setTimeout(() => {
      setIsSubmitted(true);
      setIsEditing(false);
      setIsError(false);
    }, 1000);
  };

  const handleEdit = () => {
    // wywoływana jest, gdy użytkownik chce edytować swoje dane lub formularz.
    setIsEditing(true);
    setIsSubmitted(false);
    setIsError(false);
  };

  const renderSummary = () => {
    return (
      <div>
        <h3>Podsumowanie</h3>
        <p>
          Email: <strong>{formData.email}</strong>
        </p>
        <p>
          NIP: <strong>{formData.nip}</strong>
        </p>
        <p>
          Telefon: <strong>{formData.Telefon}</strong>
        </p>
        <p>
          Rola użytkownika: <strong>{formData.Rola}</strong>
        </p>
        <button onClick={handleEdit}>Edytuj dane</button>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Email (Login):
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Hasło:
          <input
            type="password"
            name="haslo"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}" // pattern (musi zawierac conajmniej 1 cyfre)(conajmniej jedna litera)(conajmniej jedna duza litera)(min.jeden znak specjalny)(8 znakow)
            value={formData.haslo}
            onChange={handleChange}
          />
        </label>
        <label>
          NIP:
          <input
            type="text"
            name="nip"
            required
            value={formData.nip}
            onChange={handleChange}
          />
        </label>
        <label>
          Powtórz hasło:
          <input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefon:
          <input
            type="tel"
            name="Telefon"
            value={formData.Telefon}
            onChange={handleChange}
          />
        </label>
        <label>
          Rola użytkownika:
          <select
            name="Rola"
            required
            value={formData.Rola}
            onChange={handleChange}>
            <option value="">Wybierz rolę</option>
            <option value="Administrator">Administrator</option>
            <option value="Dyrektor">Dyrektor</option>
            <option value="Inspektor">Inspektor</option>
            <option value="Kierownik">Kierownik</option>
            <option value="Księgowy">Księgowy</option>
            <option value="Pełnomocnik">Pełnomocnik</option>
          </select>
        </label>

        <button type="submit">Zarejestruj się</button>
      </form>
    );
  };

  return (
    <div>
      {isEditing ? renderForm() : null}
      {isSubmitted ? renderSummary() : null}
      {isError ? <p>Błąd rejestracji. Spróbuj ponownie później.</p> : null}
    </div>
  );
}

export default RegistrationForm;
