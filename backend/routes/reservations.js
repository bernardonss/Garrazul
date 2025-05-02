const express = require('express');
const { supabase } = require('../config/supabase');
const router = express.Router();

// Criar uma nova reserva
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, date, time, guests, message } = req.body;
    
    // Converter a data e hora para o formato timestamp
    const reservationDate = new Date(`${date}T${time}:00`);
    
    const { data, error } = await supabase
      .from('reservations')
      .insert({
        name,
        email,
        phone,
        date: reservationDate,
        number_of_people: guests,
        special_requests: message
      })
      .select()
      .single();

    if (error) throw error;
    
    res.status(201).json({ 
      message: 'Reserva criada com sucesso!',
      reservation: data 
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

// Obter todas as reservas (para admin)
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ 
      error: error.message 
    });
  }
});

module.exports = router;
