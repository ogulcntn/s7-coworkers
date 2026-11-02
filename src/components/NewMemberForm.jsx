import { useState } from "react";
import axios from "axios";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

const initialForm = {
  fullName: "",
  email: "",
  notes: "",
};

export default function NewMemberForm(addMember) {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="fullName">Ad Soyad</label>
        <input type="text" id="fullName" name="fullName" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="notes">Notlar</label>
        <input type="text" id="notes" name="notes" />
      </FormGroup>
      <Button>Kaydet</Button>
    </Form>
  );
}
