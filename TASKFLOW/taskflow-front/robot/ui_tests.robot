*** Settings ***
Library    SeleniumLibrary
Suite Setup    Open Browser    http://127.0.0.1:8080    chrome
Suite Teardown    Close Browser

*** Test Cases ***
Login Page Loads
    Go To    http://127.0.0.1:8080
    Page Should Contain    TaskFlow

Create Task via UI
    Go To    http://127.0.0.1:8080
    Input Text    id=title    Test Robot Task
    Click Button    xpath=//button[text()="Criar"]
    Sleep    1s
    Page Should Contain    Test Robot Task
