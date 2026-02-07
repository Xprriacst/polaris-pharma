# Configuration Netlify Forms

## 📋 Vue d'ensemble

Le site utilise **Netlify Forms** pour gérer les demandes d'audit gratuit. C'est la solution la plus simple et gratuite (100 soumissions/mois).

## ✅ Ce qui a été implémenté

### 1. Composant de formulaire (`client/src/components/ContactForm.tsx`)
- Formulaire React avec validation
- Gestion des états (envoi, succès, erreur)
- Protection anti-spam avec honeypot
- Design cohérent avec le reste du site

### 2. Intégration dans la page d'accueil
- Section CTA remplacée par le formulaire
- Lien email de secours disponible

### 3. Fichier de détection Netlify (`client/public/forms.html`)
- Permet à Netlify de détecter le formulaire lors du build
- **Important** : Ce fichier doit rester présent

## 🔧 Configuration Netlify

### Après le déploiement :

1. **Activer les notifications email**
   - Aller dans : Site → Forms → Settings → Form notifications
   - Ajouter votre email pour recevoir les soumissions

2. **Configurer les notifications (optionnel)**
   - Slack : Intégration disponible
   - Webhook : Pour envoyer vers n8n ou autre service
   - Zapier : Pour automatiser le traitement

3. **Accéder aux soumissions**
   - Dashboard Netlify → Forms → audit-contact
   - Vous pouvez exporter en CSV

## 📧 Champs du formulaire

- **Nom** (requis)
- **Prénom** (requis)
- **Email** (requis)
- **Téléphone** (optionnel)
- **Nom de la pharmacie** (requis)
- **Logiciel de gestion** (optionnel)
- **Message / Problématiques** (optionnel)

## 🛡️ Protection anti-spam

Le formulaire inclut :
- Champ honeypot (caché) pour bloquer les bots
- Protection Netlify intégrée
- Possibilité d'activer reCAPTCHA dans les settings Netlify

## 🚀 Test du formulaire

Après déploiement :
1. Aller sur le site → section "Prêt à moderniser votre officine ?"
2. Remplir le formulaire de test
3. Vérifier la réception dans Netlify Dashboard → Forms
4. Configurer les notifications email

## 📊 Limites du plan gratuit

- **100 soumissions/mois** (gratuit)
- Au-delà : 19$/mois pour 1000 soumissions

## 🔄 Alternative future (si besoin)

Si vous dépassez 100 soumissions/mois, vous pouvez :
1. Passer au plan payant Netlify
2. Migrer vers n8n avec webhook
3. Utiliser un service externe (Formspree, etc.)

## 📝 Notes importantes

- Le formulaire fonctionne uniquement sur le site déployé (pas en local)
- Pour tester en local, utilisez `netlify dev` (Netlify CLI)
- Les soumissions sont stockées 30 jours sur Netlify
