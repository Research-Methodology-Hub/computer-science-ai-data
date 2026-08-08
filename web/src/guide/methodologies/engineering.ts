import type { Methodology } from '../types'

/**
 * Conducting Engineering Research.
 *
 * The design-and-experiment engineering research methodology (requirements,
 * modeling & simulation, prototyping, instrumented testing, verification &
 * validation, uncertainty analysis, standards-compliant reporting). Follows
 * the same 7-step shape as the other guides. Deliberately distinct from the
 * computational (CS/AI) methodology: the object of study is a physical or
 * engineered system, not a dataset or algorithm.
 */
export const engineering: Methodology = {
  id: 'engineering',
  title: 'Conducting Engineering Research',
  domain: 'Mechanical · Electrical · Civil · Industrial',
  blurb:
    'A design-and-experiment research workflow for engineered systems — requirements, modeling & simulation, prototyping, instrumented testing, verification & validation, and standards-compliant reporting (IEEE / ISO / ASTM).',
  status: 'available',
  intro: [
    'Conducting an engineering research study is an intensive but deeply rewarding process. This tutorial provides step-by-step guidance for conducting a design-and-experiment research study according to standard engineering research practice: a physical or engineered system is specified, modeled, prototyped, and validated against measurable requirements. The guidelines adapt to mechanical, electrical, civil, chemical, and industrial engineering projects, whether the contribution is a new device, process, material, or method.',
  ],
  overviewTopics: [
    'Purpose and types of engineering research (design-oriented vs. experimental vs. analytical)',
    'Philosophy of engineering research (design science, technology readiness levels, verification vs. validation)',
    'Ethical considerations in engineering (safety, environmental impact, professional codes of conduct, intellectual property)',
    'Introduction to the engineering research process',
    'Overview of writing an engineering thesis or paper (IMRAD and technical-report formats)',
  ],
  steps: [
    {
      n: 1,
      title: 'Problem Formulation & Requirements Specification',
      summary: 'Turn an engineering need into a precise problem statement, measurable requirements, and research questions.',
      items: [
        { text: 'Identify an engineering need or performance gap from industry, society, or prior research' },
        { text: 'Survey candidate systems, processes, and technologies to consider' },
        { text: 'Define the problem statement, functional requirements, and design constraints (performance, cost, safety, environmental)' },
        { text: 'Write purposes, research questions, and measurable technical objectives based on the requirements and constraints' },
        { text: 'Write the Requirements Specification section to describe the target system and its success criteria' },
      ],
    },
    {
      n: 2,
      title: 'Documenting the Context',
      summary: 'Search the literature, patents, and standards, and position your contribution against existing solutions.',
      items: [
        { text: 'Search the literature, patent databases, and applicable standards (IEEE, ISO, ASTM) for existing solutions to your target problem' },
        { text: 'Write the rest of Chapter 1: Introduction, focusing on the engineering need, motivation, and your specific technical contributions' },
        { text: 'Write Chapter 2: Literature Review & State of the Art, comparing existing designs, processes, and materials to your proposed solution' },
      ],
    },
    {
      n: 3,
      title: 'Conceptual Design & Modeling',
      summary: 'Generate design alternatives, model the system analytically or numerically, and select a concept through trade-off analysis.',
      items: [
        { text: 'Generate candidate design concepts that satisfy the requirements' },
        { text: 'Develop analytical models or numerical simulations (e.g. FEA, CFD, circuit or process simulation) of the candidate concepts' },
        { text: 'Conduct a trade-off and feasibility analysis against the requirements (performance, cost, manufacturability, risk)' },
        { text: 'Select the concept to develop and justify the selection' },
        { text: 'Write the Conceptual Design and System Modeling sections' },
      ],
    },
    {
      n: 4,
      title: 'Experimental Design & Instrumentation',
      summary: 'Define the variables, test plan, and instrumentation, and quantify measurement uncertainty before testing.',
      items: [
        { text: 'Identify the independent, dependent, and controlled variables of the study' },
        { text: 'Design the experiments (test matrix, design of experiments, number of replicates) to answer the research questions' },
        {
          text: 'Specify the test rig and instrumentation for each measured variable',
          children: [
            'Select sensors and measurement equipment with adequate range and resolution',
            'Calibrate instruments against reference standards',
            'Estimate the measurement uncertainty of each instrument',
            'Define the data-acquisition procedure and sampling rate',
          ],
        },
        { text: 'Write the Experimental Design and Instrumentation sections' },
      ],
    },
    {
      n: 5,
      title: 'Prototyping & Test Setup',
      summary: 'Build the prototype or test specimens and prepare a safe, repeatable test protocol.',
      items: [
        { text: 'Fabricate the prototype, test bench, or specimens according to the selected design' },
        { text: 'Document materials, components, dimensions, and manufacturing processes so the artifact can be reproduced' },
        { text: 'Write the Test Protocol section: step-by-step procedure, operating conditions, and safety measures' },
        { text: 'Run pilot tests to verify that the rig, instrumentation, and procedure work as specified' },
      ],
    },
    {
      n: 6,
      title: 'Testing, Validation & Data Analysis',
      summary: 'Run the tests to the protocol, analyze the data with uncertainty, and confront experiment with model and requirements.',
      items: [
        { text: 'Execute the test campaign, strictly following the procedures described in the Test Protocol' },
        {
          text: 'Analyze the experimental data according to the Experimental Design',
          children: [
            'Reduce raw measurements into the quantities of interest',
            'Calculate descriptive statistics and propagate measurement uncertainty',
            'Conduct statistical significance tests where the design of experiments requires them',
            'Compare experimental results with the analytical or simulation models (model validation)',
          ],
        },
        { text: 'Verify the system against the requirements (verification) and validate it against the original engineering need (validation)' },
        { text: 'Create tables and figures (performance curves, error bars, model-vs-experiment comparisons)' },
      ],
    },
    {
      n: 7,
      title: 'Reporting & Dissemination',
      summary: 'Write up results, limitations, and design recommendations, and ship reproducible technical documentation.',
      items: [
        { text: 'Write Chapter 4: Results & Validation' },
        { text: 'Write Chapter 5: Discussion, Limitations (operating envelope, failure modes, scale-up considerations), and Conclusion' },
        { text: 'Create supplementary materials (drawings, schematics, bill of materials, test data, and analysis scripts)' },
        { text: 'Disseminate the work through journals, conferences, patents, or technology transfer to industry' },
      ],
    },
  ],
}
