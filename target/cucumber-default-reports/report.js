$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/JobTitle.feature");
formatter.feature({
  "name": "Job Title",
  "description": "  Valiation for job title functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@jobtitle"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Job Title Validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@db"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I get all job titles from UI",
  "keyword": "When "
});
formatter.step({
  "name": "I execute \"\u003cQuery\u003e\" from Database",
  "keyword": "And "
});
formatter.step({
  "name": "Job titles are matched",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Query"
      ]
    },
    {
      "cells": [
        "SELECT JOB_TITLE FROM JOBS ORDER BY 1"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I logged in into OrangeHrm",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_logged_in_into_OrangeHrm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Admin link",
  "keyword": "And "
});
formatter.match({
  "location": "SkillsSteps.i_click_on_Admin_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on job",
  "keyword": "And "
});
formatter.match({
  "location": "JobTitleSteps.i_click_on_job()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on jobtitle",
  "keyword": "And "
});
formatter.match({
  "location": "JobTitleSteps.i_click_on_jobtitle()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Job Title Validation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@jobtitle"
    },
    {
      "name": "@db"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I get all job titles from UI",
  "keyword": "When "
});
formatter.match({
  "location": "JobTitleSteps.i_get_all_job_titles_from_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I execute \"SELECT JOB_TITLE FROM JOBS ORDER BY 1\" from Database",
  "keyword": "And "
});
formatter.match({
  "location": "JobTitleSteps.i_execute_from_Database(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Job titles are matched",
  "keyword": "Then "
});
formatter.match({
  "location": "JobTitleSteps.job_titles_are_matched()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});