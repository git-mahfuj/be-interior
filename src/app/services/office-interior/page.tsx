import OfficeChoose from '@/components/office-interior/office-choose/OfficeChoose'
import OfficeClients from '@/components/office-interior/office-clients/OfficeClients'
import OfficeReview from '@/components/office-interior/office-customers/OfficeReview'
import Officeform from '@/components/office-interior/office-form/Officeform'
import OfficePackage from '@/components/office-interior/office-package/OfficePackage'
import OfficeProjects from '@/components/office-interior/office-projects/OfficeProjects'
import OfficeService from '@/components/office-interior/office-service/OfficeService'
import OfficeInteriorSlider from '@/components/office-interior/Office-Slider/OfficeInteriorSlider'
import OfficeWork from '@/components/office-interior/office-work/OfficeWork'
import React from 'react'

const OfficePage = () => {
  return (
    <div>
      <OfficeInteriorSlider/>
      <OfficeService/>
      <OfficeChoose/>
      <OfficePackage/>
      <OfficeWork/>
      <OfficeProjects/>
      <OfficeClients/>
      <OfficeReview/>
      <Officeform/>
    </div>
  )
}

export default OfficePage