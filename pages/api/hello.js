// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res){
    const email = req.body.email;
    // Then save email to your database, etc...
    res.status(200).json({ text: 'Hello' });
}