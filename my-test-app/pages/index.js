import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import {useState} from 'react'


function Index(){
  const [modalState, setmodalState] = useState(false)

  const handleSelection = (resources) => {
    const idArray = resources.selection.map(resource => resource.id)
    setmodalState(false)
    console.log(idArray)
  }


  return(
    <Page 
      title = 'Product selector'
      primaryAction = {{
        content: 'Select products',
        onAction: () => setmodalState(true)
      }}
    >
      <ResourcePicker 
        resourceType='Product'
        open={modalState}
        onCancel = {() => setmodalState(false)}
        onSelection = {(resources)=> handleSelection(resources)}
      />
    </Page>
  )
}
  
  

export default Index;
