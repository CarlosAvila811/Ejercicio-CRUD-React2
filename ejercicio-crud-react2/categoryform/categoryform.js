import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

<Form onSubmit={handleSubmit}>
  <Form.Group>
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
    {errors.name && <p className="text-danger">{errors.name}</p>}
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Guardar
  </Button>
</Form>