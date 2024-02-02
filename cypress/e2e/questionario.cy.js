/// <reference types= "cypress"/>

describe('Validar Questionario', () => {
    const finalizar = 'button:contains(" Finalizar ")';
    const modalDeDados = 'h2:contains("Complete seu registro e acesse a sua 1ª análise!")';
    const card0 = '#card_id_0 > .card > p';
    const card1 = '#card_id_1 > .card > p';
    const card2 = '#card_id_2 > .card > p';
    const card3 = '#card_id_3 > .card > p';
    const card4 = '#card_id_4 > .card > p';
    const card5 = '#card_id_5 > .card > p';
    const card6 = '#card_id_6 > .card > p';
    const card7 = '#card_id_7 > .card > p';
    const card8 = '#card_id_8 > .card > p';
    const card9 = '#card_id_9 > .card > p';
    const card10 = '#card_id_10 > .card > p';
    const card11 = '#card_id_11 > .card > p';
    const card12 = '#card_id_12 > .card > p';
    const card13 = '#card_id_13 > .card > p';
    const card14 = '#card_id_14 > .card > p';
    const card15 = '#card_id_15 > .card > p';
    const card16 = '#card_id_16 > .card > p';
    const card17 = '#card_id_17 > .card > p';
    const card18 = '#card_id_18 > .card > p';
    const card19 = '#card_id_19 > .card > p';
    const card20 = '#card_id_20 > .card > p';
    const card21 = '#card_id_21 > .card > p';
    const card22 = '#card_id_22 > .card > p';
    const card23 = '#card_id_23 > .card > p';
    const card24 = '#card_id_24 > .card > p';
    const card25 = '#card_id_25 > .card > p';
    const card26 = '#card_id_26 > .card > p';
    const card27 = '#card_id_27 > .card > p';
    const card28 = '#card_id_28 > .card > p';
    const card29 = '#card_id_29 > .card > p';
    const card30 = '#card_id_30 > .card > p';

    beforeEach(() => {
        cy.visit('/');

    })

    it('acessar quesionario agil', () => {
        cy.login();
        cy.get('.cont-bemvindo > .mat-button').click()
        cy.get('input[type=text]').should('be.visible')


    })

    it('validar texto das 31 questoes', () => {
        cy.login();
        cy.get('.cont-bemvindo > .mat-button').click()
        cy.get(card0).should('have.text', 'O mercado onde minha empresa atua, possui poucos (ou sem expressão) órgãos reguladores de mercado.')
        cy.get(card1).should('have.text', 'Temos uma relação saudável com os fornecedores que auxiliam as nossas operações e produção.')
        cy.get(card2).should('have.text', 'Realizamos a administração de pessoas respeitando as normas contidas nas leis trabalhistas em vigor.')
        cy.get(card3).should('have.text', 'Quando vamos criar um novo, ou discutir sobre um atual processo, a área responsável sempre chama as áreas indiretamente impactadas para debater e contribuir.')
        cy.get(card4).should('have.text', 'Sempre superamos as metas comerciais para os períodos determinados.')
        cy.get(card5).should('have.text', 'No meu setor há poucas empresas que oferecem o mesmo que eu, e muitos clientes para comprar.')
        cy.get(card6).should('have.text', 'As estruturas da nossa Governança propiciam uma Arquitetura ordenada, responsável, ética e protegida contra irresponsabilidades e fraudes administrativas.')
        cy.get(card7).should('have.text', 'Temos uma agenda contínua e consistente de treinamento de processos para ao menos 80% dos colaboradores da empresa.')
        cy.get(card8).should('have.text', 'Em discussões e reuniões, fica evidente que as pessoas se sentem seguras em apontar ideias divergentes, inclusive frente aos seus superiores.')
        cy.get(card9).should('have.text', 'Temos clareza sobre nosso posicionamento frente ao mercado sendo; ou competição por Preço, ou Proximidade com Cliente, ou Exclusividade.')
        cy.get(card10).should('have.text', 'Consistentemente leio, vejo e discuto sobre práticas do mercado que respaldam a necessidade de consumirem esta ideia por muito tempo.')
        cy.get(card11).should('have.text', 'Temos participação ativa e harmoniosa dos sócios e investidores no dia a dia do negócio.')
        cy.get(card12).should('have.text', 'Nossos os índices de produção (custo, tempo, qualidade) estão alinhados com nosso posicionamento de mercado (competição por Preço, Proximidade com Cliente, Exclusividade).')
        cy.get(card13).should('have.text', 'Temos um plano de metas para as principais áreas da empresa.')
        cy.get(card14).should('have.text', 'As informações contidas em nosso mapa estratégico são amplamente comunicadas e profundamente compreendidas pelas lideranças de alta e média hierarquia.')
        cy.get(card15).should('have.text', 'O processo produtivo é enxuto e ágil.')
        cy.get(card16).should('have.text', 'Nosso faturamento mensal já supera, com folga, nossos custos e despesas totais.')
        cy.get(card17).should('have.text', 'Os custos de produção são baixos em relação aos meus concorrentes.')
        cy.get(card18).should('have.text', 'A comunicação e transferência de atividades entre uma área e outra da empresa, é bem organizada e harmônica.')
        cy.get(card19).should('have.text', 'Temos documentado e acessível para partes interessadas, dados da empresa sobre organogramas, fluxogramas, papéis, responsabilidades e outras políticas internas.')
        cy.get(card20).should('have.text', 'Possuo poucos concorrentes iguais ou maiores, em termos de tamanho e força de mercado.')
        cy.get(card21).should('have.text', 'O processo produtivo é estável e claro para todos os profissionais da operação.')
        cy.get(card22).should('have.text', 'Minha oferta é algo extremamente essencial e importante para os meus clientes.')
        cy.get(card23).should('have.text', 'Temos softwares, ferramentas e sistemas que nos ajudam a manter os processos operacionais estáveis e gerenciados.')
        cy.get(card24).should('have.text', 'As operações administrativas, comerciais e de produção fluem de forma integrada e harmonica entre elas.')
        cy.get(card25).should('have.text', 'Quando vamos criar um novo, ou discutir sobre um atual processo, sempre voltamos aos propóstios do processo, para ter certeza que ele valor para a organização do trabalho.')
        cy.get(card26).should('have.text', 'Nosso negócio não sofre com sazonalidades na demanda do mercado.')
        cy.get(card27).should('have.text', 'Possuímos setores ou pessoas oficialmente responsáveis por pesquisar, testar e inserir inovações em nossos processos.')
        cy.get(card28).should('have.text', 'Nosso corpo diretivo estuda e revisa periodicamente a estratégia, sempre orientados pelas tendências do mercado.')
        cy.get(card29).should('have.text', 'Nossos processos produtivos são de baixa complexidade e, portanto, relativamente fáceis de entender e aprender.')
        cy.get(card30).should('have.text', 'Temos um mapa estratégico que diz com confiabilidade e clareza, detalhes do mercado à qual estamos inseridos.')


    })

    it('continuar analise em andamento', () => {
        cy.login();
        cy.get('.cont-bemvindo > .mat-button').click().wait(2000)
        cy.gerarNomeAnalise()
        cy.get('label[for="mat-radio-32-input"]').click()
        cy.get('label[for="mat-radio-38-input"]').click()
        cy.historico()
        cy.get(':nth-child(1) > .btn-analise > .btn-analises').click()
        cy.get('#mat-radio-249-input').should('be.checked')
        cy.get('#mat-radio-255-input').should('be.checked')
        cy.get('#mat-radio-261-input').should('not.be.checked')


    })

    it.skip('questionario organizacional', () => {
        cy.login();
        cy.responderAleatorio()
        cy.get('.mensagem > h1').should('have.text', ' Você deu um passo importante ')
        cy.get('.analise').scrollIntoView()
        cy.get('.analise').should('have.text', ' Performance Organizacional \n                  Existem aqui, indicativos que sua empresa está passando por momentos de instabilidade e imaturidade organizacional. Eficiência e performance estratégica, financeirra, comercial, produtiva e cultural podem ser negligenciadas pelas lideranças, ao mesmo tempo que, ameças externas como concorrência e inovações de mercado estão ganhando relevância e gerando maiores probabilidades de danos à sua empresa. A correlação entre sua arquitetura empresarial e o ecossitema que circunda a sua empresa é a "cereja do bolo" da análises, pois entende sistemicamente o ambiente e correlaciona diversas variaveis para traçar a melhor rota de ação.\n\n          \n                  \n                    Dica  Ágil: Como sugestão preliminar, faça uma reflexão e registre as principais nocividades que o seu mercado está causando, ou poderá causar no curto prazo, para a sua empresa. Depois, identifique quais seriam caracteristicas organizacionais importantes que sua empresa deveria ter para minimizar esses riscos. Caso entenda que sua empresa não tem todas essas caracteristicas, trace um plano de ação para desenvolve-las, ao menos um pouco, o mais rápido possível. "Como posso ter ainda mais precisão estratégica nas minhas ações?" \n                  Com o módulo de Análise Organizacional da plataforma, você conseguirá ter um panorama detalhado, item a item, para cada um dos temas citados acima. Gráficos, Ratings, detalhamento descritivo de riscos e o melhor; diversas orientações claras e detalhadas de como está o cenário da sua empresa e o que você precisa fazer para melhorar a performance nesse tema. E, se você quer uma empresa comprovadamente competitiva em relação ao mercado, o Módulo Competitividade pode mostrar como a sua empresa performa em relação à outras empresas do mesmo perfil. Mantenha seu negócio no centro, vivemos em um mundo dinâmico e com mudanças constantes, tenha proteção contra surpresas e explore oportunidades.\n                  ')

    })

    it('questionario setorial', () => {
        cy.login();
        cy.questionarioSetorial()
        cy.get('.mensagem > h1').should('have.text', ' Você deu um passo importante ')
        cy.get('.analise').scrollIntoView()
        cy.get('.analise').should('have.text', ' Performance Setorial \n                  Existem indicativos que sua empresa está sofrendo muitas interferências do ecossitema que a cerca. Podendo ser, em maior ou menor nível, fornecedores com maior capacidade de negociação, clientes exigindo mais do que você consegue entregar, mão de obra mais cara do que consegue pagar, ou desmotivada, ou destreinada ou desorganizada. Ofertas concorrentes com um nível de qualidade maior que a sua, empresas concorrentes se posicionando no mercado com mais eficiência que a sua, regulamentações do governo que dificultam sua operação ou seu caixa, ofertas de mercaado mais inovadoras e atrativas que a sua, falta de conexão entre o que sua empresa oferecer e o que o seu cliente gostaria de receber. Estas são algumas das possibilidades. \n          \n          \n                  \n                    Dica  ágil: Faça uma reflexão sobre o nível de influência que i) os principais clientes, ii) os principais fornecedores, iii) as principais empresas concorrentes e iv) as principais ofertas concorrentes, possuem sobre o seu negócio. Após isso, liste as TOP4 influências que considera ser as mais nocivas. E, por fim, com criatividade, defina uma ação para cada uma das 4 influências definidas, com objetivo final de reduzir tais influências sobre o seu negócio. "Como posso ter ainda mais precisão estratégica nas minhas ações?" \n                  Com o módulo de Análise Setorial da plataforma, você conseguirá ter um panorama detalhado, item a item, para cada um dos pontos citados acima. Gráficos, Ratings, detalhamento descritivo de riscos e o melhor; diversas orientações claras e detalhadas do que você precisa fazer para melhorar a performance da sua empresa nesse assunto. E, se você quer uma empresa comprovadamente competitiva em relação ao mercado, o Módulo Competitividade pode mostrar como a sua empresa performa em relação à outras empresas do mesmo perfil. Mantenha seu negócio no centro, vivemos em um mundo dinâmico e com mudanças constantes, tenha proteção contra surpresas e explore oportunidades.\n                  ')

    })

    it('questionario operacional', () => {
        cy.login();
        cy.questionarioOperacional()
        cy.get('.mensagem > h1').should('have.text', ' Você deu um passo importante ')
        cy.get('.analise').scrollIntoView()
        cy.get('.analise').should('have.text', ' Performance Operacional \n                  Existem aqui, indicativos que sua empresa está passando por momentos de instabilidade e baixa eficiência operacional. Qualidade, Previsibilidade, Estabilidade, Escalabilidade, Tecnicidade e outros temas são considerados pela nossa plataforma para avaliar sua operação e propor direcionamentos de melhoria. Provavelmente mais de uma das 8 dimensões operacionais que analisamos está deficitária, o que possivelmente está desencadeando atrasos de processos, má qualidade nas estregas, custos elevados, clima organizacional pesado e frustrações dos clientes.\n\n          \n                  \n                    Dica  Ágil: Como sugestão de movimento para ganhos rápidos, identifique, mesmo que de forma subjetiva nesse momento, 2 principais pontos dentro dos processos de trabalho onde seus funcionários mais sofrem. Adiconalmente, busque os 2 principais momentos no processo de trabalho onde os seus clientes mais formalizam reclamações. A partir da definição destes 4 pontos, tente encontrar a causa raiz deles; uma ferramenta fácil de usar para isso é a ferramenta dos "5 porquês". Com as causas raizes identificadas, traçe um plano de ação de curto prazo para cada causa e gerencie a execução até que as ações sejam concluidas. "Como posso ter ainda mais precisão estratégica nas minhas ações?" \n                  Com o módulo de Análise Operacional da plataforma, você conseguirá ter um panorama detalhado, item a item, para cada um dos pontos citados acima. Gráficos, Ratings, detalhamento descritivo de riscos e o melhor; diversas orientações claras e detalhadas do que você precisa fazer para melhorar a performance da sua empresa nesse assunto. E, se você quer uma empresa comprovadamente competitiva em relação ao mercado, o Módulo Competitividade pode mostrar como a sua empresa performa em relação à outras empresas do mesmo perfil. Mantenha seu negócio no centro, vivemos em um mundo dinâmico e com mudanças constantes, tenha proteção contra surpresas e explore oportunidades.\n                  ')

    })

    it('questionario processual', () => {
        cy.login();
        cy.questionarioProcessual()
        cy.get('.mensagem > h1').should('have.text', ' Você deu um passo importante ')
        cy.get('.analise').scrollIntoView()
        cy.get('.analise').should('have.text', ' Performance Processual \n                  O resultado aponta probabilidade de ausência de harmonia em alguns fluxos processsuais e intraprocessuais da sua empresa. Em geral, as ineficiências processuais nascem e se fortalecem quando falta i) clareza na comunicação, ii) simplificade do fluxo e iii) estabilidade na execução. Também é comum problemas processuais nascerem por causa do posicionamento das pessoas, quando colaboradores acreditam que podem se sobrepor aos combinados processuais e geram, assim, diversos fluxos impiricos paralelos.\n          \n          \n                  \n                    Dica  Ágil: Como sugestão de movimento para ganhos rápidos, identifique, mesmo que de forma subjetiva nesse momento, 2 principais pontos dentro dos processos de trabalho onde seus funcionários mais sofrem. Adiconalmente, busque os 2 principais momentos no processo de trabalho onde os seus clientes mais formalizam reclamações. A partir da definição destes 4 pontos, tente encontrar a causa raiz deles; uma ferramenta fácil de usar para isso é a ferramenta dos "5 porquês". Com as causas raizes identificadas, traçe um plano de ação de curto prazo para cada causa e gerencie a execução até que as ações sejam concluidas. "Como posso ter ainda mais precisão estratégica nas minhas ações?" \n                  A partir de uma sequência de ferramentas da Gestão da Qualidade, com o módulo de Análise Processual da plataforma você conseguirá ter uma visão profunda e precisa das principais causas raízes que desencadeiam todos os problemas processuais da sua empresa. E, se você quer uma empresa comprovadamente competitiva em relação ao mercado, o Módulo Competitividade pode mostrar como a sua empresa Performa em relação à outras empresas do mesmo perfil. Mantenha seu negócio no centro, vivemos em um mundo dinâmico e com mudanças constantes, tenha proteção contra surpresas e explore oportunidades.\n                  ')

    })

    it('exibir menu de atualizacao de dados', () => {
        cy.get('#mat-input-0').type('nacaxo1242@tsderp.com')
        cy.get('#mat-input-1').type('P@ssw0rd')
        cy.contains('button', 'Entrar').click()
        cy.responderAleatorio()
        cy.get(modalDeDados).should('be.visible')
            .should('have.text', 'Complete seu registro e acesse a sua 1ª análise!')

    })

    it('modal CNPJ ja cadastrado', () => {
        cy.get('#mat-input-0').type('nacaxo1242@tsderp.com')
        cy.get('#mat-input-1').type('P@ssw0rd')
        cy.contains('button', 'Entrar').click()
        cy.responderAleatorio()
        cy.get(modalDeDados).should('be.visible')
        cy.get('input[placeholder="CNPJ"]').type('20802434000112').wait(1000)
        cy.get('#mat-select-value-3').click()
        cy.get('#mat-option-23').click().wait(1000)
        cy.get('#mat-mdc-error-3').should('be.visible')
        .should('have.text', "Empresa já cadastrada.")

    })

    it('modal CNPJ nao encontrada', () => {
        cy.get('#mat-input-0').type('nacaxo1242@tsderp.com')
        cy.get('#mat-input-1').type('P@ssw0rd')
        cy.contains('button', 'Entrar').click()
        cy.responderAleatorio()
        cy.get(modalDeDados).should('be.visible')
        cy.get('input[placeholder="CNPJ"]').type('51995488123175').wait(1000)
        cy.get('#mat-select-value-3').click()
        cy.get('#mat-option-23').click().wait(2000)
        cy.get('#mat-mdc-error-3').should('have.text', 'Empresa não encontrada')
               

    })

    it('validar progresso da porcentagem', () =>{
        cy.login()
        cy.get('.cont-bemvindo > .mat-button').click()
        cy.gerarNomeAnalise()
        cy.get('label[for="mat-radio-32-input"]').click()
        cy.get('label[for="mat-radio-38-input"]').click()
        cy.get('label[for="mat-radio-44-input"]').click()
        cy.get('label[for="mat-radio-51-input"]').click()
        cy.get('label[for="mat-radio-57-input"]').click()
        cy.get('label[for="mat-radio-64-input"]').click()
        cy.get('label[for="mat-radio-72-input"]').click()
        cy.get('label[for="mat-radio-74-input"]').click()
        cy.get('label[for="mat-radio-80-input"]').click()
        cy.get('label[for="mat-radio-90-input"]').click()
        cy.get('div[class="box-progress"]').should('have.text', ' 32.3% completado ')

    })

})
