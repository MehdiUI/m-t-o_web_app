🌤️ Application Météo
Une application météo moderne développée avec React, TypeScript et Vite offrant une interface utilisateur élégante et responsive.

✨ Fonctionnalités
🌡️ Affichage des conditions météo actuelles

📊 Graphiques météo interactifs

🔍 Recherche par ville

🌙 Mode sombre/clair

📱 Design responsive

⚡ Performances optimisées

🚀 Démarrage Rapide
bash
# Installation
npm install
fais moi un truc plus beau
🌤️ Weather App
<div align="center">
https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react
https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript
https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite

Une application météo moderne et élégante avec une interface utilisateur exceptionnelle

Fonctionnalités • Installation • Technologies • Développement

</div>
✨ Fonctionnalités
🎯 Principales
🌡️ Météo en temps réel - Données météorologiques actuelles et prévisions

📊 Graphiques interactifs - Visualisations détaillées avec Recharts

🔍 Recherche intelligente - Trouvez n'importe quelle ville rapidement

🌙 Mode sombre/clair - Adaptation automatique à vos préférences

🎨 Expérience Utilisateur
📱 Design responsive - Parfait sur mobile, tablette et desktop

⚡ Performances optimisées - Chargement ultra-rapide avec Vite

🎯 Interface intuitive - Navigation fluide et accessible

🌈 Animations élégantes - Expérience visuelle engageante

🚀 Installation
Prérequis
Node.js 18+

npm ou yarn

Démarrage rapide
bash
# Cloner le projet
git clone <repository-url>
cd weather-app

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Ou builder pour la production
npm run build
Scripts Disponibles
Commande	Description
npm run dev	🏃 Serveur de développement
npm run build	📦 Build de production
npm run preview	👀 Preview du build
npm run lint	🔍 Analyse du code
npm run type-check	✅ Vérification TypeScript
🛠 Technologies
Frontend Principal
Technologie	Version	Usage
React	19.1.1	Framework UI
TypeScript	~5.9.3	Typage statique
Vite	7.1.7	Build tool
UI & Design
Catégorie	Technologies
Composants	Radix UI, CMDK
Styling	Tailwind CSS, clsx, tailwind-merge
Icônes	Lucide React
Animations	tailwindcss-animate
Data & State
Outil	Fonction
TanStack Query	Gestion des données
Redux Toolkit	State management
Recharts	Visualisations
Développement
Outil	Usage
ESLint	Qualité du code
PostCSS	Transformation CSS
Autoprefixer	Compatibilité CSS
📁 Structure du Projet
text
src/
├── components/          # 🧩 Composants réutilisables
│   ├── ui/             # Composants d'interface
│   ├── weather/        # Composants météo spécifiques
│   └── charts/         # Composants graphiques
├── hooks/              # 🎣 Custom hooks
├── store/              # 🏪 Configuration Redux
├── services/           # 🌐 Services API
├── utils/              # 🔧 Utilitaires
├── types/              # 📝 Définitions TypeScript
└── styles/             # 🎨 Styles globaux
⚙️ Configuration
Variables d'Environnement
Créez un fichier .env à la racine :

env
VITE_WEATHER_API_KEY=votre_cle_api_meteo
VITE_API_BASE_URL=https://api.meteo.com/v1
VITE_APP_NAME=WeatherApp
Personnalisation
Modifiez tailwind.config.js pour personnaliser :

javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      weather: {
        sunny: '#F59E0B',
        rainy: '#60A5FA',
        cloudy: '#9CA3AF'
      }
    }
  }
}
🎨 Thèmes
L'application supporte deux thèmes :

🌞 Light - Interface claire et épurée

🌙 Dark - Mode sombre reposant pour les yeux

Le thème s'adapte automatiquement aux préférences système.

📱 Responsive Design
Breakpoint	Usage
sm (640px)	Mobile
md (768px)	Tablet
lg (1024px)	Desktop
xl (1280px)	Large screens
🔧 Développement
Standards de Code
ESLint avec configuration TypeScript

Prettier pour le formatting

Conventions de nommage cohérentes

Bonnes Pratiques
Composants fonctionnels avec hooks

Typage TypeScript strict

Code splitting automatique

Optimisation des performances

🤝 Contribution
Les contributions sont les bienvenues ! Voici comment participer :

🍴 Fork le projet

🌿 Créer une branche feature (git checkout -b feature/AmazingFeature)

💾 Commiter les changements (git commit -m 'Add AmazingFeature')

📤 Push vers la branche (git push origin feature/AmazingFeature)

🔀 Ouvrir une Pull Request

📄 Licence
Distribué sous la licence MIT. Voir LICENSE pour plus d'informations.

🙏 Remerciements
Vite - Build tool incroyablement rapide

Tailwind CSS - Framework CSS utilitaire

Radix UI - Composants accessibles

Lucide - Icônes élégantes

Recharts - Bibliothèque de graphiques

<div align="center">
Développé avec ❤️ et les dernières technologies web modernes

"La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer." - Antoine de Saint-Exupéry

</div>
