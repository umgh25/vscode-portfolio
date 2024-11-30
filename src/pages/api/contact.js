import { Resend } from "resend";

// Initialisez Resend avec votre clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Vérification des champs obligatoires
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis." });
    }

    try {
      // Envoi de l'email via Resend
      const emailResponse = await resend.emails.send({
        from: "usman.mughal@outlook.fr", // Remplacez par votre email d'envoi
        to: "usman.mughal@outlook.fr", // Adresse de réception
        subject: `Nouveau message de ${name}`,
        html: `
          <h1>Message reçu</h1>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p>${message}</p>
        `,
      });

      console.log("Réponse de Resend :", emailResponse); // Log utile pour vérifier la réponse API

      // Réponse de succès au client
      return res
        .status(200)
        .json({ success: true, message: "Email envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);

      // Réponse d'erreur en cas de problème
      return res
        .status(500)
        .json({ error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." });
    }
  } else {
    // Méthode non autorisée
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `Méthode ${req.method} non autorisée.` });
  }
}
