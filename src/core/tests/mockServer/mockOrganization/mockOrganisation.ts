import { ORGANIZATION_ENDPOINT } from "core/config";
import { rest } from "msw";

const mockOrganisation = rest.get(ORGANIZATION_ENDPOINT, (req, res, ctx) =>
  res(
    ctx.json({
      name: "Welcome to the Jungle",
      jobs: [
        {
          id: 517905,
          reference: "WTTJ_dydqK7",
          name: "Communications Manager",
          slug: "communications-manager_paris",
          description:
            "<p>As a Communications Manager, and as part of the Brand and Communications team, you will be in charge of our PR &amp; external communications strategy in France, aligned with our vision and business objectives. </p>\n\n<p>EXTERNAL COMMUNICATIONS</p>\n\n<ul>\n<li>You will develop in-depth knowledge of the market and competitive landscape, as well as key challenges, target audiences, and other factors that can impact our communications</li>\n<li>In cooperation with the Brand and Communications team, you will help implement strategies to communicate our core brand message through our main communication channels</li>\n<li>You will develop and write content to create compelling creative executions for a consistent brand message for our on and offline external communications</li>\n<li>You will identify and manage our speaking opportunities, selecting the right spokesperson for each one of them, and coordinating the key messages and objectives</li>\n<li>You will analyze the output of communication activities. Track results, monitor success and analyze our communication strategy KPIs</li>\n</ul>\n\n<p>PRESS AND INFLUENCER RELATIONS </p>\n\n<ul>\n<li>You will be responsible of building strong relationships with business, HR, and tech journalists and influencers in the markets where we operate</li>\n<li>You will create compelling stories to pitch and share (data content, media stories...) to journalists to position WTTJ as the expert of work experience</li>\n<li>You will manage media inquiries and interview requests, and prepare company spokespeople for media engagements</li>\n<li>You will monitor industry trends as well as the competitive environment to identify speaking opportunities</li>\n<li>If needed, you will partner with agencies and freelancers to reach our PR goals\nYou will participate in the development of our external events </li>\n</ul>\n",
          published_at: "2022-02-24T17:34:29.864+01:00",
          created_at: {
            fr: "Le 15 Novembre 2021 à 10h30",
            en: "The 15 November 2021 at 10h30",
          },
          office: {
            id: 196,
            name: "Paris",
            address: "16 Rue du Mail",
            zip_code: "75002",
            district: "Paris",
            city: "Paris",
            country: {
              fr: "France",
              en: "France",
            },
          },
          department: {
            id: 8658,
            name: "Marketing",
          },
          contract_type: {
            fr: "CDI",
            en: "Full-Time",
            es: "Contrato indefinido",
            cs: "Plný úvazek",
            sk: "Zmluva na dobu neurčitú",
          },
          profile:
            "<p>At Welcome to the Jungle, we are all coming from (really) different backgrounds, that’s our main strength!</p>\n\n<p>You are our ideal profile if :</p>\n\n<ul>\n<li>You have at least 5 years of experience in the communications field, B2B experience is a plus</li>\n<li>You are fluent in French and English, both written and spoken</li>\n<li>You have experience in an agency or you have already managed external agencies</li>\n<li>You are able to develop structured, clear and compelling texts </li>\n<li>You have excellent writing and communication skills</li>\n<li>You are creative with analytical skills </li>\n</ul>\n\n<p>Welcome to the Jungle aspires to promote a positive social impact. Its mission includes paying particularly close attention to fostering diversity, inclusion and equality within teams as well as within its community.</p>\n",
          recruitment_process:
            '<p>Step 1 : phone interview with <a href="https://www.linkedin.com/in/aurianecarriere/" target="_blank">Auriane</a>, TA specialist<br>\nStep 2 : interview with <a href="http://https://www.linkedin.com/in/alex-de-las-heras-digital-mkt/" target="_blank">Alex</a>, Head of Brand and Comms<br>\nStep 3 : interview with <a href="http://https://www.linkedin.com/in/antoinebenjaminlequertier/" target="_blank">Antoine-Benjamin</a>, CMO<br>\nStep 4 : interview with <a href="http://https://www.linkedin.com/in/camillefauran/" target="_blank">Camille</a>, General Manager</p>\n',
          salary: {
            min: null,
            max: null,
            currency: "EUR",
            period: "none",
          },
          cms_sites_references: ["wttj_fr"],
          websites_urls: [
            {
              website_reference: "quest-for-change",
              url: "https://quest-for-change.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "techcity",
              url: "https://techcity.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "naaphii",
              url: "https://naaphii.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "edtech-france",
              url: "https://edtech-france.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "reseau-entreprendre-paris",
              url: "https://reseau-entreprendre-paris.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "station-f-job-board",
              url: "https://jobs.stationf.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "starther",
              url: "https://starther.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "xange",
              url: "https://xange.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "hub-bpifrance",
              url: "https://hub-bpifrance.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "raise-co",
              url: "https://raise-co.welcomekit.co/companies/wttj/jobs/communications-manager_paris",
            },
            {
              website_reference: "wttj_fr",
              url: "https://www.welcometothejungle.com/companies/wttj/jobs/communications-manager_paris",
            },
          ],
        },
        {
          id: 354243,
          reference: "WTTJ_Rkp7AGy",
          name: "Backend Developer (apprenticeship)",
          slug: "backend-developer-intern_paris",
          description:
            '<p>Aujourd\'hui, nous recherchons <strong>un(e) alternant(e) développeur(se) Backend Elixir/Ruby</strong> pour nous rejoindre !</p>\n\n<p>Tu rejoindras l’une de nos <strong>feature squad</strong>, composée de plusieurs développeurs, d’un product manager, d’ingénieurs qualité et data ainsi que d’un designer :</p>\n\n<ul>\n<li>Tu travailleras avec des technos et des stacks modernes</li>\n<li>Tu participeras aux événements d\'équipes et seras accompagné(e) par tes pairs</li>\n<li>Tu découvriras la façon dont une équipe produit fonctionne</li>\n<li>Tu pourras gouter ponctuellement aux joies du télétravail</li>\n<li>Tu auras l’occasion d’échanger avec tous les corps de métier de la tech (Product Management, SRE, QA, DATA, Dev Font, etc…)</li>\n</ul>\n\n<p><strong>Pour en savoir plus sur notre équipe Tech, composée aujourd\'hui d\'une 50aine de personnes, tu peux consulter :</strong></p>\n\n<ul>\n<li>Les <a href="https://www.welcometothejungle.com/fr/companies/wttj/paris" target="_blank">vidéos</a> de différentes personnes de l\'équipe</li>\n<li>La <a href="https://www.welcometothejungle.com/fr/companies/wttj/tech" target="_blank">page Tech</a> de notre profil WTTJ</li>\n<li>Quelques <a href="https://medium.com/wttj-tech" target="_blank">articles</a> rédigés par des membres de l\'équipe Tech</li>\n</ul>\n\n<p><strong>Sous la responsabilité d’un de nos Engineering Manager, tes missions seront les suivantes :</strong></p>\n\n<ul>\n<li>Tu participeras à la création de nouvelle fonctionnalités, de la réflexion à la mise en production</li>\n<li>Tu interviendras lors de la rédaction de tests unitaires et d’intégration</li>\n<li>Tu participeras à la QA des fonctionnalités implémentées</li>\n<li>Tu contribueras aux projets internes, transverses et open-source</li>\n<li>Tu aideras à la maintenance et à la mise à jour des documentations des projets / APIs</li>\n<li>Tu participeras à la mise à jour des dépendances utilisées</li>\n</ul>\n',
          published_at: "2022-02-24T11:22:56.656+01:00",
          created_at: {
            fr: "Le 20 Avril 2021 à 16h42",
            en: "The 20 April 2021 at 16h42",
          },
          start_date: {
            fr: "01 Septembre 2022",
            en: "01 September 2022",
          },
          office: {
            id: 196,
            name: "Paris",
            address: "16 Rue du Mail",
            zip_code: "75002",
            district: "Paris",
            city: "Paris",
            country: {
              fr: "France",
              en: "France",
            },
          },
          department: {
            id: 8,
            name: "Tech",
          },
          contract_type: {
            fr: "Alternance",
            en: "Apprenticeship",
            es: "Profesionalización",
            cs: "Work-Study",
            sk: "Odborná prax",
          },
          profile:
            "<p>Welcome to the Jungle aspire à avoir un impact social positif, et prête une attention particulière au fait de respecter la diversité, l'inclusion et l’équité. Chaque candidature sera traitée de manière équitable et se basera sur les compétences et les motivations de chacun.</p>\n\n<p><strong>Tu es notre profil idéal si :</strong></p>\n\n<ul>\n<li>Tu es motivé(e) et aime relever des challenges techniques !</li>\n<li>Tu es curieux(se) et passionné(e) par les sujets tech</li>\n<li>Tu es intéressé par les problématiques de performances, de volumétrie et de scalabilité</li>\n<li>Tu as envie de participer au développement d'un produit et construire le WTTJ de demain !</li>\n</ul>\n\n<p>Bref, tu l'as compris, on ne cherche pas un simple développeur cantonné à faire de la maintenance sur nos applications, on recherche quelqu'un qui veut activement participer à l'aventure ! </p>\n",
          recruitment_process:
            '<ul>\n<li>Etape 1: Echange visio de 45 minutes avec <a href="https://www.linkedin.com/in/laur%C3%A8ne-belehradek/" target="_blank">Laurène</a> </li>\n<li>Etape 2: Echange visio de 45 minutes avec <a href="https://www.linkedin.com/in/cfolliet/" target="_blank">Clément</a> &amp; <a href="https://www.linkedin.com/in/goualavirgile/" target="_blank">Virgile</a>, tous deux Engineering Manager<br>\n</li>\n<li>Etape 3: Echange visio de 45 minutes avec <a href="https://www.linkedin.com/in/clement-quaresma/" target="_blank">Clément</a> et <a href="https://www.linkedin.com/in/maxime-menager/" target="_blank">Maxime</a>, tous deux Backend Developer</li>\n</ul>\n',
          salary: {
            min: null,
            max: null,
            currency: "EUR",
            period: "none",
          },
          cms_sites_references: ["wttj_fr"],
          websites_urls: [
            {
              website_reference: "techcity",
              url: "https://techcity.welcomekit.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "naaphii",
              url: "https://naaphii.welcomekit.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "edtech-france",
              url: "https://edtech-france.welcomekit.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "reseau-entreprendre-paris",
              url: "https://reseau-entreprendre-paris.welcomekit.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "station-f-job-board",
              url: "https://jobs.stationf.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "starther",
              url: "https://starther.welcomekit.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "xange",
              url: "https://xange.welcomekit.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "hub-bpifrance",
              url: "https://hub-bpifrance.welcomekit.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "raise-co",
              url: "https://raise-co.welcomekit.co/companies/wttj/jobs/backend-developer-intern_paris",
            },
            {
              website_reference: "wttj_fr",
              url: "https://www.welcometothejungle.com/companies/wttj/jobs/backend-developer-intern_paris",
            },
          ],
        },
        {
          id: 354476,
          reference: "WTTJ_GjeDxJy",
          name: "Frontend Developer (apprenticeship)",
          slug: "frontend-developer-intern_paris",
          description:
            '<p>Aujourd\'hui, nous recherchons <strong>un(e) alternant(e) développeur(se) Frontend React/Typescript</strong> pour nous rejoindre !</p>\n\n<p>Tu rejoindras l’une de nos <strong>feature squad</strong>, composée de plusieurs développeurs, d’un product manager, d’ingénieurs qualité et data ainsi que d’un designer :</p>\n\n<ul>\n<li>Tu travailleras avec des technos et des stacks modernes</li>\n<li>Tu participeras aux événements d\'équipes et seras accompagné(e) par tes pairs</li>\n<li>Tu découvriras la façon dont une équipe produit fonctionne</li>\n<li>Tu pourras gouter ponctuellement aux joies du télétravail</li>\n<li>Tu auras l’occasion d’échanger avec tous les corps de métier de la tech (Product Management, SRE, QA, DATA, Dev Font, etc…)</li>\n</ul>\n\n<p><strong>Pour en savoir plus sur notre équipe Tech, composée aujourd\'hui d\'une 50aine de personnes, tu peux consulter :</strong></p>\n\n<ul>\n<li>Les <a href="https://www.welcometothejungle.com/fr/companies/wttj/paris" target="_blank">vidéos</a> de différentes personnes de l\'équipe</li>\n<li>La <a href="https://www.welcometothejungle.com/fr/companies/wttj/tech" target="_blank">page Tech</a> de notre profil WTTJ</li>\n<li>Quelques <a href="https://medium.com/wttj-tech" target="_blank">articles</a> rédigés par des membres de l\'équipe Tech</li>\n</ul>\n\n<p><strong>Sous la responsabilité d’un de nos Engineering Manager, tes missions seront les suivantes :</strong></p>\n\n<ul>\n<li>Tu participeras à la création de nouvelle fonctionnalités, de la réflexion à la mise en production</li>\n<li>Tu interviendras lors de la rédaction de tests End to End</li>\n<li>Tu contribueras aux projets internes, transverses et open-source</li>\n<li>Tu contribueras à l\'amélioration et à la maintenance de notre design system, <a href="https://welcome-ui.com/" target="_blank">welcome-ui</a>\n</li>\n<li>Tu participeras à la mise à jour des dépendances utilisées</li>\n</ul>\n',
          published_at: "2022-02-24T11:08:22.158+01:00",
          created_at: {
            fr: "Le 20 Avril 2021 à 19h00",
            en: "The 20 April 2021 at 19h00",
          },
          start_date: {
            fr: "01 Septembre 2022",
            en: "01 September 2022",
          },
          office: {
            id: 196,
            name: "Paris",
            address: "16 Rue du Mail",
            zip_code: "75002",
            district: "Paris",
            city: "Paris",
            country: {
              fr: "France",
              en: "France",
            },
          },
          department: {
            id: 8,
            name: "Tech",
          },
          contract_type: {
            fr: "Alternance",
            en: "Apprenticeship",
            es: "Profesionalización",
            cs: "Work-Study",
            sk: "Odborná prax",
          },
          profile:
            "<p>Welcome to the Jungle aspire à avoir un impact social positif, et prête une attention particulière au fait de respecter la diversité, l'inclusion et l’équité. Chaque candidature sera traitée de manière équitable et se basera sur les compétences et les motivations de chacun.</p>\n\n<p>Tu es notre profil idéal si :</p>\n\n<ul>\n<li>Tu es motivé(e) et aime relever des challenges techniques !</li>\n<li>Tu es curieux(se) et passionné(e) par les sujets tech</li>\n<li>Tu es intéressé par les problématiques de performances, de volumétrie et de scalabilité</li>\n<li>Tu as envie de participer au développement d'un produit et construire le WTTJ de demain !</li>\n</ul>\n\n<p>Bref, tu l'as compris, on ne cherche pas un simple développeur cantonné à faire de la maintenance sur nos applications, on recherche quelqu'un qui veut activement participer à l'aventure ! </p>\n",
          recruitment_process:
            '<ul>\n<li>Etape 1: Echange visio de 45 minutes avec <a href="https://www.linkedin.com/in/laur%C3%A8ne-belehradek/" target="_blank">Laurène</a> </li>\n<li>Etape 2: Echange visio de 45 minutes avec <a href="https://www.linkedin.com/in/cfolliet/" target="_blank">Clément</a> &amp; <a href="https://www.linkedin.com/in/floriandemaria/" target="_blank">Florian</a>, tous deux Engineering Manager<br>\n</li>\n<li>Etape 3: Echange visio de 45 minutes avec <a href="https://www.linkedin.com/in/theomesnil/" target="_blank">Théo</a> et <a href="https://www.linkedin.com/in/guillaume-rousseau29/" target="_blank">Guillaume</a>, tous deux Frontend Developer</li>\n</ul>\n',
          salary: {
            min: null,
            max: null,
            currency: "EUR",
            period: "none",
          },
          cms_sites_references: ["wttj_fr"],
          websites_urls: [
            {
              website_reference: "techcity",
              url: "https://techcity.welcomekit.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "naaphii",
              url: "https://naaphii.welcomekit.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "edtech-france",
              url: "https://edtech-france.welcomekit.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "reseau-entreprendre-paris",
              url: "https://reseau-entreprendre-paris.welcomekit.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "station-f-job-board",
              url: "https://jobs.stationf.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "starther",
              url: "https://starther.welcomekit.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "xange",
              url: "https://xange.welcomekit.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "hub-bpifrance",
              url: "https://hub-bpifrance.welcomekit.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "raise-co",
              url: "https://raise-co.welcomekit.co/companies/wttj/jobs/frontend-developer-intern_paris",
            },
            {
              website_reference: "wttj_fr",
              url: "https://www.welcometothejungle.com/companies/wttj/jobs/frontend-developer-intern_paris",
            },
          ],
        },
      ],
      websites: [],
    })
  )
);

export default mockOrganisation;
