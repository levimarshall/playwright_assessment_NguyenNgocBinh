Feature: Playwright Home Page

    Scenario: Create Booking
        Given User navigates to "Service 1" booking page
        When User selects date and time "25/03/2024 9:00am"
        Then User should see pop up notification with selected time "25/03/2024 10:00am"
        When User clicks button "Confirm"

        # custom email or phone number.
        # When User enters email "email@email.com"
        # When User chooses phone code "+84"
        # When User enters phone number "12345678"

        When User clicks button "Next"

        # Steps to verify result after editted.
        # Then User should see string "9:00am" under field "Time"
        # Then User should see string "25" under field "Date"
        # Then User should see string "+8412345678" under field "Mobile number"
        # Then User should see string "email@email.com" under field "Email address"


        When User clicks button "Submit"

        When User navigates to View Booking page
        Then User should see the result "Pending approval"