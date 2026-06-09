module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const phone = String(req.query.phone || '').replace(/\D/g, '');
  const text = String(req.query.text || '').trim().slice(0, 1500);
  const apikey = String(req.query.apikey || '').trim();

  if (!phone || !text || !apikey) {
    return res.status(400).json({ ok: false, error: 'phone, text e apikey obrigatorios' });
  }

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apikey)}`;

  try {
    const r = await fetch(url);
    const body = await r.text();
    const paused = /paused/i.test(body);
    const queued = /queued/i.test(body);
    const blocked = /bot is full|0 messages|no messages left/i.test(body);
    const ok = queued && !paused && !blocked;
    return res.status(200).json({ ok, body, paused, queued, blocked });
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) });
  }
};
