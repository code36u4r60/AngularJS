# Organizando o Projeto

### Tópicos
- Inline Style
- Stereotyped Style
- 

## Inline Style
> Tudo no mesmo arquivo

```
app/
    index.html
    angular.html
```

- Projetos muito simples
- Protótipos 
- Provas de conceitos
- Hello World!

## Stereotyped Style
> Os componentes do mesmo tipo juntos

```
app/
    css/
        app.css

    js/
        app.js
        controller.js
        directives.js
        filters.js

    lib/
        angular.js

    view/
        login.html
        lista.html

    index.html
```

- Projetos pequenos
- Poucos componentes
- Pouco código em cada componente
- Domínio único

## Specific Style 
> Um arquivo para cada componente

```
app/
    css/
        app.css
    js/
        controllers/
            loginCtrl.js
            listaCtrl.js
        
        directives/
            panelDirective.js
            tableDirective.js
        
        services/
            loginService.js
            listaService.js
        
        app.js
    
    lib/
        angular.js
    
    view/ 
        login.html
        lista.html
    
    index.html
```
- Projetos médios 
- Muitos componentes
- Número de linhas em cada arquivo já começa a incomodar
- Domínio relativamente extenso

## Domain Style
> Agrupando os arquivos por domínio

```
app/
    app/
        app.css
        app.js
    
    login/
        login.css
        login.html
        loginCtrl.js
        login.Service.js

    lista/
        lista.css
        lista.html
        listaCtrl.js
        listaService.js

    shared/
        panelDirective.js
        tableDirective.js

    lib/
        angular.js
    
    index.html
```

