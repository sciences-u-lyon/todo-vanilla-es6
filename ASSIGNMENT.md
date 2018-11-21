# Filtrer les todos

Afin que notre application soit 100% fonctionnelle, vous allez implémenter la fonctionnalité de filtrage des todos.

## Spécifications

Il existe 3 filtres, représentés par des liens dans le footer de la liste, dans l'interface graphique : `All` (sélectionné par défaut), `Active` et `Completed`.

- Un clic sur le lien `All` doit afficher toutes les todos de la liste
- Un clic sur le lien `Active` doit afficher uniquement les todos actives de la liste
- Un clic sur le lien `Completed` doit afficher uniquement les todos complétées de la liste

Comme vous pouvez le remarquez, le clic sur ces liens modifie le hash de l'URL du navigateur.

## Instructions

### store.js

#### getTodoList

Comme vous pouvez le remarquez dans la fonction `render` de `main.js`, nous utilisons maintenant la fonction `getTodoList` de l'objet `store` pour récupérer la liste des todos filtrées. Pour l'instant, cette fonction retourne la liste complète. Vous devez modifier son implémentation pour qu'elle prenne en compte le filtre (propriété `filter` de la classe `Store`). L'algorithme est le suivant :

Si le filtre (`this.filter`) est égal à `''` ou `'#/'`, alors on retourne la liste complète. Sinon, si le filtre est égal à `'#/completed'`, alors on retourne une nouvelle liste composée uniquement des todos qui sont `completed`. Sinon, si le filtre est égal à `'#/active'`, alors on retourne une nouvelle liste composée uniquement des todos qui ne sont pas `completed`.

#### updateFilter

Implémentez cette fonction pour mettre à jour le filtre de la classe `Store` (`this.filter`) avec le filtre passé en paramètre (`filter`).

### view.js

#### clearFilters

Cette fonction est appelée dans la fonction `render` et est en charge de déselectionner tous les filtres à chaque fois qu'un rendu de la liste est fait. Implémentez cette fonction avec l'algorithme suivant :

Pour chaque filtre (lien `<a href="...">`) du tableau `this.$ahrefs`, supprimez la classe `selected`.

#### selectFilter

Cette fonction est aussi appelée dans la fonction `render` et est en charge de sélectionner le filtre correspondant au hash de l'URL courante. Implémentez cette fonction avec l'algorithme suivant :

Récupérer le hash de l'URL courante (pour cela, utilisez la fonction `getSelectedFilter` qui est déjà implémentée). Sélectionnez dans le DOM la balise `<a>` dont la valeur de l'attribut `href` correspond à ce hash. Ajoutez la classe `selected` à cette balise.

#### onFilterTodos

Cette fonction est en charge d'exécuter une callback passée en paramètre, à chaque fois que le hash de l'URL change. Implémentez cette fonction en appelant la callback passée en paramètre, sur l'évenement `'hashchange'` de l'objet `window`. Récupérer le hash de l'URL courante avec la fonction `getSelectedFilter`. Passez ce hash dans la callback, en tant que paramètre.

### main.js

Il ne vous reste plus qu'à appeler la fonction `onFilterTodos` en lui passant une fonction en paramètre (callback). Cette callback a un seul et unique paramètre : `filter` (qui correspond au hash de l'URL courante). Appelez ensuite la fonction `updateFilter` de l'objet `store`, avec comme paramètre le `filter` récupéré de la callback. Enfin, appelez la fonction `render` pour mettre à jour l'affichage global.
