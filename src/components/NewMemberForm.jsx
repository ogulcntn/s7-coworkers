import { useState } from "react";
import axios from "axios";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

const initialForm = {
  fullName: "",
  email: "",
  notes: "",
};

export default function NewMemberForm({ addMember }) {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formData)
      .then((response) => {
        addMember(response.data);
        setFormData(initialForm);
      })
      .catch((error) => console.log(error));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="fullName">Ad Soyad</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="notes">Notlar</label>
        <input
          type="text"
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Kaydet</Button>
    </Form>
  );
}
