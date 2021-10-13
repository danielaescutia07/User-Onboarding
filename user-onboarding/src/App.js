import './App.css';

import React, { useState, useEffect } from 'react';
import Form from './Form';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

function App() {
  return (
    <div className="App">
      <h1>USER ONBOARDING FORM</h1>
      <Form />
    </div>
  );
}

export default App;
