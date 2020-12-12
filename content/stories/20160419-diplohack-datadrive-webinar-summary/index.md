---
date: 2016-04-19T14:46:44.000Z
author: 'Anastasia Valeeva'
title: 'Diplohack Datad(r)ive Webinar summary'
tags:
  - diplohack
  - featured
  - 'open data'
  - diplohack
  - hackathon
---

**This is the Diplohack Datad(r)ive Webinar Blogpost. About all that you saw (or didn’t) and more.**

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="360" src="https://player.vimeo.com/video/163369062?byline=0&portrait=0" width="640"></iframe>

[Diplohack Datad(r)ive Webinar](https://vimeo.com/163369062) from [Open Knowledge Belgium](https://vimeo.com/openknowledgebe) on [Vimeo](https://vimeo.com).

First and foremost, the webinar was recorded and is available in full on our [vimeo](https://vimeo.com/163369062).

Check the description of the video to jump to the part that you want to see specifically!

We follow up with a Summary and some links you shouldn’t miss:

**Public Procurement Data. Tenders Electronic Database.**

Public procurement is the procedure through which public authorities are using public money, purchase works, services or supplies from the private sector. This is how around 14% of GDP of the EU is spent.

[TED](http://ted.europa.eu/TED/misc/chooseLanguage.do) – Tenders Electronic Daily – is an online version of the ‘Supplement to the Official Journal’ of the EU. It covers notices from the European Economic Area, Switzerland and the Former Yugoslav Republic of Macedonia for the procurements above threshold: 5,2 m € for works and 135 k € for services and supplies, with some exceptions. This amounts to about 1700 notices each day. Even though below-threshold notices are not obligatory, but many contracting authorities also choose to do so to ensure visibility and transparency of their procurement.

The main problem of this data is that it is provided ‘as is’, therefore sometimes with mistakes as given by contracting authorities. Current steps are being taken to clean it up (and if you want to clean up a lot for your project – [contact TED](http://2016.openbelgium.be/backend/rainlab/blog/posts/GROW-G4@ec.europa.eu) !

The data comes from public procurement [standard forms](http://simap.ted.europa.eu/web/simap/standard-forms-for-public-procurement), based on EC regulations filled in the forms. The data is provided in [CSV format](https://open-data.europa.eu/en/data/dataset/ted-csv) . There are three levels: Contract Award Notices (CAN ) = best level of detalization, Contract Awards (CA) within a CAN, and Contract Notices (CN) for the future.

This might be interesting to check for hackers:

Who is buying? What are they buying? Who responds and participates? Who is awarded the contract in the end? Which procedure is used, which award criteria? What is the value of the contract? To describe the ‘what’, special [CPV ](http://simap.ted.europa.eu/cpv)classification is used.

And if you want to get involved, the European Commission is interested in the results of research in public procurement. Any output based on the data (papers, reports, links to applications) is very appreciated.

More information can be found on [TED Wiki](https://ec.europa.eu/cefdigital/wiki/display/EPROC/TED+Open+Data+Wiki) which is an open wiki hosted by the Commission to support the exchange of ideas, especially between practitioners and academics.

Have a look at the [presentation](http://www.slideshare.net/AnastasiaValeeva1/public-procurement-data-eu), too.

---

**Open Data of the Council of the EU**

Council together with the European Parliament is the co-legislator in the EU decision-making process. One if the core functions of the Council is to approve or reject any law that is being adopted at the EU level. The Council’s votes are available in open data format at the [dedicated page](http://www.consilium.europa.eu/en/general-secretariat/corporate-policies/transparency/open-data/), as well at the EU Open Data Portal.

Speaking about the transparency of the work of the EU institutions and making the EU decision making process more available, there are two new datasets which have been published on the 14 of April 2016: metadata of the Council’s public register and metadata of the database on requests for public access to documents (with the exclusion of the personal data of the applicants).

How can you access this data?

You achieve this [via SPARQL queries](http://data.consilium.europa.eu/sparql). The [sample SPARQL queries](https://github.com/EUCouncil/CouncilVotesOnActsDatasetSample) and [code for demo app](http://eucouncil.github.io/CouncilVotesOnActsDatasetSample/) are available on Github repository of the Council of the EU.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**EU Open Data Portal**

[European Union Open Data Portal](https://open-data.europa.eu/en/data) – single point of access to the data from EU Institutions.

There are 59 data providers to the portal: European Commission, Council of the EU, European Parliament, Directorates (DGs) and the European agencies (including JRC, Eurobarometer, Eurostat, Erazmus data), plus extractions of the ’Official Journal’ in xml format). There are numerous ways to find the data: search on the website, discover by category, machine access: via [SPARQL](https://open-data.europa.eu/en/linked-data) or [CKAN API](http://open-data.europa.eu/data/api). Bear in mind that only metadata is published: title, description and link to the data sources.

And if you have any questions, [contact](https://open-data.europa.eu/en/contact) the portal.

Feel the difference – there is also [European Data Portal](http://www.europeandataportal.eu/) which has data from European countries harvested from national data portals and geoportals. This portal is managed by DG Connect.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**EU Structural and Investment Funds**

EU Structural and Investment Funds website has [data on EU funding](https://cohesiondata.ec.europa.eu/) under shared management covering 5 main funds: European Regional Development Funds, European Social Funds, the Cohesion Funds, European Agricultural Funds for Rural Development and Maritime and Fishery Funds.

You can filter through the data and create filtered views, and visualisations based on this, as well as opportunity to download the data in a range of formats. You can also [combine EU data from different sources](http://ec.europa.eu/regional_policy/en/atlas/beneficiaries/) and find info on “operations” (beneficiaries of funding).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**DG Sante**

DG Sante has data about food safety, safety of the food chain, animal safety and about health. There are numerous datasets available in two ways: on the [dedicated page of DG SANTE](http://ec.europa.eu/dgs/health_food-safety/information_systems/index_en.htm) and on the [Open Data Portal](http://www.europeandataportal.eu/).

For the links for the specific datasets consult the [presentation](http://www.slideshare.net/AnastasiaValeeva1/dg-sante-datasets). Questions on data sets can be sent to SANTE-SEMANTIC@ec.europa.eu

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

![dessert](food-colorful-dessert-sweet-large.jpg)

And, as this was a lunchtime webinar, here comes the dessert – few more sources of knowledge and inspiration.

Project [Digiwhist](http://digiwhist.eu/) is a very useful tool to analyse public procurement;

Most popular datasets of the EU:

The [voting dataset](http://data.consilium.europa.eu/data/public_voting) for the Council of the EU;  
For DG SANTE the most popular ones are about pesticides and active substances.

For Publications Office, the most viewed dataset is the one from DGT Translation Memory, and the top list of the datasets is on the[ front page of the Portal](http://open-data.europa.eu/en/data/).

For the EU Structural and Investment Funds, it is the one about [the spent funding from the previous funding period.](https://ec.azure-westeurope-prod.socrata.com/dataset/Total-Percentage-of-Available-Funds-Paid-Out-by-th/w8x7-cqjd)

And here are the [examples of apps](https://open-data.europa.eu/en/apps) and [use-cases](http://www.europeandataportal.eu/en/content/training-library/library/use-cases) based on the EU open data. Enjoy!
