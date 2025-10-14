🌤️ Application Météo
Une application météo moderne et élégante développée avec React et Vite, offrant une expérience utilisateur fluide et intuitive.

✨ Fonctionnalités
🌡️ Affichage des conditions météo actuelles

📊 Graphiques météo interactifs avec Recharts

🔍 Recherche par ville

🌙 Mode sombre/clair avec Next Themes

📱 Interface responsive et moderne

⚡ Performances optimisées avec Vite

🎨 Design système avec Radix UI et Tailwind CSS

🛠️ Technologies Utilisées
Frontend
React 19 - Bibliothèque UI moderne

TypeScript - Typage statique

Vite - Build tool rapide

Tailwind CSS - Framework CSS utilitaire

Tailwind Merge & Animate - Styles avancés

UI Components
Radix UI - Composants accessibles (Dialog, Tooltip, Scroll Area)

Lucide React - Icônes

Class Variance Authority - Gestion des variants de composants

CMDK - Interface de commande

State Management & Data
TanStack Query - Gestion des données serveur

Redux Toolkit - State management global

Recharts - Graphiques et visualisations

Utilitaires
date-fns - Manipulation des dates

clsx & tailwind-merge - Gestion des classes CSS

Sonner - Notifications toast

Développement
ESLint - Linting du code

TypeScript ESLint - Règles TypeScript

PostCSS & Autoprefixer - Traitement CSS

🚀 Installation
bash
# Cloner le repository
git clone [url-du-repo]
cd vite-project

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour la production
npm run build

# Preview du build
npm run preview
📁 Structure du Projet
text
src/
├── components/          # Composants React
├── hooks/              # Custom hooks
├── store/              # Configuration Redux
├── utils/              # Utilitaires
├── styles/             # Styles globaux
└── types/              # Définitions TypeScript
🎯 Scripts Disponibles
npm run dev - Lance le serveur de développement

npm run build - Build de production

npm run preview - Preview du build

npm run lint - Linting du code

npm run type-check - Vérification TypeScript

🌐 API Météo
L'application utilise une API météo pour récupérer les données en temps réel. Assurez-vous d'avoir une clé API valide et de la configurer dans les variables d'environnement.

🎨 Personnalisation
Thèmes
L'application supporte le mode sombre/clair via Next Themes. Les couleurs peuvent être personnalisées dans le fichier tailwind.config.js.

Composants
Les composants utilisent Class Variance Authority pour une gestion flexible des variants et états.

📱 Responsive Design
L'interface s'adapte parfaitement à tous les appareils :

Mobile (< 768px)

Tablet (768px - 1024px)

Desktop (> 1024px)

🔧 Configuration
Variables d'Environnement
Créez un fichier .env à la racine :

env
VITE_WEATHER_API_KEY=votre_cle_api
VITE_WEATHER_API_URL=https://api.meteo.com
Tailwind CSS
La configuration Tailwind inclut :

Animations personnalisées

Couleurs du thème

Breakpoints responsive

🤝 Contribution
Les contributions sont les bienvenues ! N'hésitez pas à :

Fork le projet

Créer une branche feature

Commiter vos changements

Push vers la branche

Ouvrir une Pull Request

📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

🙏 Remerciements
Vite pour l'outil de build incroyablement rapide

Tailwind CSS pour le système de design

Radix UI pour les composants accessibles

Lucide pour les icônes

Recharts pour les graphiques
