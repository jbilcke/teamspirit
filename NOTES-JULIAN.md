Notes :

- attention ! je n'ai pas eu le temps de mettre le css global dans le storybook

- j'ai écris un bout de client d'API, mais finalement l'app tourne uniquement en local..

- les changements ne sont pas sauvegardés, pas de localStorage

- j'héberge uniquement des assets statiques mais j'ai laissé le BrowserHistory, les liens ne sont donc pas partageables dans cette version

- en temps normal je passe par des imports absolus en utilisant des alias, mais il faut éjecter le Create React App pour pouvoir customiser le webpack config ( https://github.com/facebook/create-react-app/pull/3554 ). J'ai préféré le laisser en config de base.
