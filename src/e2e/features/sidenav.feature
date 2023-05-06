Feature: Side navigation tests

    Background:
        Given User navigates to the Dashboard application

    Scenario: Side navigation should open
        When User click on the header menu button
        Then Side navigation should open
        When User click on the header menu button again
        Then Side navigation should close         
