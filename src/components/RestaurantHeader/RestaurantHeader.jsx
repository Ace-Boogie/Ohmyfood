import "@/app/styles.css";
import LikeButton from "@/components/LikeButton/LikeButton";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import CommandButton from "@/components/CommandButton/CommandButton";

export default function RestaurantHeader({name, image, slug, menu}) {
    console.log(menu)
    return (
        <>
            <div className="heroImage">
                <Image
                    src={image}
                    alt={`Photo du restaurant ${name}`}
                    width={3000}
                    height={2000}
                    quality={90}
                    className="image"
                />
            </div>
            <div className="mainWrapper">
                <div className="restaurantHeader">
                    <h2 className="restaurantName">{name}</h2>
                    <LikeButton slug={slug}/>
                </div>
                <>
                    <Menu menu={menu} type={"entrées"}/>
                    <Menu menu={menu} type={"plats"}/>
                    <Menu menu={menu} type={"desserts"}/>

                    <CommandButton/>
                </>
            </div>
        </>
    );
} 