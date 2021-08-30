import React from 'react'
import MainHero from "../components/MainHero/MainHero"
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay"
import CardDisplay from "../components/CardDisplay/CardDisplay"
import { useQuery, gql } from '@apollo/client';

const ANIMAL_QUERY = gql`
{
    animals {
    id
    image
    price
    slug
  }
}
`

function LandingPage() {

    const { loading, error, data } = useQuery(ANIMAL_QUERY);

    if (loading) {
        return (
            <div>
                <h1>Loading ...</h1>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <h1>Some thing Wrong</h1>
            </div>
        )
    }

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals} />
        </div>
    )
}

export default LandingPage
