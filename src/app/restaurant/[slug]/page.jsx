import data from "../../../data/restaurants.json";
import RestaurantHeader from "../../../components/RestaurantHeader/RestaurantHeader";
import {notFound} from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params
    const restaurant = data.restaurants.find(p => p.slug === slug)

    if (!restaurant) {
        return {
            title: 'Ohmyfood',
        }
    }

    return {
        title: `Ohmyfood | ${restaurant.name}`,
        description: restaurant.location
    }
}

export default async function RestaurantPage({ params }) {
    const { slug } = await params;
    const restaurant = data.restaurants.find((r) => r.slug === slug);

    if (!restaurant) {
        notFound()
    }

    return (
        <RestaurantHeader
            name={restaurant.name}
            image={restaurant.image}
            slug={restaurant.slug}
            menu={restaurant.menu}
        />
    );
}

export function generateStaticParams() {
    return data.restaurants.map((restaurant) => ({
        slug: restaurant.slug,
    }))
}