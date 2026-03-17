export default function handler(req, res) {
    // السماح بالوصول من أي مكان (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const { status, amt, tok, tx } = req.query;

    // طباعة البيانات في سجلات Vercel (Logs)
    console.log("--- إشارة جديدة مستلمة ---");
    console.log(`الحالة: ${status}`);
    console.log(`المبلغ: ${amt}`);
    console.log(`التوكن: ${tok}`);
    console.log(`المعاملة: ${tx}`);

    res.status(200).json({ status: 'received' });
}