module.exports = (req, res) => {
  // السماح بمرور البيانات من أي موقع (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  const { status, amt, tok } = req.query;

  // طباعة البيانات في الـ Logs (ستراها في لوحة تحكم Vercel)
  console.log(`[!] إشارة جديدة: الحالة=${status}, المبلغ=${amt}, التوكن=${tok}`);

  res.status(200).send("OK - Data Received");
};
