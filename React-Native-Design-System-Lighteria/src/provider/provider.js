import React, { useState } from 'react'

const DataContext = React.createContext()

const Provider = ({ children }) => {
  const [ checkoutItems, setCheckoutItems ] = useState([])
  return (
    <DataContext.Provider value={{
      checkoutItems,
      addItem: newItem => {
        let copyCheckoutItems = [...checkoutItems]
        let filteredItem = copyCheckoutItems.find(
          item => item.id === newItem.id 
        )

        if (filteredItem)
          filteredItem.quantity =+ 1
        else {
          newItem.quantity = 1
          copyCheckoutItems = [...copyCheckoutItems, newItem]
        }
        setCheckoutItems(copyCheckoutItems)
      }
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default Provider