import { useState } from "react";
import axios from "axios";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

const initialForm = {
  fullName: "",
  email: "",
  notes: "",
};

export default function NewMemberForm(addMember) {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...setFormData,
      [name]: value,
    });
  }

  return (
    <Form>
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
          type="text"
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
      <Button>Kaydet</Button>
    </Form>
  );
}
