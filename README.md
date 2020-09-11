# Candidato


## Para alterar o candidado do projeto:
  
    
  ### Alterando o tema

    As váriaveis CSS e classes de tema estão localizadas em:

    `src/tema.css`

    Opções

    `
    /* Dominio */
  
    --logo-campanha-size: 30px;
    --logo-campanha-margin: 10px auto;
  
    --numero-campanha-color: yellow;
    --numero-campanha-size: 30px ;
    --numero-campanha-margin: 0 0 10px 0;
  
    
    --primario-default: orange;
  
    /* Colors */
    --foreground-default: #08090a;
  
    --background-default: #f4faff;
  
    --cor-texto-partido:yellow;
    .tem-background-primario{
      background:var(--primario-default) !important;
    }
    .tem-cor-primaria{
      color:var(--primario-default) !important;
    }
    .tem-borda-primaria{
      border-color: 1px solid var(--primario-default) !important;
    }
    `

  ## 2. Alterar imagens.

      As imagens do candidato e de fundo estão localizadas em

      `assets/imagens/inicio`

      Enquanto os ícones (redes sociais e lojas de aplicativos) estão localizados em

      `assets/imagens/icones`


      ## Para alterar as imagens, utilizar ajudante (CaminhoHelper.ts)

      `src/app/_helpers/caminho_helper.ts`



  ## 3. Alterar icones de redes sociais.

      Os icones de redes sociais são servidos pela classe ServicoRedesSociais.ts

      `\src\app\data\service\ServicoRedesSociais.ts`


# Arquitetura

    A arquitetura utilizada foi amplamente modular.

    _helpers < centralização de funções auxiliares

    core < funções de controle de estado, controle de autenticação

        - guard < guarda de rotas 
        - interceptor < middleware de chamadas
        - service < controle de estado e autenticação
        -   authentication < autenticação
        -   state < controle de estado da aplicação

    data < modelos de dados utilizados na aplicação


        - schema < modelos de dados
            - domain < modelos do dominio

        - service < serviços para modelos
            - domain < servicos para modelos do dominio (consumo de API)

    layout < componentes da página mestre

    modules < modulos atômicos das páginas da aplicação

        - biografia
            - page < todos os componentes (ou modulos) que serão adicionados ao .module
                -*components
            - biografia.module < junção atômica de todos os componentes da página
            - biografia.routing < definição dos pârametros de roteamento
        (...)

    shared < componentes e módulos compartilhados

        - component
        material.module
        shared.module


# Animações.

    O projeto utiliza o AOS para as animações com scroll
    
    As animações próprias do projeto estão localizadas em

    `src/app/animations.ts`



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
