import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      alert("Une erreur est survenue. Veuillez réessayer ou nous contacter par email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Demande envoyée avec succès !
        </h3>
        <p className="text-muted-foreground mb-4">
          Nous vous recontacterons dans les 24h pour planifier votre audit gratuit.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
        >
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form
      name="audit-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto"
    >
      {/* Champs cachés requis par Netlify */}
      <input type="hidden" name="form-name" value="audit-contact" />
      <input type="hidden" name="bot-field" />

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="nom" className="text-sm font-medium text-foreground">
              Nom *
            </label>
            <Input
              id="nom"
              name="nom"
              type="text"
              required
              placeholder="Votre nom"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="prenom" className="text-sm font-medium text-foreground">
              Prénom *
            </label>
            <Input
              id="prenom"
              name="prenom"
              type="text"
              required
              placeholder="Votre prénom"
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre.email@exemple.fr"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="telephone" className="text-sm font-medium text-foreground">
            Téléphone
          </label>
          <Input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="06 12 34 56 78"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="pharmacie" className="text-sm font-medium text-foreground">
            Nom de votre pharmacie *
          </label>
          <Input
            id="pharmacie"
            name="pharmacie"
            type="text"
            required
            placeholder="Pharmacie..."
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="logiciel" className="text-sm font-medium text-foreground">
            Logiciel de gestion utilisé
          </label>
          <Input
            id="logiciel"
            name="logiciel"
            type="text"
            placeholder="Ex: Winpharma, Pharmagest, etc."
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message / Problématiques principales
          </label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Décrivez brièvement vos besoins et les tâches que vous aimeriez automatiser..."
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          className="cta-button w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            "Demander mon audit gratuit"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          En soumettant ce formulaire, vous acceptez d'être contacté par Polaris IA concernant votre demande d'audit.
        </p>
      </div>
    </form>
  );
}
