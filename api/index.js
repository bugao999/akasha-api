module.exports = (req, res) => {
  const id = req.query.id;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (!id || id === 'undefined' || id.trim() === '') {
    return res.status(200).send('https://akasha.cv');
  }

  return res.status(200).send(`https://akasha.cv/profile/${id.trim()}`);
};
