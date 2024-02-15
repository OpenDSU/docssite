---
title: Error Codes, Debug Support
layout: home
parent: OpenDSU Drafts
nav_order: 1
---


# **Error Codes, Debug Support (RFC-021)**
{: .no_toc }

{: .draft }
The RFC is being drafted.

**Document Maintainers: Andi Gabriel Tan 2024. List of other contributors in Annex. 1.**

**Copyright: MIT license**

 **Copyright** © 2018-2024 Axiologic Research and Contributors.

This document is licensed under [MIT license.](https://en.wikipedia.org/wiki/MIT_License)

<!-- TOC -->
* [1. Error codes](#1-error-codes)
* [2. General Guide for types of logs](#2-general-guide-for-types-of-logs)
* [3. Control of output in automated tests](#2-control-of-output-in-automated-tests)
* [Annex 1. Contributors](#annex-1-contributors)
<!-- TOC -->


# **1. Error codes**


| **Code**                           | **Component**  | **Description**               |
|:-----------------------------------|:---------------|:------------------------------|
| 0x2xx <br/> 0x201 brick not found  | bricking       | brick not found               |
| 0x3xx                              | anchoring      |                               |
| 0x4xx <br/> 0x401                  | WalletDB       | Failed to initialize WalletDB |
| 0x5xx                              | BDNS           |                               |
| 0x6xx                              | JWTIssuer      |                               |

# **2. General Guide for types of logs**

| Level     | Description                                                                              |
|:----------|:-----------------------------------------------------------------------------------------|
| trace (1) | Information for developers only, for debugging during development.                       |
| debug (2) | Technical information that could be used to fix issues in production and in development. |
| info (3)  | Technical information related to the normal usage of the software.                       |
| log (4)   | Business information related to the normal usage of the software.                        |
| warn (5)  | Messages that could have an impact on business.                                          |
| error (6) | Business-relevant errors or failures.                                                    |


<p style='text-align: justify;'>The "Info" logging level captures technical details related to the normal operation of the software. These are non-critical messages that provide insights into the flow and state of an application. Such logs are typically used by developers and system administrators to understand the software's behavior under regular conditions. Here are examples of “info” logs:
</p>

* "Database connection established successfully."
* "Configuration file loaded."
* "User session initiated at [timestamp]."
* "System health check passed."
* Service X started listening on port Y."

<p style='text-align: justify;'>The "log" level focuses on business-related activities during the software's regular usage. These logs provide insights into user interactions, transactions, and other operations that have business value or significance. They help business analysts, product managers, and other stakeholders understand user behavior, track business metrics, and gather data for decision-making. Here are some examples of “log” messages:
</p>

* "User JohnDoe completed a purchase transaction."
* "Invoice #1234 generated for customer ABC Corp."
* "Product XYZ added to the shopping cart."
* "Feedback submitted: 'Great user experience on the new feature!'"
* "Membership upgraded to premium tier."

<p style='text-align: justify;'>The "warn" logging level is utilized to capture potential issues or irregularities that might not immediately impact the software's functionality but could lead to problems if unaddressed. These messages signal situations where some corrective action might be needed in the future or bring attention to suboptimal conditions within the application. They serve as early indicators for developers, system administrators, or other stakeholders to anticipate and mitigate possible challenges. Here are some examples of “warn” logs:
</p>

* "Disk space usage at 85%; consider freeing up space soon."
* "API rate limit nearing threshold."
* "Deprecated function 'oldFunction()' used in module A; consider updating."
* "Mismatch in data format detected; defaulting to standard configuration."
* "User login attempts nearing lockout limit."

<p style='text-align: justify;'>The "error" logging level is reserved for capturing serious issues that disrupt the normal operation of the software or result in a failure to complete a particular task. These messages indicate that an error has occurred which may adversely affect the user experience, data integrity, or system stability. Immediate attention and corrective action are typically required. Developers, system administrators, and support teams often rely on error logs to diagnose and address critical issues promptly. Here are some examples of “error” logs:
</p>

* "Database connection failed; retrying in 60 seconds."
* "Payment transaction aborted due to a timeout."
* "Null pointer exception encountered in module B."
* "Failed to write data to log file; disk possibly full."
* "Critical security breach detected; user session terminated."

# **3. Control of output in automated tests**

**$$.debug.verbosityLevel()**

Used by the logger to decide if it outputs a log or not

**$$.debug.verbosity(level**

// level  is trace, debug, info, log, warn, error
- default level is trace in OpenDSU (new projects, if not set)
- info in production
- debug in tests



**Contributors**

1. <p style='text-align: justify;'><a href="https://www.axiologic.net/">Axiologic Research</a>: New content and improvements. Original texts under PharmaLedger Association and Novartis funding. MIT licensed content accordingly with the contracts. Publish and maintain the <a href="https://www.opendsu.org/">www.opendsu.org</a> site.

2. <p style='text-align: justify;'><a href="https://pharmaledger.org/">PharmaLedger Project</a>: Review, feedback, observations, new content, and corrections MIT licensed accordingly with the consortium agreements.

3. PrivateSky Research Project: MIT licensed content accordingly with the contracts. 
<a href="https://profs.info.uaic.ro/~ads/PrivateSky/"> https://profs.info.uaic.ro/~ads/PrivateSky/</a>


# **Annex 1. Contributors**

| **Current Editors**                   | **Email**                                         |
|:--------------------------------------|:--------------------------------------------------|
| Andi-Gabriel Țan                      | andi@axiologic.net                                |
| **Contributors Axiologic Research**   | **Email**                                         |
| Sînică Alboaie                        | sinica.alboaie@axiologic.net                      |
| Daniel Sava                           | daniel@axiologic.net                              |
| Cosmin Ursache                        | cosmin@axiologic.net                              |





