import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/signin", "Page de Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Page d'Inscription", "/pages/auth/signup.html"),
    new Route("/account", "Mon Compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Modifier mot de passe", "/pages/auth/editPassword.html"),
    new Route("/reservations", "Reservations", "/pages/book/reservations.html"),
    new Route("/reserver", "Réserver", "/pages/book/reserver.html"),
    
]

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";