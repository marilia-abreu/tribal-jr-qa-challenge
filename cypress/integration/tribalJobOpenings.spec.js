/// <reference types="cypress" />

import JobOpenings from '../pages/JobOpenings'

describe ('Validating access to Current Job Openings Page', () => {

    var jobopenings = new JobOpenings()
   
    beforeEach(() => {

        jobopenings.goToPage()
        jobopenings.checkOpenedPage()

        })
    
    it('TC01 - Testing filters' , () => {

        jobopenings.chooseDepartament()
        jobopenings.checkDepartment()
        jobopenings.chooseOffice()
        jobopenings.checkOffice()
        jobopenings.checkDisplayedJob()     
          
    })

})

