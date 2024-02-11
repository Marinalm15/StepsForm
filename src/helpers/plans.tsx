import { GameController, MagicWand, Spade } from "@phosphor-icons/react";

export const plansOptions = [
    {
        img: <Spade size={32} weight="fill" />,
        name: "Arcade",
        price: "$9/mo"
    },
    {
        img: <MagicWand size={32} weight="fill" />,
        name: "Advanced",
        price: "$12/mo"
    },
    {
        img: <GameController  size={32} weight="fill" />,
        name: "Pro",
        price: "$15/mo"
    },
]