/**
 * Created by Albert Ahimbisibwe
 * Test case - Visit home page
 * Visit airmalta.com
 * Select One way
 * Select Economy
 * Select Today
 * Click FInd Flights
 * Try whether there are any direct flights and select the First flight
 * or Check for error message if there are no flights and check the next date after today with the Euro sign
 * Get the price of the flight
 */

/// <reference types="cypress" />

import HomePage from '../page_objects/home_page/book_flight'

describe('Test suite', function() {
    //Visit the Homepage and click Home
    it('click Home on Home page', function() {

        const hp = new HomePage()
        hp.visit()
        hp.accept_cookies()
        hp.select_flight_type()
        hp.select_departure_arrival()
        hp.select_today()
        hp.click_find_flights()
        hp.select_flight_price()
        
    })
    
})