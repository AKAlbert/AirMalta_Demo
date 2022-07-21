/**
 * Created by Albert Ahimbisibwe
 * This file includes the page objects and page actions for the home page
 * It navigates to home page and launches the Login form. 
 */

/// <reference types="cypress" />

class HomePage 
{
    visit() {
        cy.visit('/')
    }

    accept_cookies() {
        // cy.get('.col-lg-2 > .btn').click()
        const cookies_button = cy.get('.btn').contains('Accept')
        cookies_button.click()

    }

    select_flight_type() {
        const route_dropdown = cy.get('input[value="Round trip"]')
        route_dropdown.click()
        // const one_way = cy.get('input[value="One way"]')
        const one_way = cy.get('div').contains('One way')
        one_way.click()

        const class_dropdown = cy.get('input[value="Economy"]')
        class_dropdown.click()
        const economy = cy.get('div').contains('Economy')
        economy.click()
    }

    select_departure_arrival() {
        const departure = cy.get('div[class= "route-selection-origin"]')
        departure.click()
        const vienna_international = cy.get('div').contains('Vienna International')
        vienna_international.click()

        const arrival = cy.get('div[class= "route-selection-destination"]')
        arrival.click()
        const malta_international_airport = cy.get('div').contains('Malta International Airport')
        malta_international_airport.click()
    }



    // select_oneway() {
    //     const dropdown = cy.get(':nth-child(1) > .select-input > .form-control')
    //     dropdown.click()
    //     const one_way = cy.get('.input-drop-container > :nth-child(2)')
    //     one_way.click()
    // }


    // select_economyy() {
    //     const dropdown = cy.get(':nth-child(2) > .select-input > .form-control')
    //     dropdown.click()
    //     const economy = cy.get('.input-drop-container').contains('Economy')
    //     economy.click()
    // }


    // select_vienna() {
    //     const textbox = cy.get('.route-selection-origin > .input-holder > .form-control').type('vienna')
    //     const vienna = cy.get(':nth-child(2) > .airport-name')
    //     vienna.click()
    // }

    // select_malta() {
    //     const textbox = cy.get('.route-selection-destination > .input-holder > .form-control > .ellipsis').type('Malta')
    //     const malta = cy.get('.airport-option')
    //     malta.click()
    // }

    select_today() {
        cy.get('.DayPickerInput > .input-group > .input-holder > .form-control').click({timeout: 3000})
        cy.get('.DayPicker-Day--today').click({timeout: 3000})
    }

    select_next_day() {
        cy.get('.DayPickerInput > .input-group > .input-holder > .form-control').click({timeout: 3000})
        cy.get('.DayPicker-Day--today').next().should('be.visible').click()
    }

    click_find_flights() {
        cy.get('.btn').contains('Find flights').click()
    }

    error_message() {
        const message = cy.get('.AlertUI__AlertMessage-bja-DJj')
        message.should('have.text', 'Unfortunately we cannot find flights for the selected date.')
    }

    verify_today_on_loaded_page_with_error_msg() {
        const dayjs = require('dayjs')
        const today = dayjs().format('DD MMM')
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1)
        cy.log(tomorrow)
        cy.get('.jdDmit >').contains(today)
    }

    click_nextday() {
        const dayjs = require('dayjs')
        const today = dayjs().format('DD MMM')
        const tomorrow = dayjs().add(1,'day').format('DD MMM')
        const nextday = cy.get('.jdDmit >').contains(tomorrow)
        nextday.click()
    }

    select_flight_price() {
        const dayjs = require('dayjs')
        const today = dayjs().format('DD MMM')
        const tomorrow = dayjs().add(1,'day').format('MMM DD')
        const nearest_flight = cy.get('button[class="sc-iOTrKq joSUVN"]')
        nearest_flight.invoke('text').then(cy.log).then((text) => {
            return text;
        })
    }


    verify_today_on_loaded_page_without_error_msg() {

        const first_element = cy.get('.button').eq(1)
        first_element.invoke('text').then(cy.log).then((text) => {
            return text;
        })
    }

    verify_price() {

        cy.get('.joSUVN').scrollIntoView().invoke('text').then(cy.log).then((text) => {
            return text;
        })
    }

    verify_price_from_calendar() {
        const dayjs = require('dayjs')
        const today = dayjs().format('DD MMM')
        const tomorrow = dayjs().add(1,'day').format('DD MMM')
        const nextday = cy.get('.jdDmit >').contains(tomorrow)
        nextday.invoke('text').then(cy.log).then((text) => {
            return text;
        })
    }
        

    return_today() {
        const dayjs = require('dayjs')
        cy.log(dayjs().format('DD MMM'))  //Prints todays date 30/09/2021
    }

    return_next_day() {
        const dayjs = require('dayjs')
        cy.log(dayjs().add(1,'day').format('DD MMM'))  //Prints todays date 30/09/2021
    }
       

}

export default HomePage