Feature: Playwright Home Page

    Scenario: Create Booking
        Given User navigates to "Service 1" booking page on mobile
        When User selects date and time "25/03/2024 9:00am" on mobile
        Then User should see pop up notification with selected time "25/03/2024 10:00am" on mobile
        When User clicks button "Confirm" on mobile

        # custom email or phone number.
        # When User enters email "email@email.com" on mobile
        # When User chooses phone code "+84" on mobile
        # When User enters phone number "12345678" on mobile

        When User clicks button "Next" on mobile

        # Steps to verify result after editted.
        # Then User should see string "9:00am" under field "Time" on mobile
        # Then User should see string "25" under field "Date" on mobile
        # Then User should see string "+8412345678" under field "Mobile number" on mobile
        # Then User should see string "email@email.com" under field "Email address" on mobile


        When User clicks button "Submit" on mobile

        When User navigates to View Booking page on mobile
        Then User should see the result "Pending approval"