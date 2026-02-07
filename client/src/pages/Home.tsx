import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

/**
 * Polaris IA - Home Page
 * Design: Minimalisme Technologique Nordique
 * 
 * Sections:
 * 1. Hero: Présentation de Polaris IA avec image de pharmacie
 * 2. Problem: Pain points des pharmaciens
 * 3. Solutions: 5 solutions principales
 * 4. Results: Chiffres clés et ROI
 * 5. Process: 4 étapes de la méthode
 * 6. CTA: Audit gratuit
 */

export default function Home() {
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      title: "Vérification automatique des factures",
      description: "Extraction des montants, détection des anomalies et des doublons. Récupération automatique des écarts et facilitation des remboursements.",
      timeGained: "3-4h/semaine",
      icon: "📄",
    },
    {
      id: 2,
      title: "Traitement automatisé des rejets",
      description: "Catégorisation automatique des rejets, génération de relances pré-remplies et tableau de bord de suivi.",
      timeGained: "4-5h/mois",
      icon: "🔄",
    },
    {
      id: 3,
      title: "Vérification intelligente des ordonnances",
      description: "Contrôle automatisé des ordonnances pour minimiser les risques d'erreurs et protéger votre responsabilité.",
      timeGained: "Sécurité renforcée",
      icon: "✅",
    },
    {
      id: 4,
      title: "Formation digitalisée de vos équipes",
      description: "Bibliothèque de tutoriels vidéo, quiz et checklist pour une autonomie rapide de vos collaborateurs.",
      timeGained: "15-20h par recrue",
      icon: "🎓",
    },
    {
      id: 5,
      title: "Optimisation intelligente de votre parapharmacie",
      description: "IA analysant les ventes et les marges pour optimiser votre mix produit et vos achats de parapharmacie (TVA 20%).",
      timeGained: "2-3h/semaine",
      icon: "📊",
    },
  ];

  const results = [
    {
      stat: "jusqu'à 20h",
      label: "récupérées par semaine",
      icon: TrendingUp,
    },
    {
      stat: "jusqu'à -80%",
      label: "d'erreurs sur la gestion des stocks",
      icon: CheckCircle,
    },
    {
      stat: "jusqu'à -50%",
      label: "de réduction du temps d'attente patient",
      icon: Users,
    },
  ];

  const process = [
    {
      number: 1,
      title: "Audit gratuit",
      description: "Analyse de vos processus actuels et identification des gains potentiels.",
    },
    {
      number: 2,
      title: "Solution personnalisée",
      description: "Création d'automatisations adaptées à votre logiciel et vos besoins.",
    },
    {
      number: 3,
      title: "Formation",
      description: "Accompagnement complet pour une autonomie totale de votre équipe.",
    },
    {
      number: 4,
      title: "3 mois de support",
      description: "Optimisation et assistance technique dédiée.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-lg text-foreground">Polaris IA</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors">
              Résultats
            </a>
            <a href="#cta" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Automatisation pour pharmacies
                </span>
              </div>
              <h1 className="text-foreground">
                Redonnez du temps<br />au cœur de votre métier.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Polaris IA automatise vos tâches administratives, la gestion des stocks et les flux financiers. Libérez-vous de la surcharge mentale pour vous consacrer à vos patients.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="cta-button" size="lg">
                  Audit gratuit <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button className="secondary-button" size="lg" variant="outline">
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/UR5UWD48xww2EIxDabQbxk/sandbox/zY6NnNxJoZvqxmTFWOtVUT-img-1_1770413494000_na1fn_aGVyby1waGFybWFjeQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVVI1VVdENDh4d3cyRUl4RGFiUWJ4ay9zYW5kYm94L3pZNk5uTnhKb1p2cXhtVEZXT3RWVVQtaW1nLTFfMTc3MDQxMzQ5NDAwMF9uYTFmbl9hR1Z5Ynkxd2FHRnliV0ZqZVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ofjGTGfKJjNvVjZ-hCeXGYLUyEumZcY1rVZrRBZ31PaKKGTbuIoHDhHQvx05OXKZz2FRw9CkmtuOWstbtKJVLveCLSpQnQ6RCrH9xWjJlzSn7sGnc~EX4Vv0eEHAAuDM2wJ1LmIwOEVBMh-i7PixU5aVmqzS4z~Cfmw2QopuqrY04mVlV5SSg8G6zKT2eDsXrj~arasrCeGf8vk6VKO~QOdp6~KWIfub83~bZl8lTnncrYQ8PSIU0nxI1syEQ12stCw22KcR8i3aJysTWgGGmYjEFb8jB8pSDNBkRnoPXLO5sp86Lk7go8kKCqmuhkv-kyyRkpRJiSm7U6VZMHvx3Q__"
                alt="Pharmacie moderne"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">Les défis du quotidien</h2>
            <p className="text-lg text-muted-foreground">
              Nous comprenons la réalité du pharmacien d'aujourd'hui, tiraillé entre soins et gestion.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Surcharge Administrative</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gestion des factures en attente, comptabilité complexe et lourdeurs administratives qui s'accumulent.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Complexité d'Approvisionnement</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Gestion des ruptures, multiplicité des circuits, offres concurrentielles et nouveaux fournisseurs.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Relation Patient & RH</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Support mutuelles, incivilités, aide numérique, gestion des appels et management des équipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">Des solutions 100% sur mesure</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Voici 5 exemples d'automatisations que nous proposons. Votre solution sera entièrement personnalisée selon vos besoins spécifiques.
            </p>
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 mb-6">
              <p className="text-sm font-semibold text-primary">
                💡 Chaque pharmacie est unique. Nous adaptons nos solutions à vos contraintes et vos outils.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer bg-card relative"
                onClick={() => setExpandedSolution(expandedSolution === solution.id ? null : solution.id)}
              >
                <div className="absolute top-3 right-3 bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded">
                  Exemple
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{solution.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
                    {expandedSolution === solution.id && (
                      <p className="text-muted-foreground mb-3">{solution.description}</p>
                    )}
                    <div className="text-sm font-semibold text-primary">
                      Gain estimé: {solution.timeGained}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">Résultats concrets et mesurables</h2>
            <p className="text-lg text-muted-foreground">
              Une méthode éprouvée avec des gains quantifiables pour votre officine.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, idx) => {
              const Icon = result.icon;
              return (
                <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="stat-number mb-2">{result.stat}</div>
                  <p className="text-muted-foreground text-sm">{result.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-foreground mb-4">Notre approche : 4 étapes pour votre transformation</h2>
            <p className="text-lg text-muted-foreground">
              Un accompagnement complet et personnalisé pour transformer votre pharmacie selon vos besoins spécifiques.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-background border border-border rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Section */}
      <section
        id="cta"
        className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-b border-border"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-foreground mb-6">Prêt à moderniser votre officine ?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Discutons de vos problématiques spécifiques et voyons comment l'automatisation peut vous faire gagner des heures précieuses chaque semaine.
              </p>
              <p className="text-sm text-muted-foreground mb-4 italic">
                Les solutions présentées ci-dessus sont des exemples. Votre solution sera adaptée à votre logiciel, vos besoins spécifiques et vos contraintes.
              </p>
            </div>
            <ContactForm />
            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground">
                Ou contactez-nous directement par email :{" "}
                <a href="mailto:contact@polaris-ia.fr" className="text-primary hover:underline font-semibold">
                  contact@polaris-ia.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">P</span>
                </div>
                <span className="font-bold text-foreground">Polaris IA</span>
              </div>
              <p className="text-muted-foreground text-sm">
                L'automatisation au service de votre officine
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">Solutions</a></li>
                <li><a href="#results" className="text-muted-foreground hover:text-primary transition-colors">Résultats</a></li>
                <li><a href="#cta" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-muted-foreground text-sm">
                📧 contact@polaris-ia.fr
              </p>
              <p className="text-muted-foreground text-sm">
                🌐 www.polaris-ia.fr
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 Polaris IA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
