import RestaurantCard from '../RestaurantCard/RestaurantCard.jsx'
import data from '../../data/restaurants.json'

export default function RestaurantList() {
    const {restaurants} = data

    return (
        <>
            {restaurants.map(restaurant => (
                <RestaurantCard
                    key={restaurant.id}
                    name={restaurant.name}
                    image={restaurant.image}
                    location={restaurant.location}
                    isNew={restaurant.isNew}
                    slug={restaurant.slug}
                />
            ))}
        </>
    )
}
