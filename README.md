# Meu Portfólio [![Documentation Coverage](https://img.shields.io/badge/documentation-100%25-brightgreen)](https://jthales.github.io/portfolio/coverage.html)
> Um portfólio para mostrar minhas habilidades como desenvolvedor frontend, incluindo Angular, testes unitários, testes E2E, documentações e outras tecnologias.

---

## Índice

1. [Visão Geral](#visão-geral)
2. [Demonstração](#demonstração)
3. [Recursos Principais](#recursos-principais)
4. [Instalação](#instalação)
5. [Scripts Disponíveis](#scripts-disponíveis)
   - [Multilanguage](#multilanguage)
6. [Estrutura de Pastas](#estrutura-de-pastas)
8. [Contribuindo](#contribuindo)
9. [Licença](#licença)

---

## Visão Geral

Este projeto é um portfólio pessoal para apresentar minhas habilidades como desenvolvedor frontend. Ele foi construído com [Angular 18](https://angular.io/), utilizando boas práticas de desenvolvimento como testes unitários com [Jasmine](https://jasmine.github.io/) e testes end-to-end (E2E) com [Protractor](https://www.protractortest.org/).

O portfólio inclui projetos de exemplo, implementações dinâmicas e conteúdo interativo para demonstrar minha experiência em desenvolvimento de software.

## Demonstração

Você pode acessar uma demonstração ao vivo do projeto em:

[DEMO](https://portfolio-losp.vercel.app/)

## Recursos Principais

- 🔥 **Tecnologias Utilizadas**: Angular, TypeScript, HTML, SCSS
- ✅ **Testes Unitários**: Configurado com Jasmine e Karma para garantir a qualidade do código.
- 🎯 **Testes E2E**: Automação de testes end-to-end usando Protractor.
- 💻 **Responsividade**: Layout otimizado para diferentes dispositivos (desktop e mobile).
- 🌐 **SEO e SSR**: Implementações de Server-Side Rendering e otimização para SEO.
- ⚙️ **Integração Contínua**: Utilizando GitHub Actions para automação de testes e deploy.
- 🎨 **Design Personalizado**: UI moderna com animações e transições suaves.


## Instalação

1. Clone o repositório:

  ```bash
  git clone https://github.com/jthales/portfolio.git
  cd portfolio
  ```

2. Instale as dependências:

  ```npm install```

3. Inicie o servidor de desenvolvimento:

  ```ng serve```

4. Abra seu navegador e navegue até http://localhost:4200.


## Scripts Disponíveis

### Multilanguage

O projeto utiliza Angular Localize para gerar builds dinâmicos conforme a localização do usuário.
Para testar cada versão disponível você pode rodar o comando:

  ```npm run start:en || npm run start:fr```

## Estrutura de Pastas

Aqui está uma visão geral da estrutura do projeto:

```bash
├── src
│   ├── app
│   ├── locale
├── angular.json
├── package.json
└── README.md
```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou um pull request se você encontrar problemas ou tiver sugestões de melhorias.

1. Faça um fork do projeto.
2. Crie um branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações utilizando os [padrões](https://github.com/iuricode/padroes-de-commits). (`git commit -m ':sparkles: feature: new feature XYZ'`).
4. Faça o push para o branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
