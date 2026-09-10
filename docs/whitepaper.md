---
sidebar_position: 1
---

# Technical White Paper

## Abstract

**NOMAD** (**N**MR **O**nline **M**anagement **A**nd **D**atastore) represents a groundbreaking solution for NMR data management, addressing the intricate challenges faced by researchers in NMR spectroscopy. This white paper unveils NOMAD's innovative approach in streamlining data handling, adhering to F.A.I.R data principles, and fostering collaborative research. From its inception, NOMAD was designed as a comprehensive platform to revolutionize NMR data management. It offers a suite of features, including the Monitoring Dashboard for integrated instrument control, the NMR Lab Notebook for seamless data processing, and a Submission Portal for improved lab traffic management. NOMAD's significance is evident in its integration within the University of St Andrews NMR lab. With 200 active users, handling data from six NMR spectrometers, and archiving over 400 NMR experiments daily during peak times, NOMAD's scalability and real-world utility are undeniable. Additionally, our vision extends to building a national NMR Data Repository in partnership with the Physical Sciences Data Infrastructure (**[PSDI](https://www.psdi.ac.uk/)**), echoing the collaborative success of the Cambridge Crystallographic Data Centre (**[CCDC](https://www.ccdc.cam.ac.uk/)**). NOMAD is open-source, hosted on GitHub, and operates under the Affero General Public License (AGPL-3.0). This collaborative approach ensures NOMAD aligns with evolving research needs. In conclusion, NOMAD redefines NMR data management, facilitating a seamless journey from experiment to impactful research outcomes. NOMAD beckons researchers to shape a new era of collaborative NMR research.

## 1. Introduction

Nuclear Magnetic Resonance (NMR) spectroscopy is a powerful analytical technique used in a wide range of scientific fields. However, managing and sharing NMR data can be challenging due to fragmented data storage and the use of multiple instances of NMR acquisition and processing software. NOMAD is a groundbreaking open-source web application that addresses these challenges by providing an integrated platform for NMR data management, ensuring data provenance, and simplifying data sharing and publication.

## 2. Problem Statement

Efficient management of Nuclear Magnetic Resonance (NMR) data in laboratory settings presents a significant challenge. While NMR spectroscopy is a powerful analytical technique, the data it generates is often complex and voluminous. As researchers strive to adhere to the **[F.A.I.R](https://www.go-fair.org/fair-principles/)** (**F**indable, **A**ccessible, **I**nteroperable, and **R**eusable) research data principles, several obstacles hinder seamless data management and compliance. Data findability and accessibility is hindered by fragmented data storage on users' PCs and reliance on disparate software instances, making it challenging for researchers to locate relevant datasets efficiently. Furthermore, the conversion of NMR data into images pasted in Word or PDF documents for sharing and publication undermines data reusability. Accessibility also faces roadblocks due to the lack of a data repository that would serve as an equivalent to the **C**ambridge **C**rystallographic **D**ata **C**entre (**[CCDC](https://www.ccdc.cam.ac.uk/)**) for NMR data, leading to restricted access to already published NMR data and limited collaboration.

![With NMR data today, files land on a shared network drive that cannot be searched, are copied onto users' PCs into incompatible processing software, and end up flattened into Word and PDF documents with the raw data lost — undermining the F.A.I.R. principles](./assets/NMR-data-problem.svg)

## 3 The NOMAD Solution

NOMAD offers a transformative solution for NMR data management that streamlines the adherence to **[F.A.I.R](https://www.go-fair.org/fair-principles/)** principles. NOMAD serves as an end-to-end data management solution, taking NMR data from its inception through the entire research process until publication. Researchers can initiate experiments via the Submission Portal, record and analyze NMR data using the NMR Lab Notebook powered by **[NMRium](https://www.nmrium.org/)**, and securely store the data and metadata in the platform's Data Storage feature. This seamless workflow eliminates the need for data downloads to users' PCs and ensures that a direct link to raw NMR data is maintained at every stage of the research journey.

NOMAD also exposes a REST API that opens the archived data beyond the browser-based interface. Today, this API allows programmatic clients — including AI agents — to pull archived NMR data and metadata directly, enabling automated analysis and integration into wider computational workflows. Looking ahead, the same API will support publishing in the other direction: allowing users to push their data straight from their NOMAD server to the NOMAD-NMR Hub, a shared NMR data repository built in collaboration with the Physical Sciences Data Infrastructure (**[PSDI](https://www.psdi.ac.uk/)**). Together, these push and pull pathways turn NOMAD into a connective layer between individual labs, a national data repository, and the programmatic tools researchers increasingly rely on.

![With NOMAD, the Submission Portal books each experiment on the spectrometer and captures its provenance metadata up front; the acquired data then flows into Data Storage and on to the NMRium-powered NMR Lab Notebook, keeping a live link to the raw data throughout, while a REST API lets AI agents and scripts pull archived data today and will push it to the PSDI-backed NOMAD-NMR Hub](./assets/NMR-data-solution.svg)

## 4. Key Features

### 4.1 Monitoring Dashboard

NOMAD's Monitoring Dashboard brings together control of all NMR instruments in the laboratory into one centralized and user-friendly interface. Lab managers and researchers can effortlessly monitor instrument status, experiment progress, and resource allocation. Real-time notifications and alerts ensure timely actions to maintain efficient NMR operations. The Monitoring Dashboard also includes additional features for usage statistics and experimental time accounting. Lab managers can access comprehensive usage statistics, tracking the frequency and duration of experiments performed by individual users. Time accounting capabilities enable accurate and transparent reporting of experimental time used by each researcher. This data-driven approach enhances resource allocation and enables productivity assessment.

### 4.2 Submission Portal

The Submission Portal streamlines and centralizes NMR lab traffic. Researchers can easily submit their NMR experiments through the portal, reducing manual intervention and preventing scheduling conflicts. The portal also enables lab managers to efficiently allocate resources and prioritize experiments, leading to optimized instrument usage.

### 4.3 Data Storage

NOMAD offers automatic upload and storage of NMR datasets to ensure seamless data preservation. By associating raw NMR data with corresponding provenance metadata, data integrity and traceability are guaranteed. Researchers can access their data securely and conveniently at any time, eliminating the need for local storage and the risk of data loss.

### 4.4 NMR Lab Notebook

NOMAD's NMR Lab Notebook provides a comprehensive tool for viewing and processing NMR data using **[NMRium](https://www.nmrium.org/)**, a cutting-edge open-source NMR data visualization and analysis software. NMRium's user-friendly interface empowers researchers to perform sophisticated NMR data processing, spectral analysis, and structure elucidation directly within the NOMAD platform which simplifies the data preparation process for publication and maintains data traceability.

## 5. Future Vision - A National NMR Data Repository in Partnership with PSDI

NOMAD's future vision centres on establishing a national NMR Data Repository, built in collaboration with the Physical Sciences Data Infrastructure (**[PSDI](https://www.psdi.ac.uk/)**), the UK programme connecting data infrastructure across the physical sciences. This partnership echoes the transformative role that the Cambridge Crystallographic Data Centre (**[CCDC](https://www.ccdc.cam.ac.uk/)**) played in crystallography, offering NMR a similar shared, curated home for its data.

Rather than building its own network infrastructure, NOMAD will connect individual lab instances to **[PSDI](https://www.psdi.ac.uk/)**'s established storage and data-sharing services. NOMAD focuses on capturing, processing, and curating NMR data at the point of acquisition, while **[PSDI](https://www.psdi.ac.uk/)** provides the sustainable, institutionally-backed foundation for long-term archiving and cross-disciplinary access. This division of labour lets NOMAD benefit from proven governance and interoperability standards already serving the wider physical sciences community, rather than solving these challenges alone.

Data flowing into the repository will remain fully aligned with the F.A.I.R. principles, extending Findability, Accessibility, Interoperability, and Reusability from individual labs to the national NMR community.

In essence, NOMAD aspires to be a bridge between individual NMR laboratories and national research data infrastructure — a contributing partner within a larger, well-supported ecosystem, fostering interdisciplinary collaboration and advancing the frontiers of NMR research.

## 6. Technology Stack

NOMAD is built on a robust and modern technology stack that ensures seamless functionality, security, and scalability. Leveraging a combination of cutting-edge tools and frameworks that provides a reliable and user-friendly experience for NMR data management.
NOMAD has been developed using the Javascript MERN stack, comprising **[MongoDB](https://www.mongodb.com/)**, **[Express.js](https://expressjs.com/)**, **[React.js](https://react.dev/)**, and **[Node.js](https://nodejs.org/en)**. Additionally, it leverages the **[AntD](https://ant.design/)** design library for seamless and visually appealing user interfaces. **[NGINX](https://www.nginx.com/)** web server and reverse proxy enable efficient load balancing and secure connections. The implementation of **[Redux](https://redux.js.org/)** and **[WebSockets](https://socket.io/)** ensures real-time data synchronization and smooth user interactions. Moreover, NOMAD is containerized using **[Docker](https://www.docker.com/)**, facilitating easy deployment and scalability.
All communication between clients and the NOMAD server, including NMR data transfer, is carried out exclusively over HTTPS. This encrypted communication protocol guarantees the confidentiality and integrity of data transmissions, safeguarding sensitive research data from unauthorized access or tampering.

## 7. Open Source and Licensing

NOMAD's source code and development are hosted on **[GitHub](https://github.com/nomad-nmr)** under the terms of the Affero General Public License (AGPL-3.0). This license guarantees that any modifications or improvements made to the codebase must be made available to the public. NOMAD's foundation in open-source collaboration, supported by its presence on **[GitHub](https://github.com/nomad-nmr)**, underscores its commitment to shared advancement. By inviting the global research community to engage, NOMAD paves the way for a collaborative transformation of NMR data management.

## 8. NOMAD in Action: Real-world Application and Collaborative Expansion

NOMAD has seamlessly integrated into the University of St Andrews NMR lab, becoming a cornerstone of its data management strategy. With utilization spanning six NMR spectrometers, the platform efficiently handles diverse research needs. With around 200 active users benefiting from its streamlined workflows. During peak periods, NOMAD impressively archives over 400 NMR experiments daily, showcasing its scalability and robust performance. This adoption has resulted in enhanced research productivity. By centralizing data, simplifying organization, and reducing administrative burdens, NOMAD empowers researchers to focus on deriving insights from their experiments.

NOMAD's success at the University of St Andrews NMR lab fuels a broader ambition. We are actively pursuing collaborations with other NMR labs, seeking to replicate the seamless integration and benefits realized. Our ultimate vision includes connecting these labs to a national NMR Data Repository, built in partnership with **[PSDI](https://www.psdi.ac.uk/)**, fostering global collaboration and resource-sharing.

## 9. Conclusion

**NOMAD** (**N**MR **O**nline **M**anagement **A**nd **D**atastore) stands as a pioneering solution in NMR data management, addressing challenges faced by researchers globally. Our exploration has revealed NOMAD's role in simplifying complex NMR data handling, aligning with **[F.A.I.R](https://www.go-fair.org/fair-principles/)** data principles. NOMAD's array of features, from the Monitoring Dashboard to the NMR Lab Notebook, empowers researchers to navigate the data lifecycle with ease. It bridges the divide between data generation and impactful research outcomes. Our experience at the University of St Andrews NMR lab underscores NOMAD's real-world utility, catering to active users and archiving numerous experiments daily. In conclusion, NOMAD revolutionizes NMR data management, enabling researchers to focus on insight extraction. As we move forward, NOMAD invites you to partake in reshaping NMR data management, driving collaboration, and unlocking the next wave of scientific discoveries.
