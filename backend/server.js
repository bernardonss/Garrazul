const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { supabase } = require('./config/supabase');
const menuRoutes = require('./routes/menu');
const reservationsRoutes = require('./routes/reservations');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationsRoutes);

// Teste de conexão com Supabase
app.get('/api/health', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('auth.users')
      .select('*')
      .limit(1);

    if (error) throw error;
    
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});



// Configuração do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
