import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryCard } from './CategoryCard';
const [categories, setCategories] = useState([]);

useEffect(() => {
  const fetchCategories = async () => {
    const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
    setCategories(response.data);
  };
  fetchCategories();
}, []);