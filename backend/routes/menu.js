const express = require('express');
const { supabase } = require('../config/supabase');
const router = express.Router();

// Obter todos os itens do menu
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('menu')
      .select('*')
      .eq('available', true)
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obter um item do menu específico
router.get('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('menu')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Adicionar um novo item ao menu
router.post('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('menu')
      .insert([req.body])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar um item do menu
router.put('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('menu')
      .update(req.body)
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remover um item do menu
router.delete('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('menu')
      .update({ available: false })
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) throw error;
    res.json({ message: 'Item removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
