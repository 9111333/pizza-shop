import React from 'react'
import ChefSuggest from '../../Components/ChefSuggest/ChefSuggest'
import GrennFooter from '../../Components/GreenFooter/GreenFooter'
import Header from '../../Components/Header/Header'
import MainLabel from '../../Components/MainLabel/MainLabel'
import RedDiv from '../../Components/RedDiv/RedDiv'
import TenYears from '../../Components/TenYears/TenYears'
import ThreeLabels from '../../Components/ThreeLabels/ThreeLabels'

export default function HomeP() {
  return (
    <>
        <Header/>
        <MainLabel/>
        <RedDiv/>
        <ThreeLabels/>
        <TenYears/>
        <ChefSuggest/>
        <GrennFooter/>
    </>
  )
}
