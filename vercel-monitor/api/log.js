export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { status } = req.query;
    console.log("إشارة مستلمة:", status);
    res.status(200).send("OK - Data Received");
}
