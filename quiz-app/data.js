// Question bank for Mid Term Exam practice
// Topics: Data Security Management, Document & Content Management,
// Reference & Master Data Management, Introduction to Data Governance & Data Management,
// Data Architecture, Data Development & Operations

const QUIZ_DATA = [
  // ===================== WEEK 4: DATA SECURITY MANAGEMENT =====================
  {
    topic: "Data Security Management",
    question: "What best describes Data Security Management in the context of enterprise data management?",
    choices: [
      "Storing all organizational data in a single database without restricting users",
      "Backing up data periodically so it is not lost when a system disruption occurs",
      "Planning, developing, and executing policies and procedures to provide authentication, authorization, access, and auditing of data and information",
      "Deleting data that is no longer used in order to reduce storage requirements"
    ],
    answer: 2,
    explanation: "Data Security Management encompasses planning, developing, and executing policies and procedures to ensure that authentication, authorization, access, and auditing of data and information are properly provided."
  },
  {
    topic: "Data Security Management",
    question: "Which of the following statements is one of the goals of Data Security Management?",
    choices: [
      "Enabling appropriate access and use of data while preventing inappropriate access and use",
      "Giving every employee the right to change all data so that work gets done faster",
      "Eliminating the entire audit process because data is already protected by passwords",
      "Equalizing the confidentiality level of all information regardless of stakeholder needs"
    ],
    answer: 0,
    explanation: "The main goal of Data Security Management is to balance the needs of various stakeholders: enabling appropriate access and change to data, while preventing inappropriate access and change."
  },
  {
    topic: "Data Security Management",
    question: "In the Data Security Management Context Diagram, which type of activity does 'Define Data Security Controls and Procedures' belong to?",
    choices: ["Planning (P)", "Development (D)", "Control (C)", "Operational (O)"],
    answer: 1,
    explanation: "Defining data security controls and procedures is a Development (D) activity — designing control mechanisms before they are put into operational use."
  },
  {
    topic: "Data Security Management",
    question: "A security team performs the activity 'Monitor User Authentication and Access Behavior.' Which output best matches this activity?",
    choices: [
      "Data Security Policy and Data Security Standards",
      "User Accounts, Passwords, and Role Groups",
      "Classified Documents and Classified Databases",
      "Data Access Logs, Security Notification Alerts, and Data Security Reports"
    ],
    answer: 3,
    explanation: "Monitoring user authentication and access behavior produces Data Access Logs, Security Notification Alerts, and Data Security Reports as its output."
  },
  {
    topic: "Data Security Management",
    question: "A company has hundreds of employees with similar responsibilities. The administrator wants to avoid granting access rights repeatedly to each account. Which approach best matches the material?",
    choices: [
      "Using one shared account for all employees in a department",
      "Defining privileges based on role groups and enrolling users into the appropriate groups",
      "Granting every privilege to every user and then restricting activity through monthly reports",
      "Creating identical passwords for all employees with the same job title"
    ],
    answer: 1,
    explanation: "Role-Based Access Control (RBAC) defines privileges based on role groups, then enrolls users into the appropriate groups, so the administrator does not need to grant access rights one by one to each account."
  },
  {
    topic: "Data Security Management",
    question: "In a security role hierarchy, what is the relationship between a child role's access rights and its parent role's, as explained in the material?",
    choices: [
      "The child role always receives all additional privileges that the parent role does not have",
      "The child role must not share any privileges with the parent role",
      "The child role is used to narrow the privileges held by the parent role",
      "The child role must grant DELETE rights to all of its members"
    ],
    answer: 2,
    explanation: "In a role hierarchy, a child role functions to narrow (further specify) the privileges held by the parent role, rather than automatically adding new privileges."
  },
  {
    topic: "Data Security Management",
    question: "A user is placed into four role groups at once. Even though the system allows it, what is the main risk of this practice according to the material?",
    choices: [
      "The user cannot authenticate through the enterprise directory",
      "The user's password automatically fails to meet complexity standards",
      "All data accessed by the user automatically becomes public",
      "It becomes harder for the administrator to understand the specific privileges the user ends up with"
    ],
    answer: 3,
    explanation: "The more role groups a single user belongs to, the harder it becomes for the administrator to track and understand the specific combination of privileges that user ultimately receives."
  },
  {
    topic: "Data Security Management",
    question: "An administrator is about to change the role group structure and move several users to other groups. Which procedure is most appropriate to apply?",
    choices: [
      "Obtain the necessary approvals and track the change through a change management system",
      "Make the change directly without any record to simplify administration",
      "Allow each user to change their own role group membership without approval",
      "Disable all authorization mechanisms while the membership change is in progress"
    ],
    answer: 0,
    explanation: "Changes to role group structure and user membership should go through the proper approval process and be tracked through a change management system so they remain accountable and auditable."
  },
  {
    topic: "Data Security Management",
    question: "Employee identity information is stored in several different applications. As a result, job titles and group memberships for the same person are often inconsistent. What is the most appropriate action according to the material?",
    choices: [
      "Keep every copy of the identity data and ask employees to pick the correct one each time they log in",
      "Remove group membership information from every system so there is no discrepancy",
      "Manage user identity data and role group membership centrally",
      "Allow each application to determine employee identity independently without synchronization"
    ],
    answer: 2,
    explanation: "The appropriate solution is to manage user identity data and role group membership centrally (centralized identity management), for example through an enterprise directory, so it stays consistent across all systems."
  },
  {
    topic: "Data Security Management",
    question: "Which of the following password rules matches the example password complexity requirements in the material?",
    choices: [
      "A password must not be the same as any of the last five passwords used",
      "A password may be the same as the username as long as it contains a number",
      "An empty password is allowed if the user only has READ rights",
      "A password should use adjacent keyboard characters so it is easy to remember"
    ],
    answer: 0,
    explanation: "One example of a password complexity requirement is a ban on reusing several of the most recent passwords (password history), to prevent reuse of old passwords."
  },
  {
    topic: "Data Security Management",
    question: "When an administrator creates a new account and the system generates an initial password, what action is recommended in the material?",
    choices: [
      "Set the initial password so it never expires",
      "Allow the administrator to use that initial password for every new account",
      "Delay the password change until the user requests help desk assistance",
      "Set the initial password to expire immediately so the user must set their own password"
    ],
    answer: 3,
    explanation: "The recommended practice is to make the initial password expire immediately, forcing the user to set their own password right away at first login."
  },
  {
    topic: "Data Security Management",
    question: "An organization uses an enterprise user directory so that employees only need to enter a password when logging into a workstation. Access to other applications then refers back to that directory. What is this capability called?",
    choices: ["Data classification", "Single-sign-on", "Data security auditing", "Change control"],
    answer: 1,
    explanation: "The ability to log in once to access many applications through a centralized directory is called Single Sign-On (SSO)."
  },
  {
    topic: "Data Security Management",
    question: "A table contains sensitive customer information. The organization implements an opt-in mechanism for access rights to that data. What is the main consequence?",
    choices: [
      "Users cannot take any action on the sensitive data until they have been granted the appropriate permission",
      "All users can automatically view the data as long as they have an application account",
      "Users without permission can still change the data through a database view",
      "Access rights are limited only by working hours, regardless of user permission"
    ],
    answer: 0,
    explanation: "With an opt-in mechanism, users cannot take any action on the sensitive data until they have been explicitly granted the appropriate permission."
  },
  {
    topic: "Data Security Management",
    question: "A branch manager should only be able to see transaction rows belonging to their own branch, while transaction rows from other branches must be hidden. Which mechanism is most appropriate according to the material?",
    choices: [
      "Grant READ rights to the entire transaction table to all managers",
      "Store each branch's transactions under a different user password",
      "Change the classification of all transactions to For General Audiences",
      "Use a relational database view that restricts rows based on a specific data value"
    ],
    answer: 3,
    explanation: "A relational database view can be used to restrict access at the row level (row-level security) based on a specific data value, such as the manager's branch code."
  },
  {
    topic: "Data Security Management",
    question: "Operational staff need to see customer names and numbers, but must not see columns containing more confidential information. Which solution is supported by the material?",
    choices: [
      "Permanently delete all confidential columns from the database",
      "Use a database view to restrict access to specific columns",
      "Allow access to all columns and ask staff not to open the confidential columns",
      "Grant DELETE privilege so staff can hide columns that are not needed"
    ],
    answer: 1,
    explanation: "A database view can also be used to restrict access at the column level (column-level security), so that more sensitive columns are hidden from unauthorized users."
  },
  {
    topic: "Data Security Management",
    question: "A system detects unusual data access transactions at night. Why is the activity of monitoring authentication and access behavior important in this situation?",
    choices: [
      "Because monitoring automatically replaces the entire need for security planning and auditing",
      "Because monitoring guarantees that every unusual transaction is definitely a violation",
      "Because monitoring can uncover suspicious activity that needs investigation and provides an access history for compliance audits",
      "Because monitoring allows all users to automatically gain additional access rights"
    ],
    answer: 2,
    explanation: "Monitoring authentication and access behavior is important because it can uncover suspicious activity that needs further investigation, and it provides an access history (audit trail) for compliance audit purposes."
  },
  {
    topic: "Data Security Management",
    question: "A financial strategy document may only be opened by employees in certain roles who have a need to know its contents and may require security clearance. Which classification is most appropriate?",
    choices: ["Restricted Confidential", "Internal Use Only", "For General Audiences", "Registered Confidential"],
    answer: 0,
    explanation: "Restricted Confidential is the highest classification level, limited only to certain roles with a need-to-know, and sometimes requiring security clearance."
  },
  {
    topic: "Data Security Management",
    question: "An organization establishes that anyone who will access a certain document must sign a legal agreement and is responsible for maintaining its confidentiality. Which classification level is most appropriate?",
    choices: ["Confidential", "Registered Confidential", "Internal Use Only", "For General Audiences"],
    answer: 1,
    explanation: "Registered Confidential requires every party accessing the document to sign a legal agreement and be responsible for its confidentiality."
  },
  {
    topic: "Data Security Management",
    question: "A work guide is restricted to the organization's employees. The guide may be shown or discussed, but must not be copied outside the organization. According to the classification scheme in the material, what category does this guide fall under?",
    choices: ["For General Audiences", "Registered Confidential", "Restricted Confidential", "Internal Use Only"],
    answer: 3,
    explanation: "Internal Use Only means the document is only for internal employees — it may be shown or discussed internally, but must not be copied or taken outside the organization."
  },
  {
    topic: "Data Security Management",
    question: "Which approach is most appropriate for carrying out a Data Security Audit?",
    choices: [
      "Ask the person directly responsible for the process to audit their own work",
      "Use the audit mainly to find individuals to blame when a weakness is found",
      "Use an independent auditor to produce an objective assessment and practical improvement recommendations",
      "Avoid giving recommendations to management because an audit only serves to record user activity"
    ],
    answer: 2,
    explanation: "A data security audit should be performed by an independent auditor so it produces an objective assessment along with practical improvement recommendations, rather than by the party auditing its own work."
  },

  // ===================== WEEK 5: DOCUMENT & CONTENT MANAGEMENT =====================
  {
    topic: "Document & Content Management",
    question: "An organization wants to establish a process for storing, inventorying, and controlling both paper and electronic records. Which practice best describes this activity?",
    choices: ["Enterprise taxonomy development", "Document management", "Website content publishing", "Search engine optimization"],
    answer: 1,
    explanation: "Document management is the process of storing, inventorying, and controlling documents in both physical (paper) and electronic form."
  },
  {
    topic: "Document & Content Management",
    question: "A company organizes and categorizes information so that it can be stored, published, and reused across different departments. Which concept is being applied?",
    choices: ["Document disposal", "Physical records inventory", "Enterprise content management", "Document check-out"],
    answer: 2,
    explanation: "Enterprise Content Management (ECM) covers organizing and categorizing information so it can be stored, published, and reused across departments."
  },
  {
    topic: "Document & Content Management",
    question: "Which of the following is the best example of unstructured data as described in document and content management?",
    choices: [
      "A video recording that has not been tagged or organized into records",
      "A customer table with predefined columns and primary keys",
      "A relational database table containing employee IDs",
      "A structured transaction table with fixed fields"
    ],
    answer: 0,
    explanation: "Unstructured data is data that does not have a formally defined data model, such as a video recording that has not been tagged or organized, unlike a database table that is structured with fixed columns and primary keys."
  },
  {
    topic: "Document & Content Management",
    question: "Which of the following sequences correctly represents the four main stages used when planning a document's lifecycle?",
    choices: [
      "Distribution, creation or receipt, archiving, organization for retrieval",
      "Archiving, distribution, organization for retrieval, creation or receipt",
      "Organization for retrieval, archiving, creation or receipt, distribution",
      "Creation or receipt, organization for retrieval, distribution, archiving or disposition"
    ],
    answer: 3,
    explanation: "The four main stages of the document lifecycle are: Creation or receipt, Organization for retrieval, Distribution, and Archiving or disposition — in order, following the flow of a document from creation to archiving/disposal."
  },
  {
    topic: "Document & Content Management",
    question: "A records manager is designing a classification system and taxonomy for thousands of organizational documents. What is the main intended benefit?",
    choices: [
      "Eliminating the need for retention policies",
      "Preventing the creation of electronic documents",
      "Making documents easier to retrieve",
      "Replacing all documents with structured database tables"
    ],
    answer: 2,
    explanation: "The main purpose of a classification system and taxonomy is to make it easier to search and retrieve documents among thousands of organizational documents."
  },
  {
    topic: "Document & Content Management",
    question: "During the capture of electronic documents, which action is necessary to help users find those documents later?",
    choices: ["Indexing the documents", "Immediately disposing of the documents", "Removing document attributes", "Restricting all documents to paper storage"],
    answer: 0,
    explanation: "Indexing is performed during the capture of electronic documents so the documents can easily be found again through search later on."
  },
  {
    topic: "Document & Content Management",
    question: "A project team needs to check documents in and out, compare revisions, track versions, and archive earlier copies. Which facility best supports these activities?",
    choices: ["A paper-only filing cabinet", "A keyword-free website", "A basic spreadsheet without version control", "A document repository"],
    answer: 3,
    explanation: "A document repository is the facility that supports check-in/check-out, revision comparison, version tracking, and archiving of earlier document copies."
  },
  {
    topic: "Document & Content Management",
    question: "A critical document requires a formal change request, thorough impact evaluation, approval by a change authority, and full status accounting. Which level of control applies?",
    choices: ["Custody", "Formal", "Revision", "Informal"],
    answer: 1,
    explanation: "The Formal control level requires a formal change request, a thorough impact evaluation, approval from a change authority, and full status accounting — appropriate for highly critical documents."
  },
  {
    topic: "Document & Content Management",
    question: "When an internal document changes, the organization requires notification to stakeholders and an incremented version number, but no formal change authority. Which control level is most appropriate?",
    choices: ["Formal", "Custody", "Revision", "Disposal"],
    answer: 2,
    explanation: "Revision control only requires notifying the relevant stakeholders and incrementing the document's version number, without requiring formal approval from a change authority."
  },
  {
    topic: "Document & Content Management",
    question: "A low-criticality document only needs safe storage and a reliable means of retrieval. Which control level best matches this requirement?",
    choices: ["Custody", "Formal", "Revision", "Audit"],
    answer: 0,
    explanation: "The Custody control level only requires safe storage and a reliable retrieval method, appropriate for documents with a low criticality level."
  },
  {
    topic: "Document & Content Management",
    question: "An organization is preparing a disaster recovery plan for its documents and records. Which of the following is a required activity?",
    choices: [
      "Deleting vital records to reduce storage costs",
      "Identifying vital records and developing protection and recovery plans",
      "Replacing recovery procedures with a search engine",
      "Keeping recovery procedures separate from corporate backup activities"
    ],
    answer: 1,
    explanation: "Preparing a disaster recovery plan for documents/records requires first identifying vital records, then developing protection and recovery plans for those records."
  },
  {
    topic: "Document & Content Management",
    question: "A company specifies how long records must be maintained and when inactive records can move to secondary storage or be disposed of. Which program governs these decisions?",
    choices: ["Enterprise taxonomy mapping", "Digital asset publishing", "Search result ranking", "Retention and disposition"],
    answer: 3,
    explanation: "The Retention and Disposition program determines how long a record must be retained and when inactive records are moved to secondary storage or disposed of."
  },
  {
    topic: "Document & Content Management",
    question: "Why should an organization periodically audit its document and records management practices?",
    choices: [
      "To ensure the right information reaches the right people at the right time",
      "To eliminate the need for document classification",
      "To guarantee that every document is stored permanently",
      "To replace all operational decisions with automated searches"
    ],
    answer: 0,
    explanation: "Periodic audits of document and records management practices are performed to ensure the right information is available to the right people at the right time."
  },
  {
    topic: "Document & Content Management",
    question: "A university maintains its intranet by creating, editing, storing, organizing, and publishing digital articles through a controlled process. Which system is typically responsible?",
    choices: ["A disaster recovery system only", "A physical inventory management system", "A content management system", "A document destruction service"],
    answer: 2,
    explanation: "A Content Management System (CMS) is the system responsible for the process of creating, editing, storing, organizing, and publishing digital content such as intranet articles."
  },
  {
    topic: "Document & Content Management",
    question: "An enterprise defines relationships between content items, their required attributes, and the structure used to organize them. What is being developed?",
    choices: ["A document retention calendar", "Information Content Architecture", "A backup rotation schedule", "A change approval log"],
    answer: 1,
    explanation: "Defining the relationships between content items, their required attributes, and the structure used to organize them is the development of an Information/Content Architecture."
  },
  {
    topic: "Document & Content Management",
    question: "A taxonomy classifies countries into a controlled list of categories without relationships or hierarchy among those categories. Which type of taxonomy is this?",
    choices: ["Network taxonomy", "Hierarchical taxonomy", "Facet taxonomy", "Flat taxonomy"],
    answer: 3,
    explanation: "A flat taxonomy classifies items into a controlled list of categories without any relationships or hierarchy among those categories."
  },
  {
    topic: "Document & Content Management",
    question: "A digital content object is described by creator, title, keywords, and access rights, each treated as an attribute of the same object. Which taxonomy type is illustrated?",
    choices: ["Facet taxonomy", "Flat taxonomy", "Hierarchical taxonomy", "Network taxonomy"],
    answer: 0,
    explanation: "A facet taxonomy describes an object through several independent attributes/facets (e.g., creator, title, keyword, access rights) that belong to the same object."
  },
  {
    topic: "Document & Content Management",
    question: "A classification system lets users move from continent to country to city and then to address, refining the category at each level. Which taxonomy is being used?",
    choices: ["Facet taxonomy", "Flat taxonomy", "Hierarchical taxonomy", "Network taxonomy"],
    answer: 2,
    explanation: "A hierarchical taxonomy allows users to navigate from a general category to a more specific one in layers, for example from continent down to address."
  },
  {
    topic: "Document & Content Management",
    question: "An online library recommends related materials using associations between content items, including links across different classification categories. Which taxonomy best fits this approach?",
    choices: ["Flat taxonomy", "Network taxonomy", "Hierarchical taxonomy only", "Facet taxonomy only"],
    answer: 1,
    explanation: "A network taxonomy connects content items across classification categories through associations/relationships, which supports recommending related content."
  },
  {
    topic: "Document & Content Management",
    question: "A search engine uses software that roams the Web and stores URLs of content it encounters. Which component performs this function?",
    choices: ["Retention scheduler", "Change authority", "Document repository", "Spider software"],
    answer: 3,
    explanation: "Spider software (a web crawler) is the component that roams the web and stores the URLs of content it encounters, used by search engines."
  },

  // ===================== WEEK 6: REFERENCE & MASTER DATA MANAGEMENT =====================
  {
    topic: "Reference & Master Data Management",
    question: "Which of the following best describes the purpose of Reference Data Management?",
    choices: [
      "Recording every transaction performed by an organization",
      "Controlling standardized domain values and ensuring their consistent use across systems",
      "Storing only unstructured documents and images",
      "Replacing all master data with transaction data"
    ],
    answer: 1,
    explanation: "Reference Data Management aims to control standardized domain values (reference data) and ensure their consistent use across the organization's systems."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A help desk system uses the values New, Assigned, Work In Progress, and Resolved to indicate ticket status. These values are an example of:",
    choices: ["Internally defined reference data", "Product master data", "Transactional data lineage", "Financial master data"],
    answer: 0,
    explanation: "Status values such as New, Assigned, Work In Progress, and Resolved are reference data defined internally by the organization/application, rather than coming from an external standard."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A data integration team maps the codes CA, US-CA, and 06 to the same state, California. Which concept is being applied?",
    choices: ["Data replication scheduling", "Match-merge rules", "Cross-reference data", "Product master data"],
    answer: 2,
    explanation: "Mapping several different codes (CA, US-CA, 06) that refer to the same entity (California) is an example of applying cross-reference data."
  },
  {
    topic: "Reference & Master Data Management",
    question: "An organization uses UNSPSC codes to classify products from broad categories into more specific categories using parent-child relationships. What type of reference data is this?",
    choices: ["Financial master data", "Transactional data", "Location master data", "Taxonomic reference data"],
    answer: 3,
    explanation: "UNSPSC is an example of taxonomic reference data — classifying products from broad categories into more specific categories through parent-child relationships."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Who is responsible for maintaining reference data code values, descriptions, and business definitions, including monitoring changes to external standards?",
    choices: ["Application end users only", "Business data stewards", "External customers only", "Network administrators only"],
    answer: 1,
    explanation: "Business data stewards are responsible for maintaining the code values, descriptions, and business definitions of reference data, including monitoring changes to relevant external standards."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Which statement correctly distinguishes master data from reference data?",
    choices: [
      "Master data must always use a fixed list of predefined domain values",
      "Reference data describes individual customers and employees in every transaction",
      "Master data describes essential business entities that provide context for transactions",
      "Master data never follows rules about formats or allowable ranges"
    ],
    answer: 2,
    explanation: "Master data describes essential business entities (such as party, product, location) that provide context for transactions, unlike reference data, which consists of standardized domain values."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A university maintains records describing its students and lecturers and the roles they play in the institution. Which master data category best fits these records?",
    choices: ["Party master data", "Product master data", "Financial master data", "Location reference data"],
    answer: 0,
    explanation: "Data about people (students, lecturers) and the roles they play in the institution falls under party master data."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Data about organizational cost centers, general ledger accounts, budgets, and projections belongs primarily to:",
    choices: ["Party master data", "Location master data", "Taxonomic reference data", "Financial master data"],
    answer: 3,
    explanation: "Data related to cost centers, general ledger accounts, budgets, and projections is part of financial master data."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A manufacturing company maintains bill-of-materials structures, component usage, product versions, and design documents. Which type of master data is most relevant?",
    choices: ["Party master data", "Product master data", "Location reference data", "Order-status reference data"],
    answer: 1,
    explanation: "Bill-of-materials structures, component usage, product versions, and design documents are part of product master data."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Which of the following is the best example of location master data rather than location reference data?",
    choices: [
      "An official list of country codes",
      "A standardized list of province names",
      "A customer's address and geographic coordinates",
      "A table of postal-code formats"
    ],
    answer: 2,
    explanation: "A specific customer's address and geographic coordinates are location master data (a specific instance), whereas lists of country/province codes or postal-code formats are location reference data (standard/domain values)."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Which of the following is a primary goal of Reference and Master Data Management?",
    choices: [
      "Providing an authoritative source of reconciled, high-quality data",
      "Encouraging separate definitions of the same entity in each application",
      "Eliminating the need for data quality measurements",
      "Preventing business intelligence systems from reusing data"
    ],
    answer: 0,
    explanation: "One primary goal of Reference and Master Data Management is to provide an authoritative source of reconciled, high-quality data for consistent use."
  },
  {
    topic: "Reference & Master Data Management",
    question: "In a hub-and-spoke reference data architecture, what is the main function of the database of record?",
    choices: [
      "Storing only temporary copies of reports",
      "Allowing each application to define its own conflicting codes",
      "Receiving updates only from data marts",
      "Acting as the authoritative hub that supplies data to other applications"
    ],
    answer: 3,
    explanation: "In a hub-and-spoke architecture, the database of record acts as the authoritative hub that distributes data to the other applications (spokes)."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A source system publishes a reference data change, and subscribed application databases receive the update shortly afterward without a coordinated real-time transaction. Which approach is illustrated?",
    choices: [
      "Manual data entry into every database",
      "Asynchronous subscribe-and-publish replication",
      "Synchronous coordinated updates across databases",
      "Deletion of all replicated data"
    ],
    answer: 1,
    explanation: "This approach is asynchronous subscribe-and-publish replication, where data changes are replicated to subscribing systems without a coordinated real-time transaction."
  },
  {
    topic: "Reference & Master Data Management",
    question: "An organization routes reference and master data from several systems of record through a shared operational data store (ODS). What is a key advantage of this design?",
    choices: [
      "It requires more point-to-point interfaces between all applications",
      "It removes the need to manage data sources",
      "It standardizes interfaces and reduces point-to-point integration complexity",
      "It prevents applications from accessing shared master data"
    ],
    answer: 2,
    explanation: "A shared Operational Data Store (ODS) standardizes interfaces between systems and reduces the point-to-point integration complexity that typically arises when every system connects directly to every other system."
  },
  {
    topic: "Reference & Master Data Management",
    question: "What is a likely consequence of managing reference and master data separately in application silos without a data integration architecture?",
    choices: [
      "Redundant and inconsistent data across applications",
      "Automatic creation of a single golden record",
      "Complete elimination of data quality problems",
      "Standardized definitions in every application by default"
    ],
    answer: 0,
    explanation: "Managing reference and master data separately in silos without a data integration architecture tends to produce redundant and inconsistent data across applications."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Which activity is an example of a common service that should be supported by a data integration architecture?",
    choices: [
      "Allowing every application to apply unrelated matching rules",
      "Disabling change approval for shared data",
      "Removing audit and error-resolution information",
      "Applying consistent data quality checks and matching rules"
    ],
    answer: 3,
    explanation: "A common service within a data integration architecture includes applying consistent data quality checks and matching rules across all systems."
  },
  {
    topic: "Reference & Master Data Management",
    question: "A company wants to flag potentially duplicate customer records for review, but it does not want the system to merge them automatically. Which matching approach should be used?",
    choices: ["Match-link rules", "Duplicate identification match rules", "Match-merge rules", "Data replication rules"],
    answer: 1,
    explanation: "To flag potential duplicates without automatically merging them, duplicate identification match rules are used, so the results can be reviewed manually before action is taken."
  },
  {
    topic: "Reference & Master Data Management",
    question: "Two systems contain complementary and conflicting information about the same supplier. The organization wants to reconcile these records into one comprehensive record. Which matching approach is most appropriate?",
    choices: [
      "Duplicate identification without further action",
      "Data classification using a taxonomy",
      "Match-merge rules",
      "Match-link rules without modifying record contents"
    ],
    answer: 2,
    explanation: "Match-merge rules are used to reconcile complementary and conflicting information from multiple records into one comprehensive record (a golden record)."
  },
  {
    topic: "Reference & Master Data Management",
    question: "An organization needs to establish a relationship between records referring to the same person while preserving the original content of each record. Which approach is most suitable?",
    choices: [
      "Match-link rules",
      "Match-merge rules",
      "Deleting all duplicate records immediately",
      "Converting the records into reference value domains"
    ],
    answer: 0,
    explanation: "Match-link rules are used to connect records that refer to the same entity without changing or merging the content of the original records."
  },
  {
    topic: "Reference & Master Data Management",
    question: "What does a golden master data value represent?",
    choices: [
      "The first value entered into any application, regardless of its accuracy",
      "A value that must remain unchanged even when the business entity changes",
      "The value stored in the system with the oldest database",
      "The most accurate, current, and relevant value selected for consistent shared use"
    ],
    answer: 3,
    explanation: "A golden value is the most accurate, current, and relevant value selected for consistent shared use across the organization, usually the result of a match-merge process."
  },

  // ===================== MODULE: INTRODUCTION TO DATA GOVERNANCE & DATA MANAGEMENT =====================
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "In the pipe-and-liquid analogy, what is being likened to the 'liquid,' and what is the role of Data Governance?",
    choices: [
      "Data is the liquid that flows; Data Governance is the decision-making about that data (who, what, when, where, how people/process/rules/technology affect the data to keep it 'clean')",
      "IT is the liquid; Data Governance is the pump and filter",
      "Data is the pipe; Data Governance is the decision-making about the pipe",
      "Data Governance is the pipe that moves information"
    ],
    answer: 0,
    explanation: "IT is likened to the pipe, and IT Governance is the decision-making about the pipe/pump/filter. Data is the liquid that flows, and Data Governance is the decision-making about the data itself."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "Which definition of Data Governance best matches the module?",
    choices: [
      "The process of cleansing data across all systems",
      "The exercise of authority and control (planning, monitoring, enforcement) over the management of data assets",
      "The activities of the Data Warehouse team in creating BI reports",
      "Decisions about purchasing servers and network equipment"
    ],
    answer: 1,
    explanation: "Data Governance is high-level planning and control over data management, i.e., the authority and control (planning, monitoring, enforcement) exercised over the management of data assets."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "Data ownership is not formally defined, so most units feel they are merely data consumers. What is the impact on the business?",
    choices: [
      "Data automatically becomes more accurate",
      "The data cleansing process becomes more efficient",
      "Decisions related to data issues are not made in a timely manner (the conflict resolution process takes longer)",
      "Cross selling becomes easier"
    ],
    answer: 2,
    explanation: "Without a clear data owner, no party is responsible for resolving data issues, so conflict resolution takes longer and decisions are delayed."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "According to the guiding principles, how should data stewards best be appointed?",
    choices: [
      "Recruited from outside the company specifically for the steward role",
      "Selected only from IT staff",
      "Trained from scratch by consultants",
      "Found, not made: appoint people who are already interested in and involved with the data work"
    ],
    answer: 3,
    explanation: "The principle is 'the best data stewards are found, not made.' The appointment is a recognition and formalization of accountability for work they are already doing."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "The three cross-functional organizations that hold 'legislative and judicial' responsibilities in data governance are...",
    choices: [
      "Data Governance Council, Data Stewardship Program Steering Committees, and Data Stewardship Teams",
      "CIO, DBA, and Data Architect",
      "Data Governance Office, DBA, and Data Analyst",
      "Data Management Executive, Data Broker, and Help Desk"
    ],
    answer: 0,
    explanation: "These three establish policies/standards (legislative) and resolve issues (judicial), while Data Management Services carries out the executive function (administration, service, protection)."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "On the Data Issue Escalation Path, roughly what percentage of data conflicts can be resolved at the Data Stewardship Teams level?",
    choices: ["Less than 5%", "Less than 20%", "50-60%", "80-85%"],
    answer: 3,
    explanation: "Most issues (80-85%) are resolved at the operational level by Data Stewardship Teams. The rest escalate to the Steering Committee (<20%) and the Data Governance Council (<5%)."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "What is the main difference between a data policy and data standards & procedures?",
    choices: [
      "A policy explains 'how' to do something, standards explain 'what'",
      "A policy explains 'what' must or must not be done, while standards and procedures explain 'how' to do it",
      "A policy is more detailed and there are many of them",
      "There is no difference"
    ],
    answer: 1,
    explanation: "A data policy is a brief statement of management intent and fundamental rules (relatively few in number). Standards and procedures are more detailed and explain how to do something."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "Which of the following is NOT part of what Data Governance truly is?",
    choices: [
      "Collaboration between Business and IT",
      "An ongoing process",
      "A technology issue that can simply be handed off to IT",
      "An enterprise-level initiative"
    ],
    answer: 2,
    explanation: "Data Governance is a combination of people, process, technology, and metrics — not merely a technology issue or an activity that can be 'thrown over the wall' to IT."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "Who does the Data Management Executive (DME) report to?",
    choices: ["CIO", "Chief Data Steward", "Data Stewardship Team", "Regulatory Bodies"],
    answer: 0,
    explanation: "The DME is the top manager of Data Management Services within the IT department, reports to the CIO (the CIO's 'right hand'), and is responsible for coordinating governance, stewardship, and data management projects."
  },
  {
    topic: "Introduction to Data Governance & Data Management",
    question: "What is the main purpose of establishing a Data Governance Office in a large company?",
    choices: [
      "To replace the Data Governance Council",
      "To manage server and network infrastructure",
      "To provide full-time support for part-time data stewardship responsibilities, through Data Stewardship Facilitators",
      "To externally audit all data users"
    ],
    answer: 2,
    explanation: "Business data stewards typically work part-time. The DGO contains facilitators who handle the legwork (scheduling meetings, taking minutes, gathering information) so stewards can make the right decisions."
  },

  // ===================== MODULE: DATA ARCHITECTURE =====================
  {
    topic: "Data Architecture",
    question: "What is the essence of Data Architecture?",
    choices: [
      "Choosing the cheapest database brand",
      "Running daily backup and recovery",
      "Identifying enterprise data requirements and designing and maintaining a master blueprint to meet them",
      "Creating dashboard reports for managers"
    ],
    answer: 2,
    explanation: "Data Architecture identifies enterprise data requirements (whatever their structure) and designs a blueprint to guide data integration, control data assets, and align data investments with business strategy."
  },
  {
    topic: "Data Architecture",
    question: "What is the purpose of Enterprise Data Architecture compared to other architecture domains?",
    choices: [
      "To describe how data should be organized and managed",
      "To describe the physical technology needed for systems to function",
      "To identify how the enterprise creates value for customers",
      "To describe the structure and function of applications in the enterprise"
    ],
    answer: 0,
    explanation: "Business Architecture: value creation. Data Architecture: organizing and managing data. Applications Architecture: structure and function of applications. Technology Architecture: physical technology."
  },
  {
    topic: "Data Architecture",
    question: "Which approach to building an enterprise data model is usually recommended?",
    choices: [
      "Top-down only",
      "Bottom-up only",
      "A combination: start bottom-up from existing models, then complete it by delegating subject area modeling to projects",
      "There is no need to build an enterprise data model"
    ],
    answer: 2,
    explanation: "Top-down starts by establishing subject areas; bottom-up is based on existing models. A combination of the two is generally recommended."
  },
  {
    topic: "Data Architecture",
    question: "What is the correct order of model levels, from most general to most detailed, in the Enterprise Data Model?",
    choices: [
      "Logical Model → Conceptual Model → Subject Area Model → Application-specific",
      "Subject Area Model → Conceptual Model → Physical Model",
      "Application-specific → Logical Model → Conceptual Model",
      "Conceptual Model → Subject Area Model → Logical Model → Application/Project-Specific (LDM/PDM)"
    ],
    answer: 3,
    explanation: "The conceptual model (12-20 subject areas) is broken down into Subject Area Models, then a Logical Model per subject area, and finally application/project-specific models (LDM & PDM)."
  },
  {
    topic: "Data Architecture",
    question: "In a data flow matrix (entities vs. business processes), what do the markers 'Create' and 'Read/use' mean?",
    choices: [
      "Create: a process that deletes data; Read/use: a process that archives data",
      "Create: the business process that creates/generates the entity's data; Read/use: a process that only reads/uses it",
      "Create and Read/use both mean modifying data",
      "Create: external users; Read/use: internal users"
    ],
    answer: 1,
    explanation: "The matrix shows which process is the source (create) of a data entity and which processes merely use it (read/use), helping to visualize data flow across the enterprise."
  },
  {
    topic: "Data Architecture",
    question: "Which of the following are included in Data Architecture deliverables according to the context diagram?",
    choices: [
      "Enterprise Data Model, Data Flows, Data Value Chains, and Implementation Roadmap",
      "Backup tapes and database logs",
      "Mobile application source code",
      "Financial audit reports"
    ],
    answer: 0,
    explanation: "Deliverables: Data Architecture Design, Data Flows, Data Value Chains, Enterprise Data Model, and Implementation Roadmap."
  },
  {
    topic: "Data Architecture",
    question: "Why does data replication need to be controlled by Data Architecture governance?",
    choices: [
      "Because replication can improve performance and availability, but can also cause data inconsistency",
      "Because replication always degrades application performance",
      "Because replication is prohibited by regulation",
      "Because replication deletes metadata"
    ],
    answer: 0,
    explanation: "Replication is commonly used to improve performance and availability, but carries a risk of inconsistency. Governance ensures the replication mechanism matches the level of consistency required (not every application needs strict consistency)."
  },
  {
    topic: "Data Architecture",
    question: "Which of the following is included as a risk in the readiness/risk assessment for implementing Data Architecture?",
    choices: [
      "Strong management support",
      "Culture shock and lack of management support",
      "A highly confident sponsor",
      "A long track record of success"
    ],
    answer: 1,
    explanation: "Risks noted in the module: lack of management support, no track record, a hesitant sponsor, counterproductive executive decisions, culture shock, an inexperienced project leader, and domination by a single viewpoint."
  },
  {
    topic: "Data Architecture",
    question: "Which of the following is NOT a performance metric for Enterprise Data Architecture?",
    choices: [
      "Architecture standard compliance rate",
      "Use/reuse/replace/retire measurements",
      "Business value measurements (e.g., business agility)",
      "Number of transaction data rows per day"
    ],
    answer: 3,
    explanation: "Metrics include architecture standard compliance rate, implementation trends (use/reuse/replace/retire, project execution efficiency), and business value measurements."
  },
  {
    topic: "Data Architecture",
    question: "In Data Architecture Governance, Enterprise Data Architecture is likened to what for long-term integration?",
    choices: ["A toolbox", "A zoning plan", "A cash book", "A search engine"],
    answer: 1,
    explanation: "Enterprise Data Architecture functions as a 'zoning plan' for long-term integration; the future architecture influences the goals and priorities of projects in the portfolio."
  },

  // ===================== MODULE: DATA DEVELOPMENT & OPERATIONS =====================
  {
    topic: "Data Development & Operations",
    question: "Data Development is defined as...",
    choices: [
      "Planning, control, and support of structured data assets throughout their lifecycle",
      "Designing, implementing, and maintaining solutions to meet enterprise data requirements",
      "Government oversight of data regulation",
      "Creating data policy by the Data Governance Council"
    ],
    answer: 1,
    explanation: "Option A is the definition of Data Operations Management. Data Development focuses on designing, implementing, and maintaining data solutions."
  },
  {
    topic: "Data Development & Operations",
    question: "Which statement about the conceptual data model is correct?",
    choices: [
      "It contains DBMS-specific data types and indexes",
      "It depends on the database technology used",
      "It is only created after the physical database is finished",
      "It contains basic and critical business entities and their relationships, independent of technology and usage context"
    ],
    answer: 3,
    explanation: "The conceptual model is a high-level view of a business subject area that defines the semantics (nouns and verbs) of business terms, accompanied by a glossary."
  },
  {
    topic: "Data Development & Operations",
    question: "A 'Registration' entity that depends on both Student and Course is an example of which entity type?",
    choices: [
      "Attributive/characteristic entity",
      "Independent entity",
      "Associative/mapping entity",
      "Category/sub-type entity"
    ],
    answer: 2,
    explanation: "An associative/mapping entity depends on two or more entities. An attributive entity depends on a single parent entity (e.g., Employee Beneficiary). A category/sub-type entity is a kind of another entity."
  },
  {
    topic: "Data Development & Operations",
    question: "The statement 'A company can employ many people' is an example of which type of data rule?",
    choices: [
      "Cardinality, i.e., the number of entity instances that can participate in a relationship",
      "Referential integrity",
      "Normalization",
      "Abstraction"
    ],
    answer: 0,
    explanation: "Cardinality defines the quantity of entity instances in a relationship. Referential integrity ensures valid values (e.g., a person may exist without a company, but a company must have at least one person)."
  },
  {
    topic: "Data Development & Operations",
    question: "The basic purpose of normalization in the logical data model is...",
    choices: [
      "Increasing data duplication for faster access",
      "Storing each data element in only one place",
      "Combining all attributes into a single table",
      "Removing all relationships between entities"
    ],
    answer: 1,
    explanation: "Normalization is the process of applying rules to organize business complexity into stable data structures, with the goal that each data element exists in only one place."
  },
  {
    topic: "Data Development & Operations",
    question: "The concept of 'phone number' in the conceptual model is broken down into phone type code, country code, area code, prefix, base number, and extension in the logical model. What principle is being applied?",
    choices: [
      "An attribute must be atomic (a single fact that cannot be broken down further)",
      "An attribute must always be a primary key",
      "An attribute must use a technical name with abbreviations",
      "An attribute must have a NULL value"
    ],
    answer: 0,
    explanation: "Attributes in the logical model must be atomic: containing only a single fact that cannot be broken down further."
  },
  {
    topic: "Data Development & Operations",
    question: "What distinguishes a physical data model from a logical data model?",
    choices: [
      "The physical model does not contain tables and columns",
      "The physical model only contains a business glossary",
      "The physical model optimizes implementation by considering DBMS capabilities, technology constraints, performance, and modeling standards",
      "The physical model is independent of all technology"
    ],
    answer: 2,
    explanation: "The physical model is designed around the capabilities of a specific DBMS (e.g., Oracle, SQL Server) and performance requirements; the logical model remains independent of technology."
  },
  {
    topic: "Data Development & Operations",
    question: "Which of the following are the three goals of Data Operations Management?",
    choices: [
      "Protecting and ensuring the integrity of structured data assets, managing data availability throughout its lifecycle, and optimizing database transaction performance",
      "Setting business strategy, recruiting data stewards, and assessing data assets",
      "Creating conceptual, logical, and physical models",
      "Developing data policies, standards, and regulations"
    ],
    answer: 0,
    explanation: "Goals: (1) protect and ensure integrity of structured data assets, (2) manage availability of data throughout its lifecycle, (3) optimize performance of database transactions."
  },
  {
    topic: "Data Development & Operations",
    question: "The activity 'Plan for Data Recovery' (4.1.3) in Data Operations falls under which category?",
    choices: ["Development (D)", "Planning (P)", "Operational (O)", "Control (C)"],
    answer: 1,
    explanation: "'Plan for Data Recovery' is marked (P). Meanwhile, 'Backup and Recover Data' is Operational (O), and 'Monitor and Tune Database Performance' is Control (C) on the context diagram."
  },
  {
    topic: "Data Development & Operations",
    question: "For the process 'Backup and Recover Data,' who are the Responsible Role and the Approving Role?",
    choices: [
      "Responsible: Data Stewards; Approving: Data Governance Council",
      "Responsible: Software Developers; Approving: Data Architects",
      "Responsible: Data Analysts; Approving: Application Architects",
      "Responsible: DBAs; Approving: DM Executive"
    ],
    answer: 3,
    explanation: "In the Data Operations summary, backup and recovery is performed by DBAs and approved by the DM Executive, with deliverables including database backups/logs, a restored database, and business continuity."
  }
];
