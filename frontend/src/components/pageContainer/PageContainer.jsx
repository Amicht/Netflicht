import React, { useContext } from 'react'
import { StoreCtxt } from '../../services/StoreService'
import Footer from '../footer/Footer'
import Loading from '../Loading/Loading';


const PageContainer = ({children}) => {
    const { isLoading } = useContext(StoreCtxt).states;
  return (
    <>
        {isLoading?<Loading />:<>{children}<Footer /></>}
    </>
  )
}

export default PageContainer